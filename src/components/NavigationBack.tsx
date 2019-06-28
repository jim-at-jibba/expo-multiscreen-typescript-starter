import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationScreenProp, NavigationRoute } from "react-navigation";
import { gStyle } from "../constants";
// grab svg icon
import SvgCircleLeft from "./icons/Svg.CircleLeft";

interface Navigation {
  navigation: NavigationScreenProp<NavigationRoute, any>;
}

const NavigationBack = ({ navigation }) => (
  <TouchableOpacity
    accessible
    accessibilityLabel="go back"
    accessibilityComponentType="button"
    accessibilityTraits="button"
    activeOpacity={gStyle.activeO}
    onPress={() => navigation.goBack(navigation.state.key)}
    style={{ paddingHorizontal: 16, paddingVertical: 8 }}
  >
    <SvgCircleLeft active={true} />
  </TouchableOpacity>
);

export default NavigationBack;
