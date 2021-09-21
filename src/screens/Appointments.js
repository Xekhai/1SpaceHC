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
      <View style={styles.bg}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={styles.ack}
          >
            <Icon name="chevron-left" style={styles.icon1}></Icon>
          </TouchableOpacity>
          <Text style={styles.appoin}>Appointments</Text>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Chats")}
              style={styles.app1}
            >
              <View style={styles.tdate}>
                <View style={styles.timegrop}>
                  <Text style={styles.time}>Time</Text>
                  <Text style={styles.timeit}>9:00 AM</Text>
                </View>
                <View style={styles.dategroup}>
                  <Text style={styles.date}>Date</Text>
                  <Text style={styles.dateit}>12/11/10</Text>
                </View>
              </View>
              <View style={styles.div}></View>
              <Text style={styles.drOsioxekhai}>Dr. Osioxekhai</Text>
              <View style={styles.div2}></View>
              <View style={styles.cancchat}>
                <MaterialButtonSuccess1
                  style={styles.materialButtonSuccess1}
                ></MaterialButtonSuccess1>
                <MaterialButtonPurple
                  style={styles.materialButtonPurple}
                  onPress={() => props.navigation.navigate("Chats")}
                ></MaterialButtonPurple>
              </View>
            </TouchableOpacity>
            <View style={styles.duper2}>
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
  bg: {
    alignItems: "center",
    flex: 1
  },
  header: {
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
  ack: {
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
  appoin: {
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
  app1: {
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
  tdate: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    margin: 7
  },
  timegrop: {
    alignItems: "center",
    justifyContent: "space-around",
    margin: 10,
    alignSelf: "flex-start"
  },
  time: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  timeit: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  dategroup: {
    alignItems: "center",
    justifyContent: "space-around",
    margin: 10,
    alignSelf: "flex-start"
  },
  date: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  dateit: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  div: {
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
  div2: {
    width: 220,
    height: 2,
    backgroundColor: "#E6E6E6",
    margin: 7
  },
  cancchat: {
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
  duper2: {
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
    alignItems: "center",
    justifyContent: "space-around",
    margin: 10,
    alignSelf: "flex-start"
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
    alignItems: "center",
    justifyContent: "space-around",
    margin: 10,
    alignSelf: "flex-start"
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
