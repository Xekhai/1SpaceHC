import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialButtonShare3 from "../components/MaterialButtonShare3";
import Svg, { Ellipse } from "react-native-svg";

function Dcenters(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group7}>
        <View style={styles.group}>
          <MaterialButtonShare3
            style={styles.materialButtonShare1}
          ></MaterialButtonShare3>
          <Text style={styles.diagnosticCenters}>Diagnostic Centers</Text>
          <View style={styles.rect}></View>
        </View>
        <View style={styles.group6}>
          <Image
            source={require("../assets/images/77d7306444d66965dcd45f5694e30a14.jpg")}
            resizeMode="cover"
            style={styles.image2}
          ></Image>
          <View style={styles.group5}>
            <View style={styles.group2}>
              <Text style={styles.xcaLabs}>XCA labs</Text>
              <Svg viewBox="0 0 5 5" style={styles.ellipse}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(0,0,0,1)"
                  cx={3}
                  cy={3}
                  rx={3}
                  ry={3}
                ></Ellipse>
              </Svg>
              <Text style={styles.loremIpsum}>2km away</Text>
            </View>
            <View style={styles.rect2}></View>
            <View style={styles.group3}>
              <Svg viewBox="0 0 5 5" style={styles.ellipse1}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(0,0,0,1)"
                  cx={3}
                  cy={3}
                  rx={3}
                  ry={3}
                ></Ellipse>
              </Svg>
              <Text style={styles.pathology}>Pathology</Text>
              <Svg viewBox="0 0 5 5" style={styles.ellipse2}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(0,0,0,1)"
                  cx={3}
                  cy={3}
                  rx={3}
                  ry={3}
                ></Ellipse>
              </Svg>
              <Text style={styles.imaging}>Imaging</Text>
            </View>
            <View style={styles.group4}>
              <Image
                source={require("../assets/images/check.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
              <Text style={styles.text}>
                No. 7 Arulogun Close, Awosika Ave, Bodija, Ibadan
              </Text>
            </View>
          </View>
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
    flex: 1
  },
  group: {
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
  group6: {
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
    justifyContent: "flex-start"
  },
  xcaLabs: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 5
  },
  ellipse: {
    width: 5,
    height: 5,
    marginLeft: 5
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
    alignSelf: "stretch"
  },
  group3: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 5
  },
  ellipse1: {
    width: 5,
    height: 5,
    marginLeft: 5
  },
  pathology: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginLeft: 5,
    lineHeight: 12
  },
  ellipse2: {
    width: 5,
    height: 5,
    marginLeft: 5
  },
  imaging: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginLeft: 5,
    lineHeight: 12
  },
  group4: {
    flexDirection: "row",
    alignSelf: "stretch",
    marginTop: 6
  },
  image: {
    width: 10,
    height: 10,
    margin: 2
  },
  text: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    margin: 0,
    lineHeight: 8,
    fontSize: 12,
    alignSelf: "flex-start",
    flex: 1,
    letterSpacing: 0,
    marginTop: 0,
    marginBottom: 0
  }
});

export default Dcenters;
