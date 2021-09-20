import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";

function Signupas(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/v870-tang-365.jpg")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <View style={styles.group4}>
          <View style={styles.group}>
            <Text style={styles.text}>Signup as</Text>
            <View style={styles.group2}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Signup")}
                style={styles.button2}
              >
                <Image
                  source={require("../assets/images/medical-staff.png")}
                  resizeMode="contain"
                  style={styles.image2}
                ></Image>
                <Text style={styles.medicalOfficerGp}>
                  Medical{"\n"}Officer/GP
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Signup")}
                style={styles.button3}
              >
                <Image
                  source={require("../assets/images/office-worker.png")}
                  resizeMode="contain"
                  style={styles.image3}
                ></Image>
                <Text style={styles.specialist}>Specialist</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.group3}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Signup")}
                style={styles.button4}
              >
                <Image
                  source={require("../assets/images/diagnostic.png")}
                  resizeMode="contain"
                  style={styles.image4}
                ></Image>
                <Text style={styles.medicalDiagnostics}>
                  Medical{"\n"}Diagnostics
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Signup")}
                style={styles.button5}
              >
                <Image
                  source={require("../assets/images/pharmacy_(1).png")}
                  resizeMode="contain"
                  style={styles.image5}
                ></Image>
                <Text style={styles.pharmacyServices}>
                  Pharmacy{"\n"}Services
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
              style={styles.button6}
            >
              <Image
                source={require("../assets/images/ambulance.png")}
                resizeMode="contain"
                style={styles.image6}
              ></Image>
              <Text style={styles.ambulanceServices}>
                Ambulance{"\n"}Services
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1
  },
  image_imageStyle: {},
  group4: {
    justifyContent: "center",
    flex: 1
  },
  group: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 6,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.32,
    shadowRadius: 0,
    width: 277,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  text: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    margin: 0,
    marginTop: 14
  },
  group2: {
    margin: 0,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  button2: {
    alignItems: "center",
    margin: 10
  },
  image2: {
    width: 70,
    height: 70
  },
  medicalOfficerGp: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    textAlign: "center",
    fontSize: 12
  },
  button3: {
    alignItems: "center",
    margin: 10
  },
  image3: {
    width: 70,
    height: 70
  },
  specialist: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12
  },
  group3: {
    margin: 0,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  button4: {
    alignItems: "center",
    margin: 10
  },
  image4: {
    width: 70,
    height: 70
  },
  medicalDiagnostics: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    textAlign: "center",
    fontSize: 12
  },
  button5: {
    alignItems: "center",
    margin: 10
  },
  image5: {
    width: 70,
    height: 70
  },
  pharmacyServices: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    textAlign: "center",
    fontSize: 12
  },
  button6: {
    alignItems: "center",
    margin: 10,
    alignSelf: "center"
  },
  image6: {
    width: 70,
    height: 70,
    margin: 0
  },
  ambulanceServices: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    textAlign: "center",
    fontSize: 12,
    margin: 0
  }
});

export default Signupas;
