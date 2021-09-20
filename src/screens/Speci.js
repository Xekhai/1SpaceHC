import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Speci(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group5}>
        <View style={styles.rect6}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={styles.button3}
          >
            <Icon name="chevron-left" style={styles.icon1}></Icon>
          </TouchableOpacity>
          <Text style={styles.bookAppointments1}>Book Appointments</Text>
        </View>
        <View style={styles.group7}>
          <Text style={styles.specialists}>Specialists</Text>
          <View style={styles.rect4}></View>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Infospec")}
          style={styles.topc}
        >
          <Image
            source={require("../assets/images/call-center-agent.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <View style={styles.group9}>
            <Text style={styles.loremIpsum3}>Dr. Osioxekhai (Neurologist)</Text>
            <View style={styles.rect5}></View>
            <View style={styles.group10}>
              <Text style={styles.loremIpsum4}>4/5</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Infospec")}
                style={styles.button4}
              >
                <Text style={styles.bookNow1}>Book Now</Text>
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
  group5: {
    flex: 1
  },
  rect6: {
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
    height: 150,
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
  bookAppointments1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    alignSelf: "center",
    margin: 0,
    marginBottom: 11
  },
  group7: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 11,
    marginBottom: 11,
    alignItems: "center",
    alignSelf: "center"
  },
  specialists: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginRight: 8
  },
  rect4: {
    height: 2,
    backgroundColor: "rgba(190,190,190,1)",
    width: 150,
    alignSelf: "center"
  },
  button4: {
    flexDirection: "row",
    width: 100,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(74,144,226,1)",
    borderRadius: 100
  },
  image1: {
    width: 80,
    height: 80
  },
  group9: {
    width: 182,
    height: 62,
    alignItems: "center",
    justifyContent: "space-around"
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  rect5: {
    width: 182,
    height: 1,
    backgroundColor: "#E6E6E6"
  },
  group10: {
    width: 161,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  loremIpsum4: {
    fontFamily: "roboto-regular",
    color: "#121212"
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
 
  bookNow1: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(255,255,255,1)"
  }
});

export default Speci;
