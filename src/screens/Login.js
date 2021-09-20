import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import MaterialStackedLabelTextbox from "../components/MaterialStackedLabelTextbox";
import MaterialButtonShare from "../components/MaterialButtonShare";
import MaterialButtonShare1 from "../components/MaterialButtonShare1";

function Login(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/v870-tang-36.jpg")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <Svg viewBox="0 0 139.7 140.13" style={styles.ellipse}>
          <Ellipse
            strokeWidth={0}
            fill="rgba(118,213,203,1)"
            cx={70}
            cy={70}
            rx={70}
            ry={70}
          ></Ellipse>
        </Svg>
        <View style={styles.group5}>
          <View style={styles.rect}>
            <MaterialStackedLabelTextbox
              style={styles.emaiinp}
            ></MaterialStackedLabelTextbox>
            <TextInput
              placeholder="Password"
              style={styles.password}
            ></TextInput>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Home")}
              style={styles.loginho}
            >
              <Text style={styles.login2}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Forgotpass")}
              style={styles.fpass}
            >
              <Text style={styles.forgotPassword}>Forgot password</Text>
            </TouchableOpacity>
            <Text style={styles.logInWith}>Log In with</Text>
            <View style={styles.sociallog}>
              <View style={styles.rect2}></View>
              <MaterialButtonShare
                style={styles.materialButtonShare}
              ></MaterialButtonShare>
              <MaterialButtonShare1
                style={styles.materialButtonShare1}
              ></MaterialButtonShare1>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Contprov")}
              style={styles.button}
            >
              <Text style={styles.signup}>Signup</Text>
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
  ellipse: {
    width: 140,
    height: 140,
    marginTop: 110,
    marginLeft: 118
  },
  group5: {
    justifyContent: "center",
    flex: 1,
    marginBottom: 132,
    marginTop: 60,
    marginLeft: 53,
    marginRight: 52
  },
  rect: {
    backgroundColor: "rgba(255,255,255,1)",
    width: 270,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.26,
    shadowRadius: 0,
    borderRadius: 5,
    height: 370,
    alignSelf: "center"
  },
  emaiinp: {
    height: 60,
    width: 225,
    marginTop: 18,
    alignSelf: "center"
  },
  password: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    height: 30,
    width: 227,
    marginTop: 28,
    marginLeft: 21
  },
  loginho: {
    width: 100,
    height: 25,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#98d4ca",
    borderRadius: 100,
    alignItems: "center",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.48,
    shadowRadius: 0,
    marginTop: 19,
    alignSelf: "center"
  },
  login2: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(255,255,255,1)"
  },
  fpass: {
    width: 108,
    height: 19,
    marginTop: 19,
    alignSelf: "center"
  },
  forgotPassword: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    alignSelf: "center"
  },
  logInWith: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginTop: 8,
    marginLeft: 98
  },
  sociallog: {
    width: 115,
    height: 40,
    flexDirection: "row",
    marginTop: 10,
    alignSelf: "center"
  },
  rect2: {
    flex: 1
  },
  materialButtonShare: {
    height: 40,
    width: 40,
    position: "absolute",
    top: 0,
    left: 0
  },
  materialButtonShare1: {
    height: 40,
    width: 40,
    position: "absolute",
    left: 75,
    top: 0
  },
  button: {
    width: 100,
    height: 25,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.24,
    shadowRadius: 0,
    justifyContent: "center",
    marginTop: 26,
    alignSelf: "center"
  },
  signup: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    alignSelf: "center"
  }
});

export default Login;
