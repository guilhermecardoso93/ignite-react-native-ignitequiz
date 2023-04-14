import { Canvas, Rect, BlurMask } from "@shopify/react-native-skia";
import { useWindowDimensions } from "react-native";
import Animated from "react-native-reanimated";

export function OverlayFeedBack() {
  const { height, width } = useWindowDimensions();
  return (
    <Animated.View style={{ height, width, position: "absolute", zIndex: 1 }}>
      <Canvas style={{ flex: 1 }}>
        <Rect
          x={50}
          y={200}
          width={100}
          height={100}
          color='blue'
        >
          <BlurMask blur={50} style='normal' />
        </Rect>
      </Canvas>
    </Animated.View>
  );
}
