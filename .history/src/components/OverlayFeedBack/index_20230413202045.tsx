import { Canvas } from "@shopify/react-native-skia";
import { useWindowDimensions } from "react-native";
import Animated from "react-native-reanimated";

export function OverlayFeedBack() {
  const { height, width } = useWindowDimensions()
  return (
    <Animated.View style={{height, width, position: "absolute"}}>
      <Canvas style={{flex: 1}}>

      </Canvas>
    </Animated.View>
  )
}