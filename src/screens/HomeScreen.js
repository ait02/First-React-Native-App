import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      {/* <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      /> */}
      <Button
        title="Navigate to FlatList Practice"
        onPress={() => navigation.navigate("List")}
      />
      {/* <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate("Image")}
      /> */}
      <Button
        title="Navigate to Colors (Handling States)"
        onPress={() => navigation.navigate("Color")}
      />
      {/* <Button
        title="Go to Box Demo"
        onPress={() => navigation.navigate("Box")}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});

export default HomeScreen;
