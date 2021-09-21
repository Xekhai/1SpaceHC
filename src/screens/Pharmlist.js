import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Svg, { Ellipse } from "react-native-svg";

function Pharmlist(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group7}>
        <View style={styles.rect3}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={styles.button3}
          >
            <Icon name="chevron-left" style={styles.icon1}></Icon>
          </TouchableOpacity>
          <Text style={styles.nearbyPharmacies}>Nearby Pharmacies</Text>
          <View style={styles.rect}></View>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Pharmacyinfo")}
          style={styles.button2}
        >
          <Image
            source={require("../assets/images/77d7306444d66965dcd45f5694e30a14.jpg")}
            resizeMode="cover"
            style={styles.image2}
          ></Image>
          <View style={styles.group5}>
            <View style={styles.group2}>
              <Text style={styles.xcaLabs}>XCA Pharmacy</Text>
              <View style={styles.ellipse}></View>

              <Text style={styles.loremIpsum}>2km away</Text>
            </View>
            <View style={styles.rect2}></View>
            <View style={styles.group4}>
              <Image
                source={require("../assets/images/check.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
              <Text style={styles.inStoreShopping}>In-store shopping</Text>
              <Image
                source={require("../assets/images/check.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
              <Text style={styles.homeDelivery}>Home Delivery</Text>
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
  group7: {
    flex: 1
  },
  rect3: {
    alignSelf: "stretch",
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
  nearbyPharmacies: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    alignSelf: "center"
  },
  rect: {
    width: 280,
    height: 1,
    backgroundColor: "#E6E6E6",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20
  },
  button2: {
    flexDirection: "row",
    alignSelf: "stretch",
    margin: 25,
    padding: 0,
    marginTop: 0,
    marginBottom: 5,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.29,
    shadowRadius: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  image2: {
    width: 60,
    height: 60,
    borderRadius: 100,
    margin: 10
  },
  group5: {
    margin: 0,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  group2: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  xcaLabs: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 5,
    maxWidth: 120
  },
  ellipse: {
    marginLeft: 5,
    height: 5,
    width: 5,
    borderRadius: 20,
    backgroundColor: "black",

  },
  loremIpsum: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 5,
    maxWidth: 95

  },
  rect2: {
    height: 1,
    backgroundColor: "#E6E6E6",
    alignSelf: "stretch",
    marginHorizontal:15,
    marginVertical:6
  },
  group4: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: 10,
    height: 10,
    margin: 2
  },
  inStoreShopping: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    margin: 0,
    fontSize: 12,
    letterSpacing: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  image3: {
    width: 10,
    height: 10,
    margin: 2
  },
  homeDelivery: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    margin: 0,
    fontSize: 12,
    letterSpacing: 0,
    marginTop: 0,
    marginBottom: 0,
  }
});

export default Pharmlist;
