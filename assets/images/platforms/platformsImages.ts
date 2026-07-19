import type { ImageSourcePropType } from "react-native";
import type { PlatformImageKey } from "../../../features/platforms/data";

export const platformImages: Record<PlatformImageKey, ImageSourcePropType> = {
  linkedin: require("../../../assets/images/platforms/linkedin.jpg"),
  welcometothejungle: require("../../../assets/images/platforms/welcometothejungle.jpg"),
  glassdoor: require("../../../assets/images/platforms/glassdoor.jpg"),
};
