import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { colors } from "../constants";

// grab screens
import HomeScreen from "../screens/HomeScreen";
import MultiBaseScreen from "../screens/MultiBaseScreen";
import MultiLevel2Screen from "../screens/MultiLevel2Screen";
import SettingsScreen from "../screens/SettingsScreen";
import StatsScreen from "../screens/StatsScreen";

// grab svg icons
import SvgCog from "../components/icons/Svg.Cog";
import SvgHome from "../components/icons/Svg.Home";
import SvgPages from "../components/icons/Svg.Pages";
import SvgStats from "../components/icons/Svg.Stats";

interface IconProps {
  focused: boolean;
}

// Home Stack
// /////////////////////////////////////////////////////////////////////////////
const HomeStack = createStackNavigator({
  Home: HomeScreen
});

const HomeTabBarIcon: React.FC<IconProps> = ({ focused }) => (
  <SvgHome active={focused} />
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: HomeTabBarIcon
};

// Pages Stack
// /////////////////////////////////////////////////////////////////////////////
const MultiStack = createStackNavigator({
  MultiBase: MultiBaseScreen,
  MultiLevel2: MultiLevel2Screen
});

const MultiTabBarIcon: React.FC<IconProps> = ({ focused }) => (
  <SvgPages active={focused} />
);

MultiStack.navigationOptions = {
  tabBarLabel: "Multi",
  tabBarIcon: MultiTabBarIcon
};

// Settings Stack
// /////////////////////////////////////////////////////////////////////////////
const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

const SettingsTabBarIcon: React.FC<IconProps> = ({ focused }) => (
  <SvgCog active={focused} />
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: SettingsTabBarIcon
};

// Status Stack
// /////////////////////////////////////////////////////////////////////////////
const StatsStack = createStackNavigator({
  Stats: StatsScreen
});

const StatsTabBarIcon: React.FC<IconProps> = ({ focused }) => (
  <SvgStats active={focused} />
);

StatsStack.navigationOptions = {
  tabBarLabel: "Stats",
  tabBarIcon: StatsTabBarIcon
};

export default createBottomTabNavigator(
  {
    HomeStack,
    MultiStack,
    SettingsStack,
    StatsStack
  },
  {
    initialRouteName: "HomeStack",
    tabBarOptions: {
      activeTintColor: colors.brandPrimary,
      inactiveTintColor: colors.grey
    }
  }
);
