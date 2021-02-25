import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet, Button } from "react-native";

const ColorScreen = () => {
  const [colors, setcolors] = useState([]);
  console.log(colors);
  return (
    <View>
      <Button
        title="Add a Colour"
        onPress={() => {
          setcolors([...colors, RandomRGb()]);
        }}
      />

      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const RandomRGb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};
const Styles = StyleSheet.create({});

export default ColorScreen;
