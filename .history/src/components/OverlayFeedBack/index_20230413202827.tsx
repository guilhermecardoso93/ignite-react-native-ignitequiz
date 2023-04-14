import { Canvas, Rect, BlurMask } from "@shopify/react-native-skia";
import { useWindowDimensions } from "react-native";
import Animated from "react-native-reanimated";
import { THEME } from "../../styles/theme";

const STATUS = ['transparent', THEME.COLORS.BRAND_LIGHT, THEME.COLORS.DANGER_LIGHT]

export function OverlayFeedBack() {
  const { height, width } = useWindowDimensions();
  return (
    <Animated.View style={{ height, width, position: "absolute"}}>
      <Canvas style={{ flex: 1 }}>
        <Rect
          x={0}
          y={0}
          width={width}
          height={height}
          color='red'
        >
          <BlurMask blur={50} style='inner' />
        </Rect>
      </Canvas>
    </Animated.View>
  );
}
