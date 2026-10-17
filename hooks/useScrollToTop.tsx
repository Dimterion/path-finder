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
    setScrollY(event.nativeEvent.contentOffset.y);
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
