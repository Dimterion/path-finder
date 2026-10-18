import { useCallback, useRef, useState } from "react";
import {
  FlatList,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from "react-native";

type UseScrollToTopResult = {
  flatListRef: React.RefObject<FlatList | null>;
  showScrollToTop: boolean;
  scrollToTop: () => void;
  handleScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

export function useScrollToTop(threshold = 300): UseScrollToTopResult {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const flatListRef = useRef<FlatList | null>(null);

  const scrollToTop = useCallback(() => {
    flatListRef.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
  }, []);

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetY = event.nativeEvent.contentOffset.y;
      const shouldShow = offsetY > threshold;

      setShowScrollToTop((previous) =>
        previous === shouldShow ? previous : shouldShow,
      );
    },
    [threshold],
  );

  return {
    flatListRef,
    showScrollToTop,
    scrollToTop,
    handleScroll,
  };
}
