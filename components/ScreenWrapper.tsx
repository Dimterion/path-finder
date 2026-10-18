import { useCallback, useRef, useState } from "react";
import {
  FlatList,
  FlatListProps,
  StyleSheet,
  View,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  type ViewStyle,
} from "react-native";
import ScrollToTop from "./ScrollToTop";

type ScreenWrapperProps<T> = {
  data: T[];
  keyExtractor: FlatListProps<T>["keyExtractor"];
  renderItem: FlatListProps<T>["renderItem"];
  ListHeaderComponent?: FlatListProps<T>["ListHeaderComponent"];
  ListEmptyComponent?: FlatListProps<T>["ListEmptyComponent"];
  contentContainerStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  scrollToTopThreshold?: number;
  children?: React.ReactNode;
};

export default function ScreenWrapper<T>({
  data,
  keyExtractor,
  renderItem,
  ListHeaderComponent,
  ListEmptyComponent,
  contentContainerStyle,
  containerStyle,
  scrollToTopThreshold = 300,
  children,
}: ScreenWrapperProps<T>) {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const flatListRef = useRef<FlatList<T> | null>(null);

  const scrollToTop = useCallback(() => {
    flatListRef.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
  }, []);

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetY = event.nativeEvent.contentOffset.y;
      const shouldShow = offsetY > scrollToTopThreshold;

      setShowScrollToTop((previous) =>
        previous === shouldShow ? previous : shouldShow,
      );
    },
    [scrollToTopThreshold],
  );

  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList<T>
        ref={flatListRef}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={contentContainerStyle}
        onScroll={handleScroll}
        scrollEventThrottle={32}
      />

      {children}

      <ScrollToTop visible={showScrollToTop} onScrollToTop={scrollToTop} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
