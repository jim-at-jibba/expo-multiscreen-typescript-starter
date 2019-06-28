import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  NavigationScreenComponent,
  NavigationScreenProps
} from "react-navigation";
import { colors, gStyle } from "../constants";
// components
import Touch from "../components/Touch";

// interface Props extends NavigationScreenProps {}

const MultiBaseScreen: NavigationScreenComponent<NavigationScreenProps> = ({
  navigation
}) => (
  <View style={styles.container}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={gStyle.text}>Multi Screens Content Area</Text>

      <View style={gStyle.spacer80} />

      <Touch
        onPress={() => navigation.navigate("MultiLevel2")}
        text="go to level 2"
      />
    </ScrollView>
  </View>
);

MultiBaseScreen.navigationOptions = {
  headerTitleStyle: {
    flex: 1,
    textAlign: "center"
  },
  headerStyle: {
    borderBottomColor: "transparent",
    elevation: 0
  },
  title: "Multi Screens"
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  contentContainer: {
    alignItems: "center",
    paddingTop: 30
  }
});

export default MultiBaseScreen;
