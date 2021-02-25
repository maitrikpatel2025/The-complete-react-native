import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [count, setcount] = useState(0);
  return (
    <View>
      <Text>counter</Text>
      <Button title="increment" onPress={() => setcount(count + 1)} />
      <Button title="decrement" onPress={() => setcount(count - 1)} />
      <Text>{count}</Text>
    </View>
  );
};
const Style = StyleSheet.create({});
export default CounterScreen;
