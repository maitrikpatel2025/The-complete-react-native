import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetails = ({ imageSource, title }) => {
  return (
    <View>
      <Image source={imageSource}></Image>
      <Text>{title}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({});

export default ImageDetails;
