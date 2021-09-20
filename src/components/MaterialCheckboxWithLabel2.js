import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCheckboxWithLabel2(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon
        name={props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
        style={styles.checkIcon}
      ></Icon>
      <Text style={styles.homeDelivery}>{props.label || "Home delivery"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    flexDirection: "row",
    flexWrap: "nowrap"
  },
  checkIcon: {
    color: "#3F51B5",
    fontSize: 15,
    lineHeight: 28,
    margin: 0
  },
  homeDelivery: {
    fontSize: 10,
    color: "rgba(0,0,0,0.87)",
    fontFamily: "comic-sans-ms-regular",
    margin: 0
  }
});

export default MaterialCheckboxWithLabel2;
