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
        style={styles.bg}
        imageStyle={styles.bg_imageStyle}
      >
        <View style={styles.mcontainer}>
          <Text style={styles.signas}>Signup as</Text>
          <View style={styles.line1}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
              style={styles.mofficer}
            >
              <Image
                source={require("../assets/images/medical-staff.png")}
                resizeMode="contain"
                style={styles.offimg}
              ></Image>
              <Text style={styles.medicalOfficerGp}>
                Medical{"\n"}Officer/GP
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
              style={styles.speci}
            >
              <Image
                source={require("../assets/images/office-worker.png")}
                resizeMode="contain"
                style={styles.specimg}
              ></Image>
              <Text style={styles.specialist}>Specialist</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.line2}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
              style={styles.diag}
            >
              <Image
                source={require("../assets/images/diagnostic.png")}
                resizeMode="contain"
                style={styles.diagimg}
              ></Image>
              <Text style={styles.medicalDiagnostics}>
                Medical{"\n"}Diagnostics
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
              style={styles.pharm}
            >
              <Image
                source={require("../assets/images/pharmacy_(1).png")}
                resizeMode="contain"
                style={styles.pharmimg}
              ></Image>
              <Text style={styles.pharmacyServices}>
                Pharmacy{"\n"}Services
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Signup")}
            style={styles.ambu}
          >
            <Image
              source={require("../assets/images/ambulance.png")}
              resizeMode="contain"
              style={styles.ambimg}
            ></Image>
            <Text style={styles.ambulanceServices}>
              Ambulance{"\n"}Services
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
  bg_imageStyle: {},
  mcontainer: {
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
    alignItems: "center",
    marginTop: 207,
    marginLeft: 49
  },
  signas: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    margin: 0,
    marginTop: 14
  },
  line1: {
    margin: 0,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  mofficer: {
    alignItems: "center",
    margin: 10
  },
  offimg: {
    width: 70,
    height: 70
  },
  medicalOfficerGp: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    textAlign: "center",
    fontSize: 12
  },
  speci: {
    alignItems: "center",
    margin: 10
  },
  specimg: {
    width: 70,
    height: 70
  },
  specialist: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12
  },
  line2: {
    margin: 0,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  diag: {
    alignItems: "center",
    margin: 10
  },
  diagimg: {
    width: 70,
    height: 70
  },
  medicalDiagnostics: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    textAlign: "center",
    fontSize: 12
  },
  pharm: {
    alignItems: "center",
    margin: 10
  },
  pharmimg: {
    width: 70,
    height: 70
  },
  pharmacyServices: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    textAlign: "center",
    fontSize: 12
  },
  ambu: {
    alignItems: "center",
    margin: 10,
    alignSelf: "center"
  },
  ambimg: {
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
