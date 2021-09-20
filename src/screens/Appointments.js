import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialButtonSuccess1 from "../components/MaterialButtonSuccess1";
import MaterialButtonPurple from "../components/MaterialButtonPurple";

function Appointments(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group7}>
        <View style={styles.rect8}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={styles.button1}
          >
            <Icon name="chevron-left" style={styles.icon1}></Icon>
          </TouchableOpacity>
          <Text style={styles.text}>Appointments</Text>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Chats")}
              style={styles.button2}
            >
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
            </TouchableOpacity>
            <View style={styles.group8}>
              <View style={styles.rect2}>
                <View style={styles.rect3}>
                  <Text style={styles.time2}>Time</Text>
                  <Text style={styles.text2}>9:00 AM</Text>
                </View>
                <View style={styles.rect4}>
                  <Text style={styles.date2}>Date</Text>
                  <Text style={styles.text3}>12/11/10</Text>
                </View>
              </View>
              <View style={styles.rect5}></View>
              <Text style={styles.drOsioxekhai2}>Dr. Osioxekhai</Text>
              <View style={styles.rect6}></View>
              <View style={styles.rect7}>
                <MaterialButtonSuccess1
                  style={styles.materialButtonSuccess12}
                ></MaterialButtonSuccess1>
                <MaterialButtonPurple
                  style={styles.materialButtonPurple2}
                ></MaterialButtonPurple>
              </View>
            </View>
          </ScrollView>
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
    alignItems: "center",
    width: 375,
    flex: 1,
    alignSelf: "center"
  },
  rect8: {
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.32,
    shadowRadius: 0,
    alignSelf: "stretch",
    height: 120,
    justifyContent: "flex-end"
  },
  button1: {
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
  text: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 16,
    alignSelf: "center",
    margin: 0,
    marginBottom: 10
  },
  scrollArea: {
    alignSelf: "stretch",
    flex: 1,
    margin: 0
  },
  scrollArea_contentContainerStyle: {
    height: 692
  },
  button2: {
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.15,
    shadowRadius: 0,
    marginTop: 100,
    borderRadius: 5,
    alignSelf: "center",
    alignItems: "center"
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
  },
  group8: {
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.15,
    shadowRadius: 0,
    marginTop: 100,
    borderRadius: 5,
    alignSelf: "center",
    alignItems: "center"
  },
  rect2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    margin: 7
  },
  rect3: {
    width: 51,
    height: 45,
    alignItems: "center",
    justifyContent: "space-around",
    margin: 10
  },
  time2: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  text2: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  rect4: {
    width: 59,
    height: 45,
    alignItems: "center",
    justifyContent: "space-around",
    margin: 10
  },
  date2: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  text3: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  rect5: {
    width: 220,
    height: 2,
    backgroundColor: "#E6E6E6",
    margin: 7
  },
  drOsioxekhai2: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    height: 19,
    alignSelf: "center",
    margin: 7
  },
  rect6: {
    width: 220,
    height: 2,
    backgroundColor: "#E6E6E6",
    margin: 7
  },
  rect7: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "stretch",
    margin: 7
  },
  materialButtonSuccess12: {
    height: 27,
    width: 115,
    margin: 10
  },
  materialButtonPurple2: {
    height: 27,
    width: 115,
    margin: 10
  }
});

export default Appointments;
