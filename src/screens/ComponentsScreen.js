import React from "react";
import { Text, StyleSheet, View, SafeAreaView } from "react-native";

const ComponentsScreen = () => {
  const name = "Arif";

  return (
    <SafeAreaView>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
