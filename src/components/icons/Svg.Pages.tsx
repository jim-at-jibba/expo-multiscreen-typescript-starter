import React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../constants";
import SvgProps from "./icon";

const SvgPages: React.FC<SvgProps> = ({ active = false, size = 20 }) => (
  <Svg height={size} width={size} viewBox="0 0 32 32">
    <Path
      d="M20 8V0H6L0 6v18h12v8h20V8H20zM6 2.828V6H2.828L6 2.828zM2 22V8h6V2h10v6l-6 6v8H2zm16-11.172V14h-3.172L18 10.828zM30 30H14V16h6v-6h10v20z"
      fill={active ? colors.brandPrimary : colors.grey}
    />
  </Svg>
);

export default SvgPages;
