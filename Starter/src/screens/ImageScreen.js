import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetails from "../component/ImageDetails";

const ImageSreens = () => {
  return (
    <View>
      <Text>Image screens</Text>
      <ImageDetails
        imageSource={require("../../assets/forest.jpg")}
        title="Forest"
      />
      <ImageDetails
        imageSource={require("../../assets/beach.jpg")}
        title="Beach"
      />
      <ImageDetails
        imageSource={require("../../assets/mountain.jpg")}
        title="Mountain"
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageSreens;
