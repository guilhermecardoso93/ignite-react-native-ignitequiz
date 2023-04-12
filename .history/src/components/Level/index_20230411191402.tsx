import { Pressable, PressableProps, Text } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle,
  withTiming,
  interpolateColor
} from 'react-native-reanimated';

import { THEME } from '../../styles/theme';
import { styles } from './styles';
import { useEffect } from 'react';

const TYPE_COLORS = {
  EASY: THEME.COLORS.BRAND_LIGHT,
  HARD: THEME.COLORS.DANGER_LIGHT,
  MEDIUM: THEME.COLORS.WARNING_LIGHT,
}

type Props = PressableProps & {
  title: string;
  isChecked?: boolean;
  type?: keyof typeof TYPE_COLORS;
}

export function Level({ title, type = 'EASY', isChecked = false, ...rest }: Props) {
  const scale = useSharedValue(1)
  const checked = useSharedValue(1)
  
  const COLOR = TYPE_COLORS[type];

  const animatedContainerStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      backgroundColor: interpolateColor(
        checked.value, 
        [0,1],
        ['transparent', COLOR]
        )
      
    }
  })

  function onPressIn() {
    scale.value = withTiming(1.1);
  }

  function onPressOut() {
    scale.value = withTiming(1);
  }

  useEffect(() => {
    checked.value = withTiming(isChecked ? 1 : 0)
  }, [isChecked])

  return (
    <Pressable 
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      {...rest}
    >
      <Animated.View style={
        [
          styles.container,
          animatedContainerStyles,
          { borderColor: COLOR}
        ]
      }>
        <Text style={
          [
            styles.title,
            { color: isChecked ? THEME.COLORS.GREY_100 : COLOR }
          ]}>
          {title}
        </Text>
      </Animated.View>
    </Pressable>
  );
}