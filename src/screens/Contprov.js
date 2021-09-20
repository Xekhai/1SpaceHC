import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Contprov(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/v870-tang-362.jpg")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <Svg viewBox="0 0 139.7 140.13" style={styles.ellipse2}>
          <Ellipse
            strokeWidth={5}
            fill="rgba(118,213,203,1)"
            cx={70}
            cy={70}
            rx={67}
            ry={68}
            stroke="rgba(230, 230, 230,1)"
          ></Ellipse>
        </Svg>
        <View style={styles.rect}>
          <Text style={styles.loremIpsum}>Continue as a service provider?</Text>
          <View style={styles.group}>
            <View style={styles.rect2}></View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signupas")}
              style={styles.button2}
            >
              <Text style={styles.yes}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
              style={styles.button}
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
  image: {
    flex: 1
  },
  image_imageStyle: {},
  ellipse2: {
    width: 140,
    height: 140,
    marginTop: 110,
    marginLeft: 118
  },
  rect: {
    width: 277,
    height: 198,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.32,
    shadowRadius: 0,
    borderRadius: 5,
    marginTop: 87,
    marginLeft: 49
  },
  loremIpsum: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 26,
    marginLeft: 23
  },
  group: {
    width: 193,
    height: 50,
    flexDirection: "row",
    marginTop: 43,
    marginLeft: 42
  },
  rect2: {
    flex: 1
  },
  button2: {
    top: 0,
    left: 0,
    width: 60,
    height: 50,
    position: "absolute"
  },
  yes: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(118,213,203,1)",
    fontSize: 36
  },
  button: {
    top: 0,
    left: 146,
    width: 48,
    height: 50,
    position: "absolute"
  },
  no: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(118,213,203,1)",
    fontSize: 36
  }
});

export default Contprov;
