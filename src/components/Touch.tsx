import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { gStyle } from "../constants";

interface TouchProps {
  accessible: boolean;
  activeO: {};
  onPress: () => void;
  style: {};
  text: string;
  textStyle: {};
}
const Touch = ({
  accessible = true,
  activeO = gStyle.activeO,
  onPress,
  style = gStyle.btn,
  text = "",
  textStyle = gStyle.btnText
}) => (
  <TouchableOpacity
    accessible={accessible}
    activeOpacity={activeO}
    onPress={onPress}
    style={style}
  >
    <Text style={textStyle}>{text}</Text>
  </TouchableOpacity>
);

export default Touch;
