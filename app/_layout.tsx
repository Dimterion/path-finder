import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Pathfinder", headerBackVisible: false }}
      />
      <Stack.Screen name="platforms" options={{ title: "Platforms" }} />
      <Stack.Screen name="builder" options={{ title: "Builder" }} />
    </Stack>
  );
}
