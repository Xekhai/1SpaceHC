import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { Center } from "@builderx/utils";
import Icon from "react-native-vector-icons/FontAwesome";

function Chats(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <Center vertical>
          <Image
            source={require("../assets/images/BG-23.jpg")}
            resizeMode="cover"
            style={styles.image}
          ></Image>
        </Center>
        <View style={styles.group5}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={styles.button}
          >
            <Icon name="arrow-left" style={styles.icon}></Icon>
            <Text style={styles.text}>Chats</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Chat")}
            style={styles.button2}
          >
            <Image
              source={require("../assets/images/whatsapp-image-2021-05-01-at-4.18.07-pm-696x10421.jpg")}
              resizeMode="cover"
              style={styles.image2}
            ></Image>
            <View style={styles.group3}>
              <View style={styles.group2}>
                <Text style={styles.drOsioxekhai}>Dr. Osioxekhai</Text>
                <Text style={styles.loremIpsum}>9:00PM</Text>
              </View>
              <Text style={styles.loremIpsum2}>
                I have seen your results, you are good...
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.rect}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    left: 0,
    width: 375,
    position: "absolute",
    height: 812
  },
  group5: {
    top: 0,
    left: 1,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  button: {
    backgroundColor: "rgba(118,213,203,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.29,
    shadowRadius: 0,
    alignSelf: "stretch"
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    alignSelf: "flex-start",
    margin: 8,
    marginTop: 40,
    marginBottom: 0,
    marginLeft: 30
  },
  text: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    alignSelf: "center",
    margin: 0
  },
  button2: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center"
  },
  image2: {
    width: 70,
    height: 70,
    borderRadius: 86,
    margin: 10
  },
  group3: {
    flex: 1,
    margin: 10,
    height: 70,
    justifyContent: "center"
  },
  group2: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    margin: 3
  },
  drOsioxekhai: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 18
  },
  loremIpsum: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(118,213,203,1)",
    fontSize: 18
  },
  loremIpsum2: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(2,0,0,1)",
    alignSelf: "stretch"
  },
  rect: {
    width: 279,
    height: 1,
    backgroundColor: "#E6E6E6",
    alignSelf: "center"
  },
  imageStack: {
    flex: 1,
    marginLeft: -1
  }
});

export default Chats;
