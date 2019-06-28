import React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../constants";
import SvgProps from "./icon";

const SvgCircleLeft: React.FC<SvgProps> = ({ active = false, size = 24 }) => (
  <Svg height={size} width={size} viewBox="0 0 32 32">
    <Path
      d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-29c7.18 0 13 5.82 13 13s-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3z"
      fill={active ? colors.brandPrimary : colors.grey}
    />
    <Path
      d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z"
      fill={active ? colors.brandPrimary : colors.grey}
    />
  </Svg>
);

export default SvgCircleLeft;
