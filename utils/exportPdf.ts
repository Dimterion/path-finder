import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system/legacy";
import { Alert } from "react-native";
import { type CvData } from "../features/cv/data";
import { buildCvHtml } from "./cvHtml";

export async function exportCvPdf(cv: CvData): Promise<void> {
  if (!cv.name.trim()) {
    Alert.alert("Name required", "Please enter your name before exporting.");
    return;
  }

  try {
    const html = buildCvHtml(cv);

    const result = await Print.printToFileAsync({
      html,
      base64: true,
    });

    const base64 = result?.base64;

    if (!base64) {
      throw new Error("PDF data was not generated.");
    }

    const canShare = await Sharing.isAvailableAsync();

    if (!canShare) {
      Alert.alert(
        "Sharing unavailable",
        "File sharing is not available on this device.",
      );
      return;
    }

    const fileName = `cv-export-${Date.now()}.pdf`;
    const fileUri = `${FileSystem.cacheDirectory}${fileName}`;

    await FileSystem.writeAsStringAsync(fileUri, base64, {
      encoding: FileSystem.EncodingType.Base64,
    });

    await Sharing.shareAsync(fileUri, {
      mimeType: "application/pdf",
      dialogTitle: "Export CV",
      UTI: "com.adobe.pdf",
    });
  } catch (error) {
    console.error("PDF export failed:", error);

    Alert.alert(
      "Export failed",
      error instanceof Error
        ? error.message
        : "Something went wrong while generating the PDF.",
    );
  }
}
