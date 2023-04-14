import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";
import { Canvas, Skia, Path } from "@shopify/react-native-skia";

type Props = TouchableOpacityProps & {
  checked: boolean;
  title: string;
};

const CHECK_SIZE = 28;
const CHECK_STROKE = 2;

export function Option({ checked, title, ...rest }: Props) {
  const RADIUS = (CHECK_SIZE - CHECK_STROKE) / 2;

  const path = Skia.Path.Make();
  path.addCircle(CHECK_SIZE, CHECK_SIZE, RADIUS);

  return (
    <TouchableOpacity
      style={[styles.container, checked && styles.checked]}
      {...rest}
    >
      <Text style={styles.title}>{title}</Text>
      <Canvas
        style={{ height: CHECK_SIZE * 2, width: CHECK_SIZE * 2 }}
      >
        <Path
          path={path}
        />
      </Canvas>
    </TouchableOpacity>
  );
}
