import type { ImageSourcePropType } from "react-native";
import type { ListingImageKey } from "../../../features/listings/data";

export const listingImages: Record<ListingImageKey, ImageSourcePropType> = {
  placeholder: require("../../../assets/images/listings/placeholder.jpg"),
};
