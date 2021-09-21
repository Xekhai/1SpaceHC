import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";

function Contprov(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/v870-tang-362.jpg")}
        resizeMode="cover"
        style={styles.bg}
        imageStyle={styles.bg_imageStyle}
      >
        <View style={styles.container1}>
          <Text style={styles.servprov}>Continue as a service provider?</Text>
          <View style={styles.yesnocontainer}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signupas")}
              style={styles.yesbutt}
            >
              <Text style={styles.yes}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
              style={styles.nobutt}
            >
              <Text style={styles.no}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bg: {
    justifyContent: "center",
    flex: 1
  },
  bg_imageStyle: {},
  container1: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    alignSelf: "center"
  },
  servprov: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 23,
    marginLeft: 23
  },
  yesnocontainer: {
    height: 50,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    marginRight: 23,
    marginLeft: 23
  },
  yesbutt: {
    width: 60,
    height: 50,
    marginRight: 31,
    marginLeft: 31
  },
  yes: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(118,213,203,1)",
    fontSize: 36
  },
  nobutt: {
    width: 48,
    height: 50,
    marginRight: 31,
    marginLeft: 31
  },
  no: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(118,213,203,1)",
    fontSize: 36
  }
});

export default Contprov;
