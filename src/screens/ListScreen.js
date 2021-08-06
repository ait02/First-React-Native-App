import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Arif", age: 15 },
    { name: "Ikmal", age: 14 },
    { name: "Adam", age: 16 },
    { name: "Idris", age: 26 },
    { name: "Ibrahim", age: 25 },
    { name: "Ishak", age: 26 },
    { name: "Harun", age: 43 },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
    textAlign: "center",
  },
});

export default ListScreen;
