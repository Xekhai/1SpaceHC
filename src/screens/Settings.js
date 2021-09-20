import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialSwitch from "../components/MaterialSwitch";

function Settings(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group7}>
        <View style={styles.group}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={styles.button1}
          >
            <FontAwesomeIcon
              name="chevron-left"
              style={styles.icon2}
            ></FontAwesomeIcon>
          </TouchableOpacity>
          <Text style={styles.text}>Settings</Text>
        </View>
        <View style={styles.group12}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Edprofile")}
            style={styles.button2}
          >
            <Text style={styles.editProfile}>Edit Profile</Text>
            <FontAwesomeIcon
              name="chevron-right"
              style={styles.icon}
            ></FontAwesomeIcon>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Forgotpass")}
            style={styles.button3}
          >
            <Text style={styles.changePassword}>Change Password</Text>
            <FontAwesomeIcon
              name="chevron-right"
              style={styles.icon1}
            ></FontAwesomeIcon>
          </TouchableOpacity>
          <View style={styles.rect}></View>
          <View style={styles.group10}>
            <Text style={styles.newsAndUpdates}>News and Updates</Text>
            <MaterialSwitch style={styles.materialSwitch}></MaterialSwitch>
          </View>
          <View style={styles.group11}>
            <Text style={styles.pushNotifications1}>Push Notifications</Text>
            <MaterialSwitch style={styles.materialSwitch1}></MaterialSwitch>
          </View>
          <View style={styles.rect2}></View>
          <Text style={styles.logOut}>Log Out</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  group7: {
    alignItems: "center",
    height: 812
  },
  group: {
    backgroundColor: "rgba(118,213,203,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.32,
    shadowRadius: 0,
    alignSelf: "stretch",
    height: 150,
    justifyContent: "flex-end"
  },
  button1: {
    flexDirection: "row",
    width: 50,
    height: 50,
    marginTop: 37,
    marginLeft: 17,
    backgroundColor: "rgba(230, 230, 230,1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.4,
    shadowRadius: 0
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 25
  },
  text: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    alignSelf: "center",
    margin: 0,
    marginBottom: 10
  },
  group12: {
    alignSelf: "stretch",
    alignItems: "center"
  },
  button2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    margin: 0,
    marginTop: 25,
    marginBottom: 0,
    marginRight: 34,
    marginLeft: 34,
    alignItems: "center"
  },
  editProfile: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 16
  },
  button3: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    margin: 0,
    marginTop: 25,
    marginBottom: 0,
    marginRight: 34,
    marginLeft: 34,
    alignItems: "center"
  },
  changePassword: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  icon1: {
    color: "rgba(128,128,128,1)",
    fontSize: 16
  },
  rect: {
    width: 220,
    height: 1,
    backgroundColor: "#E6E6E6",
    margin: 0,
    marginTop: 25,
    marginBottom: 0,
    marginRight: 34,
    marginLeft: 34
  },
  group10: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    margin: 0,
    marginTop: 25,
    marginBottom: 0,
    marginRight: 34,
    marginLeft: 34,
    alignItems: "center"
  },
  newsAndUpdates: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  materialSwitch: {
    width: 45,
    height: 23
  },
  group11: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    margin: 0,
    marginTop: 25,
    marginBottom: 0,
    marginRight: 34,
    marginLeft: 34,
    alignItems: "center"
  },
  pushNotifications1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  materialSwitch1: {
    width: 45,
    height: 23
  },
  rect2: {
    width: 220,
    height: 1,
    backgroundColor: "#E6E6E6",
    margin: 0,
    marginTop: 25,
    marginBottom: 0,
    marginRight: 34,
    marginLeft: 34
  },
  logOut: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 10,
    margin: 0,
    marginTop: 25,
    marginBottom: 0,
    marginRight: 34,
    marginLeft: 34
  }
});

export default Settings;
