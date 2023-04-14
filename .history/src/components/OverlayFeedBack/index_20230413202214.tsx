import { Canvas, Rect } from "@shopify/react-native-skia";
import { useWindowDimensions } from "react-native";
import Animated from "react-native-reanimated";

export function OverlayFeedBack() {
  const { height, width } = useWindowDimensions();
  return (
    <Animated.View style={{ height, width, position: "absolute" }}>
      <Canvas style={{ flex: 1 }}>
        <Rect
          x={0}
          y={0}
          width={100}
          height={100}
          color='blue'
        />
      </Canvas>
    </Animated.View>
  );
}
