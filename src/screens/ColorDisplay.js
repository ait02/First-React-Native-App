import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ColorDisplay = () => {
  const [colors, setColors] = useState([]);
  const [bgColor, setBgColor] = useState("fff");

  const WINDOW_WIDTH = Dimensions.get("window").width;
  const WINDOW_HEIGHT = Dimensions.get("window").height;

  useEffect(() => {
    if (!colors.length) {
      setColors([...colors, randomColor()]);
    }
  }, []);

  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  const handleDeleteAlert = (name) => (event) => {
    alert = Alert.alert(
      "Are you sure you want to remove this Color?",
      "This action cannot be undone",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Remove",
          onPress: handleDelete(name),
          style: "destructive",
        },
      ]
    );
    return alert;
  };

  const handleDelete = (name) => (event) => {
    setColors(
      colors.filter(function (color) {
        return color !== name;
      })
    );
  };

  const rgbToHex = (bgColor) =>
    "#" +
    [bgColor]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");

  return (
    <View style={{ backgroundColor: bgColor, flex: 1 }}>
      {/* <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomColor()]);
        }}
        color={Platform.OS === "ios" ? "" : rgbToHex(bgColor)}
      /> */}
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{
                height: 100,
                // width: 100,
                backgroundColor: item,
                flex: 1,
                flexDirection: "column",
                maxWidth: "25%",
              }}
              onPress={() => setBgColor(item)}
              onLongPress={handleDeleteAlert(item)}
            >
              <Text
                style={{
                  alignItems: "center",
                  textAlign: "center",
                  lineHeight: 90,
                }}
              >
                {item === bgColor ? "Current Color" : ""}
              </Text>
            </TouchableOpacity>
          );
        }}
        numColumns={4}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          height: 40,
          top: WINDOW_HEIGHT - 250,
          width: WINDOW_WIDTH,
        }}
        onPress={() => {
          setColors([...colors, randomColor()]);
        }}
      >
        <Text
          style={{
            borderWidth: 2,
            width: 50,
            height: 50,
            textAlign: "center",
            lineHeight: 48,
            fontWeight: "800",
            backgroundColor: `#${bgColor}`,
          }}
        >
          <AntDesign name="pluscircle" size={24} color="black" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ColorDisplay;
