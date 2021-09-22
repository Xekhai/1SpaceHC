import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
import MaterialStackedLabelTextbox from "../components/MaterialStackedLabelTextbox";

function Signup(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/v870-tang-364.jpg")}
        resizeMode="cover"
        style={styles.bg}
        imageStyle={styles.bg_imageStyle}
      >
        <View style={styles.cont1}>
          <View style={styles.scrollArea}>
            <ScrollView
              horizontal={false}
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              <MaterialStackedLabelTextbox
                style={styles.email}
              ></MaterialStackedLabelTextbox>
              <TextInput
                placeholder="Password"
				secureTextEntry={true}
                style={styles.password}
              ></TextInput>
              <TextInput
                placeholder="Confirm Password"
				secureTextEntry={true}
                style={styles.cpassword}
              ></TextInput>
              <TextInput
                placeholder="First Name"
                style={styles.fname}
              ></TextInput>
              <TextInput
                placeholder="Last Name"
                style={styles.lname}
              ></TextInput>
              <TextInput
                placeholder="Phone Number"
                style={styles.pnumb}
              ></TextInput>
              <TextInput
                placeholder="UserName"
                style={styles.uname}
              ></TextInput>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Home")}
                style={styles.signupbutt}
              >
                <Text style={styles.stext}>Signup</Text>
              </TouchableOpacity>
            </ScrollView>
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
    flex: 1
  },
  bg_imageStyle: {},
  cont1: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  scrollArea: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1,
    alignSelf: "stretch",
    margin: 40,
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.22,
    shadowRadius: 0
  },
  scrollArea_contentContainerStyle: {
    height: 732,
    alignItems: "center"
  },
  email: {
    height: 70,
    margin: 17,
    marginRight: 25,
    marginLeft: 25,
    width: 245
  },
  password: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    height: 42,
    borderWidth: 1,
    borderColor: "rgba(217,213,220,1)",
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    margin: 17,
    alignSelf: "stretch",
    marginRight: 25,
    marginLeft: 25
  },
  cpassword: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    height: 42,
    borderWidth: 1,
    borderColor: "rgba(217,213,220,1)",
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    margin: 17,
    alignSelf: "stretch",
    marginRight: 25,
    marginLeft: 25
  },
  fname: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    height: 42,
    borderWidth: 1,
    borderColor: "rgba(217,213,220,1)",
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    margin: 17,
    alignSelf: "stretch",
    marginRight: 25,
    marginLeft: 25
  },
  lname: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    height: 42,
    borderWidth: 1,
    borderColor: "rgba(217,213,220,1)",
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    margin: 17,
    alignSelf: "stretch",
    marginRight: 25,
    marginLeft: 25
  },
  pnumb: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    height: 42,
    borderWidth: 1,
    borderColor: "rgba(217,213,220,1)",
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    margin: 17,
    alignSelf: "stretch",
    marginRight: 25,
    marginLeft: 25
  },
  uname: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    height: 42,
    borderWidth: 1,
    borderColor: "rgba(217,213,220,1)",
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    margin: 17,
    alignSelf: "stretch",
    marginRight: 25,
    marginLeft: 25
  },
  signupbutt: {
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
    justifyContent: "center"
  },
  stext: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12
  }
});

export default Signup;
