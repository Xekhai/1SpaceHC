import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function MaterialBasicFooter(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Home")}
        style={styles.btnWrapper1}
      >
        <FontAwesomeIcon name="home" style={styles.icon1}></FontAwesomeIcon>
        <Text style={styles.home}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Chats")}
        style={styles.activebtnWrapper}
      >
        <MaterialCommunityIconsIcon
          name="message-text"
          style={styles.activeIcon}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.chats}>Chats</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Settings")}
        style={styles.btnWrapper2}
      >
        <IoniconsIcon name="md-settings" style={styles.icon2}></IoniconsIcon>
        <Text style={styles.settings}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper3}>
        <Image
          source={require("../assets/images/online-payment.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.payments}>Payments</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 15
  },
  btnWrapper1: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 6,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    opacity: 0.8
  },
  home: {
    color: "rgba(0,0,0,1)",
    opacity: 0.8,
    alignSelf: "center"
  },
  activebtnWrapper: {
    paddingTop: 6,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "space-between"
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 24
  },
  chats: {
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    paddingTop: 4,
    alignSelf: "center"
  },
  btnWrapper2: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 6,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon2: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    opacity: 0.8
  },
  settings: {
    color: "rgba(0,0,0,1)",
    opacity: 0.8
  },
  btnWrapper3: {
    paddingTop: 8,
    paddingBottom: 6,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "space-around"
  },
  image: {
    width: 24,
    height: 24
  },
  payments: {
    color: "rgba(0,0,0,1)",
    opacity: 0.8
  }
});

export default MaterialBasicFooter;
