import { View, Text, Dimensions } from "react-native";

import { Option } from "../Option";
import { styles } from "./styles";
import Animated, { Keyframe } from "react-native-reanimated";

type QuestionProps = {
  title: string;
  alternatives: string[];
};

type Props = {
  question: QuestionProps;
  alternativeSelected?: number | null;
  setAlternativeSelected?: (value: number) => void;
};

const SCREEN_WIDTH = Dimensions.get("window").width;

export function Question({
  question,
  alternativeSelected,
  setAlternativeSelected,
}: Props) {
  
  const enteringKeyFrame = new Keyframe({
    0: {
      opacity: 0,
      transform: [
        { translateX: SCREEN_WIDTH },
        { rotate: '90deg'}
      ],
    },
    70: {
      opacity: 0.3,
    },
    100: {
      opacity: 1,
      transform: [{ translateX: 0 }],
    },
  });

  return (
    <Animated.View style={styles.container} entering={enteringKeyFrame}>
      <Text style={styles.title}>{question.title}</Text>

      {question.alternatives.map((alternative, index) => (
        <Option
          key={index}
          title={alternative}
          checked={alternativeSelected === index}
          onPress={() =>
            setAlternativeSelected && setAlternativeSelected(index)
          }
        />
      ))}
    </Animated.View>
  );
}