import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Center } from "@builderx/utils";

function Videocall(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group7}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Chat")}
          style={styles.button2}
        >
          <Icon name="arrow-left" style={styles.icon1}></Icon>
          <View style={styles.group2}>
            <Image
              source={require("../assets/images/whatsapp-image-2021-05-01-at-4.18.07-pm-696x10422.jpg")}
              resizeMode="cover"
              style={styles.image1}
            ></Image>
            <Text style={styles.drOsioxekhai1}>Dr. Osioxekhai</Text>
          </View>
          <Text style={styles.loremIpsum}>0:47</Text>
        </TouchableOpacity>
        <View style={styles.group8}>
          <Image
            source={require("../assets/images/african-woman-biochemist-researcher-checking-manifestations-vaccine-working-modern-equipped-laboratory-multiethnic-doctors-examining-virus-evolution-using-high-tech-researching-diagnosis1.jpg")}
            resizeMode="cover"
            style={styles.image2}
          ></Image>
        </View>
        <View style={styles.group6}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Chat")}
            style={styles.button3}
          >
            <Image
              source={require("../assets/images/end-call.png")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Voicecall")}
            style={styles.button4}
          >
            <Image
              source={require("../assets/images/telephone.png")}
              resizeMode="contain"
              style={styles.image5}
            ></Image>
          </TouchableOpacity>
        </View>
        <Center vertical>
          <Image
            source={require("../assets/images/WIN_20210201_16_13_51_Pro2.jpg")}
            resizeMode="cover"
            style={styles.image6}
          ></Image>
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
    flex: 1
  },
  button2: {
    backgroundColor: "rgba(118,213,203,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.31,
    shadowRadius: 0,
    alignSelf: "stretch"
  },
  icon1: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    margin: 0,
    marginTop: 35,
    marginLeft: 35
  },
  group2: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around"
  },
  image1: {
    width: 45,
    height: 45,
    borderRadius: 100,
    margin: 10
  },
  drOsioxekhai1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 16,
    margin: 10
  },
  loremIpsum: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    alignSelf: "center"
  },
  group8: {
    alignSelf: "stretch",
    flex: 1
  },
  image2: {
    width: 375,
    height: 523,
    alignSelf: "stretch",
    flex: 1
  },
  group6: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "rgba(255,255,255,1)",
    alignSelf: "stretch"
  },
  button3: {
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 100,
    margin: 25,
    flexDirection: "row",
    padding: 25,
    alignSelf: "flex-start"
  },
  image4: {
    width: 40,
    height: 40,
    margin: 0
  },
  button4: {
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 100,
    margin: 25,
    flexDirection: "row",
    alignSelf: "flex-start",
    padding: 25
  },
  image5: {
    width: 40,
    height: 40
  },
  image6: {
    width: 102,
    height: 200,
    position: "absolute",
    right: 0
  }
});

export default Videocall;
