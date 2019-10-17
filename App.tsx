import React from "react";
import { Platform, StatusBar, View } from "react-native";
import { AppLoading } from "expo";
import { func, gStyle } from "./src/constants";

// navigation switch
import AppSwitchNav from "./src/navigation/AppSwitchNav";

interface Props {}
interface State {
  isLoading: boolean;
  theme: "light" | "dark";
}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isLoading: true,
      theme: "light"
    };

    // iPad? (TODO in future android tablet checked)
    // if (device.isTablet) {
    //   ScreenOrientation.allowAsync(
    //     ScreenOrientation.Orientation.ALL_BUT_UPSIDE_DOWN
    //   );
    // }
  }

  render() {
    const { isLoading, theme } = this.state;
    const iOSStatusType = theme === "light" ? "dark-content" : "light-content";

    if (isLoading) {
      return (
        <AppLoading
          onFinish={() => this.setState({ isLoading: false })}
          startAsync={func.loadAssetsAsync}
        />
      );
    }

    return (
      <View style={gStyle.container}>
        <StatusBar
          barStyle={Platform.OS === "ios" ? iOSStatusType : "light-content"}
        />

        <AppSwitchNav />
      </View>
    );
  }
}

export default App;
