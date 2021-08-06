<<<<<<< HEAD
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
=======
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [reminder, setReminder] = useState = [];
  return (
    <View style={styles.container}>
      <View>
        {console.log(reminder)}
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
>>>>>>> 2622a63c0644956dd87cee224cc87451112cb1e0
