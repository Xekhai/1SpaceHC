import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCheckboxWithLabel(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon
        name={props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
        style={styles.checkIcon}
      ></Icon>
      <Text style={styles.imaging}>{props.label || "Imaging"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  checkIcon: {
    color: "#3F51B5",
    fontSize: 15,
    lineHeight: 28
  },
  imaging: {
    marginLeft: 2,
    fontSize: 12,
    color: "rgba(0,0,0,0.87)",
    fontFamily: "comic-sans-ms-regular"
  }
});

export default MaterialCheckboxWithLabel;
