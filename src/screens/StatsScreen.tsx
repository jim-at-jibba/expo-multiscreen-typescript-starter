import React from "react";
import { ScrollView, Text, View } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { gStyle } from "../constants";

const StatsScreen: NavigationStackScreenComponent = () => (
  <View style={gStyle.container}>
    <ScrollView contentContainerStyle={gStyle.contentContainer}>
      <Text style={gStyle.text}>Stats Content Area</Text>
    </ScrollView>
  </View>
);

StatsScreen.navigationOptions = {
  headerTitleStyle: {
    flex: 1,
    textAlign: "center"
  },
  title: "Stats"
};

export default StatsScreen;
