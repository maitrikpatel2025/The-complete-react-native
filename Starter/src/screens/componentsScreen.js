import React from "react";
import { Text, View, StyleSheet } from "react-native";

const componentsScreen = () => {
  return (
    <View>
      <Text style={Styles.textSyles}>i AM mAITRIK</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  textSyles: {
    fontSize: 30,
  },
});
export default componentsScreen;
