import { useEffect } from "react";
import { Canvas, Rect, BlurMask } from "@shopify/react-native-skia";
import { useWindowDimensions } from "react-native";
import Animated, { useSharedValue, withSequence, withTiming } from "react-native-reanimated";
import { THEME } from "../../styles/theme";


const STATUS = [
  "transparent",
  THEME.COLORS.BRAND_LIGHT,
  THEME.COLORS.DANGER_LIGHT,
];

type Props = {
  status: number;
};

export function OverlayFeedBack({ status }: Props) {
  const color = STATUS[status];
  const opacity = useSharedValue(0)
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    opacity.value = withSequence(
      withTiming(1),
      withTiming(0),
    )
  }, [status])

  return (
    <Animated.View style={{ height, width, position: "absolute" }}>
      <Canvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={width} height={height} color="red">
          <BlurMask blur={50} style="inner" />
        </Rect>
      </Canvas>
    </Animated.View>
  );
}
