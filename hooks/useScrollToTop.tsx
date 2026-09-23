import { useState, useRef } from "react";
import { FlatList } from "react-native";
import ScrollToTop from "../components/ScrollToTop";

export function useScrollToTop() {
  const [scrollY, setScrollY] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  };

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setScrollY(offsetY);
  };

  return {
    flatListRef,
    scrollY,
    scrollToTop,
    handleScroll,
    ScrollToTopComponent: () => (
      <ScrollToTop scrollY={scrollY} onScrollToTop={scrollToTop} />
    ),
  };
}
