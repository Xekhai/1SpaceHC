import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import CupertinoSearchBarBasic from "../components/CupertinoSearchBarBasic";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Pharmacyinfo(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group4}>
        <View style={styles.group3}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Pharmlist")}
            style={styles.button3}
          >
            <FontAwesomeIcon
              name="chevron-left"
              style={styles.icon2}
            ></FontAwesomeIcon>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Extra")}
            style={styles.button5}
          >
            <Text style={styles.xcaPharmacy}>XCA Pharmacy</Text>
          </TouchableOpacity>
          <View style={styles.group2}>
            <Image
              source={require("../assets/images/location.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <Text style={styles.loremIpsum2}>
              No. 7 Arulogun Close, Awosika Ave, Bodija, Ibadan
            </Text>
          </View>
          <CupertinoSearchBarBasic
            style={styles.cupertinoSearchBarBasic}
          ></CupertinoSearchBarBasic>
        </View>
        <View style={styles.group10}>
          <Text style={styles.categories2}>Categories</Text>
          <View style={styles.rect2}></View>
        </View>
        <View style={styles.group9}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Checkout")}
            style={styles.button2}
          >
            <Image
              source={require("../assets/images/skin-care.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <Text style={styles.skinCare}>Skin Care</Text>
          </TouchableOpacity>
          <View style={styles.group8}>
            <Image
              source={require("../assets/images/playtime.png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
            <Text style={styles.childrenStuff}>Children Stuff</Text>
          </View>
          <View style={styles.group7}>
            <Image
              source={require("../assets/images/pharmacy_(2).png")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
            <Text style={styles.firstAid}>First Aid</Text>
          </View>
        </View>
        <View style={styles.group5}>
          <Text style={styles.prescriptions}>Prescriptions</Text>
          <View style={styles.rect}></View>
        </View>
        <View style={styles.group11}>
          <Text style={styles.loremIpsum3}>#121463</Text>
          <EntypoIcon name="chevron-right" style={styles.icon}></EntypoIcon>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Checkout")}
          style={styles.button4}
        >
          <FontAwesomeIcon
            name="shopping-cart"
            style={styles.icon3}
          ></FontAwesomeIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group4: {
    flex: 1
  },
  group3: {
    backgroundColor: "rgba(118,213,203,1)",
    alignSelf: "stretch"
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
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    alignSelf: "center"
  },
  button5: {
    alignSelf: "flex-start"
  },
  xcaPharmacy: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 18,
    margin: 0,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10
  },
  group2: {
    flexDirection: "row",
    margin: 0,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    alignItems: "center",
    marginBottom: 10
  },
  image: {
    width: 15,
    height: 15,
    marginRight: 6
  },
  loremIpsum2: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 10,
    marginRight: 6
  },
  cupertinoSearchBarBasic: {
    height: 44,
    marginRight: 17,
    marginLeft: 17,
    alignSelf: "stretch",
    marginBottom: 5
  },
  group10: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    marginTop: 11,
    marginBottom: 11
  },
  categories2: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  rect2: {
    width: 222,
    height: 1,
    backgroundColor: "#E6E6E6"
  },
  group9: {
    height: 108,
    flexDirection: "row",
    alignSelf: "stretch"
  },
  button2: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "rgba(230, 230, 230,1)",
    margin: 5,
    marginLeft: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  image2: {
    width: 50,
    height: 50,
    margin: 5
  },
  skinCare: {
    fontFamily: "roboto-regular",
    color: "#121212",
    alignSelf: "center",
    margin: 5
  },
  group8: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 5,
    margin: 5,
    marginLeft: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  image3: {
    width: 50,
    height: 50,
    margin: 5
  },
  childrenStuff: {
    fontFamily: "roboto-regular",
    color: "#121212",
    alignSelf: "center",
    margin: 5
  },
  group7: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "rgba(230, 230, 230,1)",
    margin: 5,
    marginLeft: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  image4: {
    width: 50,
    height: 50,
    margin: 5
  },
  firstAid: {
    fontFamily: "roboto-regular",
    color: "#121212",
    alignSelf: "center",
    margin: 5
  },
  group5: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    marginTop: 11,
    marginBottom: 11
  },
  prescriptions: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  rect: {
    width: 222,
    height: 1,
    backgroundColor: "#E6E6E6"
  },
  group11: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    marginLeft: 42
  },
  loremIpsum3: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 15
  },
  button4: {
    position: "absolute",
    right: 33,
    bottom: 45,
    flexDirection: "row",
    backgroundColor: "rgba(80,227,194,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.24,
    shadowRadius: 0
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    margin: 11
  }
});

export default Pharmacyinfo;
