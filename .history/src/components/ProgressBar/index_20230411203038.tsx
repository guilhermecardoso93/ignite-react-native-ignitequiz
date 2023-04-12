import { View } from 'react-native';

import { styles } from './styles';
import Animated from 'react-native-reanimated';

interface Props {
  total: number;
  current: number;
}

export function ProgressBar({ total, current }: Props) {
  const percentage = Math.round((current / total) * 100);

  return (
    <Animated.View style={styles.track}>
      <View style={[styles.progress, { width: `${percentage}%` }]} />
    </Animated.View>
  );
}