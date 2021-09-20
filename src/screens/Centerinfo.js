import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView
} from "react-native";
import MaterialButtonShare3 from "../components/MaterialButtonShare3";
import MaterialCheckboxWithLabel from "../components/MaterialCheckboxWithLabel";
import MaterialCheckboxWithLabel1 from "../components/MaterialCheckboxWithLabel1";
import MaterialCheckbox from "../components/MaterialCheckbox";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";

function Centerinfo(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group4}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.button}
        >
          <MaterialButtonShare3
            style={styles.materialButtonShare3}
          ></MaterialButtonShare3>
          <Text style={styles.loremIpsum}>XCA labs - OSD1267344</Text>
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
          <View style={styles.group}>
            <Image
              source={require("../assets/images/clock.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <Text style={styles.loremIpsum3}>5 years</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.group11}>
              <Text style={styles.operators}>Operators</Text>
              <View style={styles.rect}></View>
              <Text style={styles.loremIpsum4}>
                Mr. Johnny Dudex - BSc. LabTech{"\n"}Mr. Victor Adeyemo - BSc.
                LabTech{"\n"}Mr. Imoh Kolawole - BSc. LabTech{"\n"}Mr. Ola
                Francis - BSc. LabTech{"\n"}Ms. Ayo Ogunfemi - BSc. LabTech
              </Text>
              <Text style={styles.pricing}>Pricing</Text>
              <View style={styles.rect1}></View>
              <Text style={styles.loremIpsum5}>
                Imaging - N34,000{"\n"}Pathology - N43,000
              </Text>
              <View style={styles.rect2}></View>
              <Text style={styles.photos}>Photos</Text>
              <View style={styles.scrollArea3}>
                <ScrollView
                  horizontal={true}
                  contentContainerStyle={
                    styles.scrollArea3_contentContainerStyle
                  }
                >
                  <Image
                    source={require("../assets/images/77d7306444d66965dcd45f5694e30a142.jpg")}
                    resizeMode="cover"
                    style={styles.image6}
                  ></Image>
                  <Image
                    source={require("../assets/images/1mxOjoBsLt59_resized1.png")}
                    resizeMode="cover"
                    style={styles.image7}
                  ></Image>
                  <Image
                    source={require("../assets/images/Contact-Addresses-of-Healthplus-Pharmacy-in-Nigeria1.jpg")}
                    resizeMode="cover"
                    style={styles.image8}
                  ></Image>
                </ScrollView>
              </View>
              <Text style={styles.loremIpsum6}>
                WE STAND FOR EXCELLENCE{"\n"}
                {"\n"}From our network of medical professionals to our
                state-of-the-art equipment, we offer only the best laboratory
                services. With more than 5,000 tests on offer, SYNLAB has the
                largest, most comprehensive test offering in Africa. We are able
                to support our doctors and our patients in ways not possible
                before. Together, we are building a stronger healthcare system
                in Nigeria and you are part of the change.
              </Text>
              <View style={styles.rect3}></View>
              <Text style={styles.averageRating1}>Average rating - 4.5</Text>
              <View style={styles.group8}>
                <View style={styles.rect9}></View>
                <Text style={styles.reviews1}>Reviews</Text>
                <View style={styles.rect10}></View>
              </View>
              <View style={styles.group5}>
                <View style={styles.group6}>
                  <View style={styles.group7}>
                    <Image
                      source={require("../assets/images/whatsapp-image-2021-05-01-at-4.18.07-pm-696x1042.jpg")}
                      resizeMode="cover"
                      style={styles.image9}
                    ></Image>
                    <Text style={styles.johnAdesogbon1}>John Adesogbon</Text>
                  </View>
                  <Text style={styles.loremIpsum7}>5/5</Text>
                </View>
                <Text style={styles.loremIpsum8}>
                  A very good Doctor, knew my problems before I even spoke.
                  Lovely, worth every penny.
                </Text>
              </View>
              <View style={styles.group9}>
                <View style={styles.rect11}></View>
                <Text style={styles.bookings}>Bookings</Text>
                <View style={styles.rect12}></View>
              </View>
              <MaterialCheckboxWithLabel
                style={styles.materialCheckboxWithLabel}
              ></MaterialCheckboxWithLabel>
              <MaterialCheckboxWithLabel1
                style={styles.materialCheckboxWithLabel1}
              ></MaterialCheckboxWithLabel1>
              <View style={styles.rect8}></View>
              <Text style={styles.homeService}>Home Service</Text>
              <View style={styles.group12}>
                <MaterialCheckbox
                  style={styles.materialCheckbox2}
                ></MaterialCheckbox>
                <Text style={styles.text1}>
                  Select this Checkbox to have a nurse collect your sample in
                  your house.
                </Text>
              </View>
              <MaterialButtonPrimary
                style={styles.materialButtonPrimary}
              ></MaterialButtonPrimary>
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
  group4: {
    flex: 1
  },
  button: {
    backgroundColor: "rgba(118,213,203,1)",
    alignSelf: "stretch"
  },
  materialButtonShare3: {
    width: 56,
    height: 56,
    margin: 0,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 40
  },
  loremIpsum: {
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
    alignItems: "center"
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
  group: {
    flexDirection: "row",
    margin: 0,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center"
  },
  image2: {
    width: 15,
    height: 15,
    marginRight: 6
  },
  loremIpsum3: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 10,
    marginRight: 6
  },
  scrollArea: {
    flex: 1,
    alignSelf: "stretch"
  },
  scrollArea_contentContainerStyle: {
    height: 994,
    alignItems: "center"
  },
  group11: {
    alignSelf: "stretch",
    alignItems: "center"
  },
  operators: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    margin: 8,
    fontSize: 18,
    marginRight: 20,
    marginLeft: 20,
    alignSelf: "center"
  },
  rect: {
    width: 301,
    height: 1,
    backgroundColor: "#E6E6E6",
    margin: 8,
    marginRight: 20,
    marginLeft: 20
  },
  loremIpsum4: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    margin: 8,
    fontSize: 12,
    marginRight: 20,
    marginLeft: 20
  },
  pricing: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    margin: 8,
    fontSize: 18,
    marginRight: 20,
    marginLeft: 20
  },
  rect1: {
    width: 301,
    height: 1,
    backgroundColor: "#E6E6E6",
    margin: 8,
    marginRight: 20,
    marginLeft: 20
  },
  loremIpsum5: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    margin: 8,
    fontSize: 12,
    marginRight: 20,
    marginLeft: 20
  },
  rect2: {
    width: 301,
    height: 1,
    backgroundColor: "#E6E6E6",
    margin: 8,
    marginRight: 20,
    marginLeft: 20
  },
  photos: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    margin: 8,
    fontSize: 18,
    marginRight: 20,
    marginLeft: 20
  },
  scrollArea3: {
    alignSelf: "stretch",
    marginRight: 20,
    marginLeft: 20
  },
  scrollArea3_contentContainerStyle: {
    width: 480,
    flexDirection: "row"
  },
  image6: {
    width: 150,
    height: 150,
    borderRadius: 5,
    margin: 6
  },
  image7: {
    width: 150,
    height: 150,
    borderRadius: 5,
    margin: 6
  },
  image8: {
    width: 150,
    height: 150,
    borderRadius: 5,
    margin: 6
  },
  loremIpsum6: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    alignSelf: "stretch",
    textAlign: "center",
    padding: 0,
    margin: 8,
    fontSize: 12,
    marginRight: 20,
    marginLeft: 20
  },
  rect3: {
    width: 301,
    height: 1,
    backgroundColor: "#E6E6E6",
    margin: 8,
    marginRight: 20,
    marginLeft: 20
  },
  averageRating1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    margin: 6,
    alignSelf: "center",
    marginRight: 20,
    marginLeft: 20
  },
  group8: {
    width: 298,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 6,
    alignSelf: "center",
    marginRight: 20,
    marginLeft: 20
  },
  rect9: {
    width: 107,
    height: 2,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  reviews1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  rect10: {
    width: 107,
    height: 2,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  group5: {
    width: 301,
    justifyContent: "space-between",
    margin: 6,
    marginRight: 20,
    marginLeft: 20
  },
  group6: {
    width: 261,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center"
  },
  group7: {
    width: 158,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  image9: {
    width: 40,
    height: 40,
    borderRadius: 47
  },
  johnAdesogbon1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  loremIpsum7: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  loremIpsum8: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    textAlign: "center",
    alignSelf: "stretch"
  },
  group9: {
    width: 298,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 6,
    alignSelf: "center",
    marginRight: 20,
    marginLeft: 20
  },
  rect11: {
    width: 107,
    height: 2,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  bookings: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  rect12: {
    width: 107,
    height: 2,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  materialCheckboxWithLabel: {
    height: 15,
    alignSelf: "flex-start",
    marginRight: 20,
    marginLeft: 20
  },
  materialCheckboxWithLabel1: {
    height: 15,
    alignSelf: "flex-start",
    marginRight: 20,
    marginLeft: 20
  },
  rect8: {
    width: 301,
    height: 1,
    backgroundColor: "#E6E6E6",
    margin: 8,
    marginRight: 20,
    marginLeft: 20
  },
  homeService: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginRight: 20,
    marginLeft: 20
  },
  group12: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    marginRight: 20,
    marginLeft: 20
  },
  materialCheckbox2: {
    height: 28,
    width: 28
  },
  text1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    flex: 1,
    fontSize: 10
  },
  materialButtonPrimary: {
    height: 25,
    marginRight: 20,
    marginLeft: 20,
    width: 100,
    alignSelf: "flex-end"
  }
});

export default Centerinfo;
