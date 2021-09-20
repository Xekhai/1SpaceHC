import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

function Goback(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
    ></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 37,
    marginLeft: 17
  }
});

export default Goback;
