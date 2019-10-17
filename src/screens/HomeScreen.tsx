import React from "react";
import { ScrollView, Text, View } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { gStyle } from "../constants";

// components
import Touch from "../components/Touch";

const HomeScreen: NavigationStackScreenComponent = ({ navigation }) => (
  <View style={gStyle.container}>
    <ScrollView contentContainerStyle={gStyle.contentContainer}>
      <Text style={gStyle.text}>Home Content Area 2</Text>

      <View style={gStyle.spacer80} />

      <Touch
        onPress={() => navigation.navigate("MultiBase")}
        text='jump to Multi tab'
      />
    </ScrollView>
  </View>
);

HomeScreen.navigationOptions = {
  header: null
};

export default HomeScreen;
