import React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../constants";
import SvgProps from "./icon";

const SvgHome: React.FC<SvgProps> = ({ active = false, size = 20 }) => (
  <Svg height={size} width={size} viewBox="0 0 32 32">
    <Path
      d="M32 18.451L16 6.031 0 18.451v-5.064L16 .967l16 12.42zM28 18v12h-8v-8h-8v8H4V18l12-9z"
      fill={active ? colors.brandPrimary : colors.grey}
    />
  </Svg>
);

export default SvgHome;
