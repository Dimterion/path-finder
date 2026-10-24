import { type CvData } from "../features/cv/data";
import { buildCvHtml } from "./cvHtml";

export async function exportCvPdf(cv: CvData): Promise<void> {
  if (!cv.name.trim()) {
    window.alert("Please enter your name before exporting.");
    return;
  }

  try {
    const html = buildCvHtml(cv);

    const iframe = document.createElement("iframe");

    iframe.style.position = "fixed";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "0";
    iframe.style.visibility = "hidden";

    document.body.appendChild(iframe);

    let hasPrinted = false;

    const printIframe = () => {
      if (hasPrinted) {
        return;
      }

      hasPrinted = true;

      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();

      window.setTimeout(() => {
        iframe.remove();
      }, 1000);
    };

    iframe.onload = printIframe;

    const iframeDocument = iframe.contentDocument;

    if (!iframeDocument) {
      throw new Error("Unable to create print document.");
    }

    iframeDocument.open();
    iframeDocument.write(html);
    iframeDocument.close();

    window.setTimeout(() => {
      if (document.body.contains(iframe)) {
        printIframe();
      }
    }, 500);
  } catch (error) {
    console.error("Web PDF export failed:", error);

    window.alert("Export failed. Please try again.");
  }
}
