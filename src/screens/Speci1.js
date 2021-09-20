import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialButtonShare3 from "../components/MaterialButtonShare3";
import { Center } from "@builderx/utils";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";

function Speci1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.group5}>
          <MaterialButtonShare3
            style={styles.materialButtonShare3}
          ></MaterialButtonShare3>
          <Text style={styles.bookAppointments}>Book Appointments</Text>
        </View>
      </View>
      <View style={styles.group1}>
        <View style={styles.rect1}></View>
        <Center vertical>
          <Text style={styles.specialists}>Specialists</Text>
        </Center>
        <View style={styles.rect2}></View>
      </View>
      <View style={styles.group4}>
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
            <MaterialButtonPrimary
              style={styles.materialButtonPrimary}
            ></MaterialButtonPrimary>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    height: 98,
    backgroundColor: "#E6E6E6",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 0
  },
  group5: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 43
  },
  materialButtonShare3: {
    height: 40,
    width: 40,
    margin: 0,
    padding: 0
  },
  bookAppointments: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    alignSelf: "center",
    margin: 51
  },
  group1: {
    width: 306,
    height: 17,
    flexDirection: "row",
    marginTop: 15,
    alignSelf: "center"
  },
  rect1: {
    flex: 1
  },
  specialists: {
    left: 0,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  rect2: {
    width: 214,
    height: 2,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    top: 8,
    right: 0
  },
  group4: {
    width: 310,
    height: 106,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.39,
    shadowRadius: 0,
    borderRadius: 5,
    marginTop: 22,
    alignSelf: "center"
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
  materialButtonPrimary: {
    height: 24,
    width: 100
  }
});

export default Speci1;
