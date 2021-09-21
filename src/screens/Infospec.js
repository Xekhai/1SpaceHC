import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Infospec(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <View style={styles.header}>
          <View style={styles.info}>
            <Image
              source={require("../assets/images/user2.png")}
              resizeMode="cover"
              style={styles.image3}
            ></Image>
            <View style={styles.infoname}>
              <Text style={styles.name}>Osioxekhai Joshua Praise</Text>
              <Text style={styles.title}>PhD. MBcbB</Text>
              <Text style={styles.n1}>N25,000 /Hour</Text>
            </View>
          </View>
          <View style={styles.teedt}>
            <View style={styles.addr}>
              <FontAwesomeIcon
                name="location-arrow"
                style={styles.icon1}
              ></FontAwesomeIcon>
              <Text style={styles.lagosNigeria1}>Lagos, Nigeria.</Text>
            </View>
            <View style={styles.tym}>
              <IoniconsIcon
                name="ios-timer"
                style={styles.icon2}
              ></IoniconsIcon>
              <Text style={styles.years}>5 years</Text>
            </View>
          </View>
          <View style={styles.biodiv}>
            <View style={styles.rect9}></View>
            <Text style={styles.bio1}>Bio</Text>
            <View style={styles.rect10}></View>
          </View>
          <Text style={styles.bio}>
            My significant experience in orthopedics has taught me two things.
            Remain current with the latest advances in orthopedic care and take
            the time to listen and understand the unique needs of each patient.
          </Text>
          <View style={styles.div}></View>
          <Text style={styles.averageRating1}>Average rating - 4.5</Text>
          <View style={styles.revdiv}>
            <View style={styles.rect7}></View>
            <Text style={styles.reviews1}>Reviews</Text>
            <View style={styles.rect8}></View>
          </View>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.commhead}>
              <View style={styles.comm}>
                <View style={styles.namepic}>
                  <Image
                    source={require("../assets/images/whatsapp-image-2021-05-01-at-4.18.07-pm-696x1042.jpg")}
                    resizeMode="cover"
                    style={styles.image2}
                  ></Image>
                  <Text style={styles.johnAdesogbon}>John Adesogbon</Text>
                </View>
                <Text style={styles.ratin}>5/5</Text>
              </View>
              <Text style={styles.commtxt}>
                A very good Doctor, knew my problems before I even spoke.
                Lovely, worth every penny.
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.base}>
          <TextInput placeholder="05/08/2021" style={styles.date}></TextInput>
          <TextInput placeholder="9:37PM" style={styles.time}></TextInput>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Appointments")}
            style={styles.booknow}
          >
            <Text style={styles.bookNow}>Book Now</Text>
          </TouchableOpacity>
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
    flex: 1
  },
  header: {
    alignSelf: "stretch",
    alignItems: "center"
  },
  info: {
    flexDirection: "row",
    margin: 6,
    alignSelf: "stretch",
    marginTop: 75,
    justifyContent: "center",
    alignItems: "center"
  },
  image3: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginRight: 14,
    marginLeft: 14
  },
  infoname: {
    justifyContent: "space-between",
    marginRight: 14,
    marginLeft: 14,
    alignSelf: "center"
  },
  name: {
    fontFamily: "roboto-700",
    color: "#121212"
  },
  title: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  n1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  teedt: {
    flexDirection: "row",
    alignSelf: "stretch",
    margin: 8,
    justifyContent: "space-around"
  },
  addr: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 0,
    alignSelf: "flex-start"
  },
  icon1: {
    color: "rgba(128,128,128,1)",
    fontSize: 25
  },
  lagosNigeria1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12

  },
  tym: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 0,
    alignSelf: "flex-start"
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 25
  },
  years: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12
  },
  biodiv: {
    width: 298,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 6,
    alignSelf: "center"
  },
  rect9: {
    width: 107,
    height: 2,
    backgroundColor: "rgba(0,0,0,1)"
  },
  bio1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  rect10: {
    width: 107,
    height: 2,
    backgroundColor: "rgba(0,0,0,1)"
  },
  bio: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    textAlign: "center",
    margin: 6,
    alignSelf: "stretch",
    padding: 0,
    paddingRight: 20,
    paddingLeft: 20
  },
  div: {
    width: 298,
    height: 2,
    backgroundColor: "rgba(0,0,0,1)",
    margin: 6,
    alignSelf: "center"
  },
  averageRating1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    margin: 6,
    alignSelf: "center"
  },
  revdiv: {
    width: 298,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 6,
    alignSelf: "center"
  },
  rect7: {
    width: 107,
    height: 2,
    backgroundColor: "rgba(0,0,0,1)"
  },
  reviews1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  rect8: {
    width: 107,
    height: 2,
    backgroundColor: "rgba(0,0,0,1)"
  },
  scrollArea: {
    flex: 1,
    alignSelf: "stretch"
  },
  scrollArea_contentContainerStyle: {
    height: 331,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  commhead: {
    width: 301,
    justifyContent: "space-between",
    margin: 6
  },
  comm: {
    width: 261,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center"
  },
  namepic: {
    width: 158,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  image2: {
    width: 40,
    height: 40,
    borderRadius: 47
  },
  johnAdesogbon: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  ratin: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  commtxt: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    textAlign: "center",
    alignSelf: "stretch"
  },
  base: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "stretch",
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: -1,
      width: 3
    },
    elevation: 15,
    shadowOpacity: 1,
    shadowRadius: 5
  },
  date: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    height: 33,
    width: 80
  },
  time: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    height: 33,
    width: 50
  },
  booknow: {
    flexDirection: "row",
    width: 100,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(74,144,226,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.3,
    shadowRadius: 0
  },
  bookNow: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(255,255,255,1)"
  }
});

export default Infospec;
