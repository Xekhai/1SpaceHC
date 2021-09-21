import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Center } from "@builderx/utils";

function Notif(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group7}>
        <View style={styles.rect}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={styles.button1}
          >
            <Icon name="chevron-left" style={styles.icon1}></Icon>
          </TouchableOpacity>
          <Text style={styles.notifications}>Notifications</Text>
        </View>
        <Center horizontal>
          <View style={styles.group8}>
            <Image
              source={require("../assets/images/safety-box.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <Text style={styles.noNotifications}>No notifications</Text>
          </View>
        </Center>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group7: {
    alignItems: "center",
    flex: 1
  },
  rect: {
    backgroundColor: "rgba(118,213,203,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.32,
    shadowRadius: 0,
    alignSelf: "stretch",
    height: 150,
    justifyContent: "flex-end"
  },
  button1: {
    flexDirection: "row",
    alignSelf: "flex-start",
    width: 50,
    height: 50,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 52,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.3,
    shadowRadius: 0,
    marginTop: 42,
    marginLeft: 23,
    alignItems: "center",
    justifyContent: "center"
  },
  icon1: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    alignSelf: "center"
  },
  notifications: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    alignSelf: "center",
    margin: 0,
    marginBottom: 10
  },
  group8: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "flex-start",
    top: 293
  },
  image: {
    width: 170,
    height: 170,
    margin: 8
  },
  noNotifications: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 18,
    margin: 8
  }
});

export default Notif;
