import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import MaterialStackedLabelTextbox from "../components/MaterialStackedLabelTextbox";

function Forgotpass(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/v870-tang-363.jpg")}
        resizeMode="cover"
        style={styles.bg}
        imageStyle={styles.bg_imageStyle}
      >
        <View style={styles.cont1}>
          <Text style={styles.entertext}>
            Enter your e-mail to recover your{"\n"}passsword
          </Text>
          <MaterialStackedLabelTextbox
            style={styles.materialStackedLabelTextbox}
          ></MaterialStackedLabelTextbox>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Login")}
            style={styles.proc}
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
  bg: {
    justifyContent: "center",
    flex: 1
  },
  bg_imageStyle: {},
  cont1: {
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
    alignSelf: "center"
  },
  entertext: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(78,78,78,1)"
  },
  materialStackedLabelTextbox: {
    width: 220,
    height: 70
  },
  proc: {
    width: 100,
    height: 25,
    flexDirection: "row",
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
    shadowRadius: 0,
    justifyContent: "center"
  },
  proceed: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(255,255,255,1)",
    height: 19,
    fontSize: 12
  }
});

export default Forgotpass;
