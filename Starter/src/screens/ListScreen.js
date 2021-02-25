import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friends1",age:31 },
    { name: "Friends2",age:34 },
    { name: "Friends3",age:33 },
    { name: "Friends4",age:36 },
    { name: "Friends5",age:334 },
    { name: "Friends6",age:34 },
    { name: "Friends7",age:356 },
    { name: "Friends8",age:343 },
    { name: "Friends9",age:35 },
    { name: "Friends10",age:34 },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={Styles.textStyle}>{item.name}-age:{item.age}</Text>;
      }}
    />
  );
};

const Styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
  },
});
export default ListScreen;
