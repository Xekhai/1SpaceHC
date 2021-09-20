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
import MaterialStackedLabelTextbox from "../components/MaterialStackedLabelTextbox";

function Forgotpass(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/v870-tang-363.jpg")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <Svg viewBox="0 0 139.7 140.13" style={styles.ellipse1}>
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
        <View style={styles.group}>
          <Text style={styles.loremIpsum}>
            Enter your e-mail to recover your{"\n"}passsword
          </Text>
          <MaterialStackedLabelTextbox
            style={styles.materialStackedLabelTextbox}
          ></MaterialStackedLabelTextbox>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Login")}
            style={styles.button}
          >
            <Text style={styles.proceed}>Proceed</Text>
          </TouchableOpacity>
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
  ellipse1: {
    width: 140,
    height: 140,
    marginTop: 110,
    alignSelf: "center"
  },
  group: {
    width: 270,
    height: 260,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.4,
    shadowRadius: 0,
    marginTop: 52,
    alignSelf: "center"
  },
  loremIpsum: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(78,78,78,1)"
  },
  materialStackedLabelTextbox: {
    width: 220,
    height: 60
  },
  button: {
    width: 100,
    height: 25,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 66,
    backgroundColor: "rgba(0,0,0,1)",
    alignItems: "center",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.17,
    shadowRadius: 0
  },
  proceed: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(255,255,255,1)",
    height: 19
  }
});

export default Forgotpass;
