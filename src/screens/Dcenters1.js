import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import MaterialButtonShare3 from "../components/MaterialButtonShare3";
import Svg, { Ellipse } from "react-native-svg";

function Dcenters1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group7}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.button}
        >
          <MaterialButtonShare3
            style={styles.materialButtonShare1}
          ></MaterialButtonShare3>
          <Text style={styles.diagnosticCenters}>Diagnostic Centers</Text>
          <View style={styles.rect}></View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Centerinfo")}
          style={styles.button2}
        >
          <Image
            source={require("../assets/images/77d7306444d66965dcd45f5694e30a14.jpg")}
            resizeMode="cover"
            style={styles.image2}
          ></Image>
          <View style={styles.group5}>
            <View style={styles.group2}>
              <Text style={styles.xcaLabs}>XCA labs</Text>
              <View style={styles.ellipse}></View>

              <Text style={styles.loremIpsum}>2km away</Text>
            </View>
            <View style={styles.rect2}></View>
            <View style={styles.group3}>
            <View style={styles.ellipse}></View>

              <Text style={styles.pathology}>Pathology</Text>
              <View style={styles.ellipse}></View>
              
              <Text style={styles.imaging}>Imaging</Text>
            </View>
            <View style={styles.group4}>
              <Image
                source={require("../assets/images/check.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
              <Text style={styles.loremIpsum2}>
                No. 7 Arulogun Close, Awosika Ave, Bodija, Ibadan
              </Text>
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
  button: {
    width: 375
  },
  materialButtonShare1: {
    width: 40,
    height: 40,
    margin: 0,
    marginTop: 50,
    marginLeft: 20
  },
  diagnosticCenters: {
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
    alignItems: "center",
    margin: 25,
    justifyContent: "center",
    padding: 5,
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
    shadowRadius: 0
  },
  image2: {
    width: 60,
    height: 60,
    borderRadius: 100,
    margin: 3
  },
  group5: {
    flex: 1,
    margin: 3,
    alignSelf: "stretch"
  },
  group2: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center"
  },
  xcaLabs: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 5
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
    marginLeft: 5
  },
  rect2: {
    height: 1,
    backgroundColor: "#E6E6E6",
    alignSelf: "stretch",
    marginVertical: 2
  },
  group3: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5
  },
  pathology: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginLeft: 5,
    fontSize: 12,

  },
  ellipse2: {
    width: 5,
    height: 5,
    marginLeft: 5,

  },
  imaging: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginLeft: 5,
    fontSize: 12,

  },
  group4: {
    flexDirection: "row",
    alignSelf: "stretch",
    marginTop: 6,
    alignItems: "center"
  },
  image: {
    width: 10,
    height: 10,
    margin: 2
  },
  loremIpsum2: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12,
    flex: 1
  }
});

export default Dcenters1;
