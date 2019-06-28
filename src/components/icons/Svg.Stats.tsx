import React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../constants";
import SvgProps from "./icon";

const SvgStats: React.FC<SvgProps> = ({ active = false, size = 20 }) => (
  <Svg height={size} width={size} viewBox="0 0 32 32">
    <Path
      d="M0 26h32v4H0zm4-8h4v6H4zm6-8h4v14h-4zm6 6h4v8h-4zm6-12h4v20h-4z"
      fill={active ? colors.brandPrimary : colors.grey}
    />
  </Svg>
);

export default SvgStats;
