import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textstyle}>HomeScreen</Text>
      <Button
        title="componentDemo"
        onPress={() => navigation.navigate("Component")}
      />
      <Button
        title="image screen"
        onPress={() => navigation.navigate("Imagescreen")}
      />
      <Button
        title="Counter screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Color screen"
        onPress={() => navigation.navigate("Color")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>ListDemo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 30,
  },
});

export default HomeScreen;
