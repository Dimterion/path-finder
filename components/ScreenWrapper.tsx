import { useState, useRef } from "react";
import {
  FlatList,
  FlatListProps,
  View,
  StyleSheet,
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
  children,
}: ScreenWrapperProps<T>) {
  const [scrollY, setScrollY] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={contentContainerStyle}
        onScroll={(event) => {
          const offsetY = event.nativeEvent.contentOffset.y;
          setScrollY(offsetY);
        }}
        scrollEventThrottle={16}
      />
      {children}
      <ScrollToTop scrollY={scrollY} onScrollToTop={scrollToTop} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
