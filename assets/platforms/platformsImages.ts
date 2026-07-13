import type { ImageSourcePropType } from "react-native";
import type { PlatformImageKey } from "../../data/platforms";

export const platformImages: Record<PlatformImageKey, ImageSourcePropType> = {
  linkedin: require("../../assets/platforms/linkedin.jpg"),
  welcometothejungle: require("../../assets/platforms/welcometothejungle.jpg"),
  glassdoor: require("../../assets/platforms/glassdoor.jpg"),
};
