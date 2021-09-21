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
import MaterialStackedLabelTextbox from "../components/MaterialStackedLabelTextbox";
import MaterialButtonShare from "../components/MaterialButtonShare";
import MaterialButtonShare1 from "../components/MaterialButtonShare1";

function Login(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/v870-tang-36.jpg")}
        resizeMode="cover"
        style={styles.bg}
        imageStyle={styles.bg_imageStyle}>
        <View style={styles.container1}>
          <MaterialStackedLabelTextbox
            style={styles.emaiinp}
          ></MaterialStackedLabelTextbox>
          <TextInput placeholder="Password" style={styles.password}></TextInput>
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
            <MaterialButtonShare
              style={styles.materialButtonShare}
            ></MaterialButtonShare>
            <MaterialButtonShare1
              style={styles.materialButtonShare1}
            ></MaterialButtonShare1>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Contprov")}
            style={styles.signupbut}
          >
            <Text style={styles.signup}>Signup</Text>
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
  container1: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    paddingHorizontal: 10,
    shadowOpacity: 1,
    shadowRadius: 0,
    borderRadius: 5,
    alignSelf: "center"
  },
  emaiinp: {
    width: 225,
    margin: 10,
    height: 70
  },
  password: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    height: 30,
    width: 227,
    margin: 10
  },
  loginho: {
    width: 100,
    height: 25,
    flexDirection: "row",
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
    justifyContent: "center",
    margin: 10
  },
  login2: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 12
  },
  fpass: {
    width: 108,
    height: 19,
    margin: 2
  },
  forgotPassword: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    alignSelf: "center"
  },
  logInWith: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    margin: 2
  },
  sociallog: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    margin: 10
  },
  materialButtonShare: {
    height: 40,
    width: 40,
    marginRight: 11,
    marginLeft: 11
  },
  materialButtonShare1: {
    height: 40,
    width: 40,
    marginRight: 11,
    marginLeft: 11
  },
  signupbut: {
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
    marginBottom: 25
  },
  signup: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12
  }
});

export default Login;
