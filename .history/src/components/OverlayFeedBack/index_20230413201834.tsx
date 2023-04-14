import { useWindowDimensions } from "react-native";
import Animated from "react-native-reanimated";

export function OverlayFeedBack() {
  const { height, width } = useWindowDimensions()
  return (
    <Animated.View style={{height, width}}>

    </Animated.View>
  )
}