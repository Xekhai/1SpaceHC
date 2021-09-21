import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Emr(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group7}>
        <View style={styles.rect6}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={styles.button1}
          >
            <Icon name="chevron-left" style={styles.icon1}></Icon>
          </TouchableOpacity>
          <Text style={styles.text}>eMR</Text>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.group8}>
              <Text style={styles.basicInformation}>Basic Information</Text>
              <View style={styles.rect}></View>
            </View>
            <View style={styles.group9}>
              <Text style={styles.fullName}>Full Name</Text>
              <Text style={styles.loremIpsum}>Agbomeikhe Joshua Praise</Text>
            </View>
            <View style={styles.group10}>
              <Text style={styles.dateOfBirth}>Date of Birth</Text>
              <Text style={styles.loremIpsum1}>14/09/2001 (19 years)</Text>
            </View>
            <View style={styles.group11}>
              <Text style={styles.gender}>Gender</Text>
              <Text style={styles.male}>Male</Text>
            </View>
            <View style={styles.group12}>
              <Text style={styles.height}>Height</Text>
              <Text style={styles.loremIpsum3}>178 cm</Text>
            </View>
            <View style={styles.group13}>
              <Text style={styles.weight}>Weight</Text>
              <Text style={styles.loremIpsum4}>66 kg</Text>
            </View>
            <View style={styles.group14}>
              <Text style={styles.previousExaminations}>
                Previous Examinations
              </Text>
              <View style={styles.rect2}></View>
            </View>
            <View style={styles.group15}>
              <Text style={styles.medicalHistory}>Medical History</Text>
              <View style={styles.rect3}></View>
            </View>
            <View style={styles.group16}>
              <Text style={styles.prescriptions}>Prescriptions</Text>
              <View style={styles.rect4}></View>
            </View>
            <View style={styles.group17}>
              <Text style={styles.appointments}>Appointments</Text>
              <View style={styles.rect5}></View>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.button2}>
          <Image
            source={require("../assets/images/edit1.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </TouchableOpacity>
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
    flex: 1
  },
  rect6: {
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
    color: "rgba(255,255,255,1)",
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
    height: 662
  },
  group8: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    margin: 0,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 6,
    marginBottom: 6
  },
  basicInformation: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(101,185,215,1)",
    fontSize: 12
  },
  rect: {
    height: 1,
    backgroundColor: "#E6E6E6",
    flex: 1,
    marginLeft: 11
  },
  group9: {
    alignSelf: "stretch",
    margin: 0,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 6,
    marginBottom: 6
  },
  fullName: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(156,153,153,1)",
    fontSize: 10,
    marginTop: 10
  },
  loremIpsum: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginTop: 10
  },
  group10: {
    alignSelf: "stretch",
    margin: 0,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 6,
    marginBottom: 6
  },
  dateOfBirth: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(156,153,153,1)",
    fontSize: 10,
    marginTop: 10
  },
  loremIpsum1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginTop: 10
  },
  group11: {
    alignSelf: "stretch",
    margin: 0,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 6,
    marginBottom: 6
  },
  gender: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(156,153,153,1)",
    fontSize: 10,
    marginTop: 10
  },
  male: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginTop: 10
  },
  group12: {
    alignSelf: "stretch",
    margin: 0,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 6,
    marginBottom: 6
  },
  height: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(156,153,153,1)",
    fontSize: 10,
    marginTop: 10
  },
  loremIpsum3: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginTop: 10
  },
  group13: {
    alignSelf: "stretch",
    margin: 0,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 6,
    marginBottom: 6
  },
  weight: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(156,153,153,1)",
    fontSize: 10,
    marginTop: 10
  },
  loremIpsum4: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginTop: 10
  },
  group14: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    margin: 0,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 6,
    marginBottom: 6
  },
  previousExaminations: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(101,185,215,1)",
    fontSize: 12
  },
  rect2: {
    height: 1,
    backgroundColor: "#E6E6E6",
    flex: 1,
    marginLeft: 11
  },
  group15: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    margin: 0,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 6,
    marginBottom: 6
  },
  medicalHistory: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(101,185,215,1)",
    fontSize: 12
  },
  rect3: {
    height: 1,
    backgroundColor: "#E6E6E6",
    flex: 1,
    marginLeft: 11
  },
  group16: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    margin: 0,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 6,
    marginBottom: 6
  },
  prescriptions: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(101,185,215,1)",
    fontSize: 12
  },
  rect4: {
    height: 1,
    backgroundColor: "#E6E6E6",
    flex: 1,
    marginLeft: 11
  },
  group17: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    margin: 0,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 6,
    marginBottom: 6
  },
  appointments: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(101,185,215,1)",
    fontSize: 12
  },
  rect5: {
    height: 1,
    backgroundColor: "#E6E6E6",
    flex: 1,
    marginLeft: 11
  },
  button2: {
    width: 50,
    height: 50,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.47,
    shadowRadius: 0,
    right: 43,
    bottom: 54
  },
  image: {
    width: 20,
    height: 20,
    margin: 0
  }
});

export default Emr;
