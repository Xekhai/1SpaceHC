import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Center } from "@builderx/utils";

function Edprofile(props) {
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
          <Text style={styles.editProfile}>Edit Profile</Text>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.group18}>
              <Image
                source={require("../assets/images/user3.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
              <Center>
                <Image
                  source={require("../assets/images/edit2.png")}
                  resizeMode="contain"
                  style={styles.image2}
                ></Image>
              </Center>
            </View>
            <View style={styles.group8}>
              <Text style={styles.basicInformation}>Basic Information</Text>
              <View style={styles.rect}></View>
            </View>
            <View style={styles.group9}>
            <Text style={styles.eddname}>Edit Display Name</Text>

              <TextInput
                placeholder="Xekhai"
                style={styles.textInput}
              ></TextInput>
            </View>
            <View style={styles.group10}>
              <Text style={styles.fullName}>Full Name</Text>
              <View style={styles.group19}>
                <Text style={styles.loremIpsum1}>Agbomeikhe Joshua Praise</Text>
                <Image
                  source={require("../assets/images/edit3.png")}
                  resizeMode="contain"
                  style={styles.image3}
                ></Image>
              </View>
            </View>
            <View style={styles.group20}>
              <Text style={styles.dateOfBirth2}>Date of Birth</Text>
              <View style={styles.rect2}>
                <Text style={styles.text2}>14/09/2001 (19 years)</Text>
                <Image
                  source={require("../assets/images/edit3.png")}
                  resizeMode="contain"
                  style={styles.image4}
                ></Image>
              </View>
            </View>
            <View style={styles.group21}>
              <Text style={styles.maritalStatus}>Marital Status</Text>
              <View style={styles.rect3}>
                <Text style={styles.single}>Single</Text>
                <Image
                  source={require("../assets/images/edit3.png")}
                  resizeMode="contain"
                  style={styles.image5}
                ></Image>
              </View>
            </View>
            <View style={styles.group22}>
              <Text style={styles.email}>Email</Text>
              <View style={styles.rect4}>
                <Text style={styles.text4}>Joshua@emailprovider.com</Text>
                <Image
                  source={require("../assets/images/edit3.png")}
                  resizeMode="contain"
                  style={styles.image6}
                ></Image>
              </View>
            </View>
            <View style={styles.group23}>
              <Text style={styles.phoneNumber}>Phone Number</Text>
              <View style={styles.rect5}>
                <Text style={styles.text5}>08020010914</Text>
                <Image
                  source={require("../assets/images/edit3.png")}
                  resizeMode="contain"
                  style={styles.image7}
                ></Image>
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
    flex: 1
  },
  rect6: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    height: 123
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
  editProfile: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(0,0,0,1)",
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
    height: 689,
    alignItems: "center"
  },
  group18: {
    borderWidth: 5,
    borderColor: "#093863",
    borderRadius: 100,
    alignSelf: "center",
    margin: 23
  },
  image: {
    width: 150,
    height: 150,
    opacity: 0.24
  },
  image2: {
    width: 50,
    height: 50,
    position: "absolute"
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
    marginRight: 30,
    marginLeft: 30,
    marginTop: 6,
    marginBottom: 6
  },
  eddname: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(156,153,153,1)",
    fontSize: 10,
    marginTop: 10,
    alignSelf: "stretch"
  },
  textInput: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginTop: 10,
    width: 173,
    height: 19
  },
  group10: {
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
  group19: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  loremIpsum1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginTop: 10
  },
  image3: {
    width: 20,
    height: 20,
    marginLeft: 11
  },
  group20: {
    alignSelf: "stretch",
    margin: 0,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 6,
    marginBottom: 6
  },
  dateOfBirth2: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(156,153,153,1)",
    fontSize: 10,
    marginTop: 10
  },
  rect2: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  text2: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginTop: 10
  },
  image4: {
    width: 20,
    height: 20,
    marginLeft: 11
  },
  group21: {
    alignSelf: "stretch",
    margin: 0,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 6,
    marginBottom: 6
  },
  maritalStatus: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(156,153,153,1)",
    fontSize: 10,
    marginTop: 10
  },
  rect3: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  single: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginTop: 10
  },
  image5: {
    width: 20,
    height: 20,
    marginLeft: 11
  },
  group22: {
    alignSelf: "stretch",
    margin: 0,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 6,
    marginBottom: 6
  },
  email: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(156,153,153,1)",
    fontSize: 10,
    marginTop: 10
  },
  rect4: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  text4: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginTop: 10
  },
  image6: {
    width: 20,
    height: 20,
    marginLeft: 11
  },
  group23: {
    alignSelf: "stretch",
    margin: 0,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 6,
    marginBottom: 6
  },
  phoneNumber: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(156,153,153,1)",
    fontSize: 10,
    marginTop: 10
  },
  rect5: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  text5: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginTop: 10
  },
  image7: {
    width: 20,
    height: 20,
    marginLeft: 11
  }
});

export default Edprofile;
