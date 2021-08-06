import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import BoxScreen from "./src/screens/BoxScreen";
import ColorDisplay from "./src/screens/ColorDisplay";

const navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: true,
      },
    },
    Components: {
      screen: ComponentsScreen,
      navigationOptions: {
        headerShown: true,
      },
    },
    List: {
      screen: ListScreen,
      navigationOptions: {
        headerShown: true,
      },
    },
    Image: {
      screen: ImageScreen,
      navigationOptions: {
        headerShown: true,
      },
    },
    Color: {
      screen: ColorDisplay,
      navigationOptions: {
        headerShown: true,
      },
    },
    Box: {
      screen: BoxScreen,
      navigationOptions: {
        headerShown: true,
      },
    },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "First React Native App",
    },
  }
);

export default createAppContainer(navigator);
