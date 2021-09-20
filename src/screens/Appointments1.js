import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonShare3 from "../components/MaterialButtonShare3";
import MaterialButtonSuccess1 from "../components/MaterialButtonSuccess1";
import MaterialButtonPurple from "../components/MaterialButtonPurple";

function Appointments1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group7}>
        <View style={styles.group}>
          <MaterialButtonShare3
            style={styles.materialButtonShare3}
          ></MaterialButtonShare3>
          <Text style={styles.text}>Appointments</Text>
        </View>
        <View style={styles.group5}>
          <View style={styles.group6}>
            <View style={styles.group2}>
              <Text style={styles.time}>Time</Text>
              <Text style={styles.loremIpsum}>9:00 AM</Text>
            </View>
            <View style={styles.group3}>
              <Text style={styles.date}>Date</Text>
              <Text style={styles.loremIpsum2}>12/11/10</Text>
            </View>
          </View>
          <View style={styles.rect}></View>
          <Text style={styles.drOsioxekhai}>Dr. Osioxekhai</Text>
          <View style={styles.rect1}></View>
          <View style={styles.group4}>
            <MaterialButtonSuccess1
              style={styles.materialButtonSuccess1}
            ></MaterialButtonSuccess1>
            <MaterialButtonPurple
              style={styles.materialButtonPurple}
            ></MaterialButtonPurple>
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
  group7: {
    width: 375,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  group: {
    backgroundColor: "rgba(230, 230, 230,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.32,
    shadowRadius: 0,
    alignSelf: "stretch"
  },
  materialButtonShare3: {
    width: 40,
    height: 40,
    margin: 0,
    marginTop: 50,
    marginLeft: 20
  },
  text: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 16,
    alignSelf: "center",
    margin: 0,
    marginBottom: 10
  },
  group5: {
    width: 273,
    backgroundColor: "rgba(255,255,255,1)",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.15,
    shadowRadius: 0,
    marginTop: 100,
    borderRadius: 5
  },
  group6: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    margin: 7
  },
  group2: {
    width: 51,
    height: 45,
    alignItems: "center",
    justifyContent: "space-around",
    margin: 10
  },
  time: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  loremIpsum: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  group3: {
    width: 59,
    height: 45,
    alignItems: "center",
    justifyContent: "space-around",
    margin: 10
  },
  date: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  loremIpsum2: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  rect: {
    width: 220,
    height: 2,
    backgroundColor: "#E6E6E6",
    margin: 7
  },
  drOsioxekhai: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    height: 19,
    alignSelf: "center",
    margin: 7
  },
  rect1: {
    width: 220,
    height: 2,
    backgroundColor: "#E6E6E6",
    margin: 7
  },
  group4: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "stretch",
    margin: 7
  },
  materialButtonSuccess1: {
    height: 27,
    width: 115,
    margin: 10
  },
  materialButtonPurple: {
    height: 27,
    width: 115,
    margin: 10
  }
});

export default Appointments1;
