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
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <View style={styles.group}>
          <View style={styles.scrollArea}>
            <ScrollView
              horizontal={false}
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              <MaterialStackedLabelTextbox
                style={styles.materialStackedLabelTextbox}
              ></MaterialStackedLabelTextbox>
              <TextInput
                placeholder="Password"
                style={styles.placeholder}
              ></TextInput>
              <TextInput
                placeholder="Confirm Password"
                style={styles.textInput}
              ></TextInput>
              <TextInput
                placeholder="First Name"
                style={styles.placeholder1}
              ></TextInput>
              <TextInput
                placeholder="Last Name"
                style={styles.placeholder2}
              ></TextInput>
              <TextInput
                placeholder="Phone Number"
                style={styles.placeholder3}
              ></TextInput>
              <TextInput
                placeholder="UserName"
                style={styles.placeholder4}
              ></TextInput>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Home")}
                style={styles.button1}
              >
                <Text style={styles.text2}>Signup</Text>
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
  image: {
    flex: 1
  },
  image_imageStyle: {},
  group: {
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
  materialStackedLabelTextbox: {
    height: 60,
    margin: 17,
    alignSelf: "stretch",
    marginRight: 25,
    marginLeft: 25
  },
  placeholder: {
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
  textInput: {
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
  placeholder1: {
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
  placeholder2: {
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
  placeholder3: {
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
  placeholder4: {
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
  button1: {
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
    justifyContent: "center"
  },
  text2: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    alignSelf: "center"
  }
});

export default Signup;
