import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import CupertinoSearchBarBasic from "../components/CupertinoSearchBarBasic";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Pharmacyinfo(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Pharmlist")}
            style={styles.back}
          >
            <FontAwesomeIcon
              name="chevron-left"
              style={styles.left}
            ></FontAwesomeIcon>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Extra")}
            style={styles.extrainfo}
          >
            <Text style={styles.xcaPharmacy}>XCA Pharmacy</Text>
          </TouchableOpacity>
          <View style={styles.address}>
            <Image
              source={require("../assets/images/location.png")}
              resizeMode="contain"
              style={styles.locpin}
            ></Image>
            <Text style={styles.addtext}>
              No. 7 Arulogun Close, Awosika Ave, Bodija, Ibadan
            </Text>
          </View>
          <CupertinoSearchBarBasic
            style={styles.searchBarBasic}
          ></CupertinoSearchBarBasic>
        </View>
        <View style={styles.catdiv}>
          <Text style={styles.categories2}>Categories</Text>
          <View style={styles.linedivcat}></View>
        </View>
        <View style={styles.categoriescont}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Checkout")}
            style={styles.skcare}
          >
            <Image
              source={require("../assets/images/skin-care.png")}
              resizeMode="contain"
              style={styles.skimg}
            ></Image>
            <Text style={styles.skinCare}>Skin Care</Text>
          </TouchableOpacity>
          <View style={styles.chstuff}>
            <Image
              source={require("../assets/images/playtime.png")}
              resizeMode="contain"
              style={styles.chimg}
            ></Image>
            <Text style={styles.childrenStuff}>Children Stuff</Text>
          </View>
          <View style={styles.faid}>
            <Image
              source={require("../assets/images/pharmacy_(2).png")}
              resizeMode="contain"
              style={styles.faimg}
            ></Image>
            <Text style={styles.firstAid}>First Aid</Text>
          </View>
        </View>
        <View style={styles.prescdiv}>
          <Text style={styles.prescriptions}>Prescriptions</Text>
          <View style={styles.linedivpresc}></View>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Pharmacyinfo")}
          style={styles.presc}
        >
          <Text style={styles.prescnum}>#121463</Text>
          <EntypoIcon name="chevron-right" style={styles.right}></EntypoIcon>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Checkout")}
          style={styles.chckout}
        >
          <FontAwesomeIcon
            name="shopping-cart"
            style={styles.cart}
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
  bg: {
    flex: 1
  },
  header: {
    backgroundColor: "rgba(118,213,203,1)",
    alignSelf: "stretch"
  },
  back: {
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
  left: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    alignSelf: "center"
  },
  extrainfo: {
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
  address: {
    flexDirection: "row",
    margin: 0,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    alignItems: "center",
    marginBottom: 10
  },
  locpin: {
    width: 15,
    height: 15,
    marginRight: 6
  },
  addtext: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 10,
    marginRight: 6
  },
  searchBarBasic: {
    height: 44,
    marginRight: 17,
    marginLeft: 17,
    alignSelf: "stretch",
    marginBottom: 5
  },
  catdiv: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    marginTop: 11,
    marginBottom: 11
  },
  categories2: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginRight: 5,
    marginLeft: 5
  },
  linedivcat: {
    width: 200,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginRight: 5,
    marginLeft: 5
  },
  categoriescont: {
    height: 108,
    flexDirection: "row",
    alignSelf: "stretch"
  },
  skcare: {
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
  skimg: {
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
  chstuff: {
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
  chimg: {
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
  faid: {
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
  faimg: {
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
  prescdiv: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    marginTop: 11,
    marginBottom: 11
  },
  prescriptions: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginRight: 5,
    marginLeft: 5
  },
  linedivpresc: {
    width: 200,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginRight: 5,
    marginLeft: 5
  },
  presc: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    marginLeft: 42
  },
  prescnum: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  right: {
    color: "rgba(128,128,128,1)",
    fontSize: 15
  },
  chckout: {
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
  cart: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    margin: 11
  }
});

export default Pharmacyinfo;
