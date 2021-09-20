import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Officers(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group6}>
        <View style={styles.rect4}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={styles.button3}
          >
            <Icon name="chevron-left" style={styles.icon1}></Icon>
          </TouchableOpacity>
          <Text style={styles.bookAppointments}>Book Appointments</Text>
        </View>
        <View style={styles.group1}>
          <Text style={styles.medicalOfficers}>Medical Officers</Text>
          <View style={styles.rect2}></View>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Infospec")}
          style={styles.topc}
        >
          <Image
            source={require("../assets/images/call-center-agent.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <View style={styles.group3}>
            <Text style={styles.loremIpsum}>Dr. Osioxekhai (Neurologist)</Text>
            <View style={styles.rect3}></View>
            <View style={styles.group2}>
              <Text style={styles.loremIpsum2}>4/5</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Infospec")}
                style={styles.button2}
              >
                <Text style={styles.bookNow}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group6: {
    flex: 1
  },
  rect4: {
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.3,
    shadowRadius: 0,
    height: 120,
    justifyContent: "flex-end"
  },
  button3: {
    flexDirection: "row",
    alignSelf: "flex-start",
    width: 50,
    height: 50,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 52,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.3,
    shadowRadius: 0,
    marginTop: 42,
    marginLeft: 23,
    alignItems: "center",
    justifyContent: "center"
  },
  icon1: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    alignSelf: "center"
  },
  bookAppointments: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    alignSelf: "center",
    margin: 0,
    padding: 0,
    marginBottom: 8
  },
  group1: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 11,
    marginBottom: 11,
    alignItems: "center",
    alignSelf: "center"
  },
  medicalOfficers: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginRight: 8
  },
  rect2: {
    height: 2,
    backgroundColor: "rgba(190,190,190,1)",
    width: 150,
    alignSelf: "center"
  },
  button2: {
    flexDirection: "row",
    width: 100,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(74,144,226,1)",
    borderRadius: 100
  },
  topc: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 5,
    padding:5,
    elevation : 5
  },
  image: {
    width: 80,
    height: 80
  },
  group3: {
    width: 182,
    height: 62,
    justifyContent: "space-around",
    alignItems: "center"
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  rect3: {
    width: 182,
    height: 1,
    backgroundColor: "#E6E6E6"
  },
  group2: {
    width: 161,
    height: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  bookNow: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(255,255,255,1)"
  }
});

export default Officers;
