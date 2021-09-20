import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Center } from "@builderx/utils";
import Svg, { Ellipse } from "react-native-svg";
import MaterialBasicFooter from "../components/MaterialBasicFooter";

function Home(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/BG-2.jpg")}
        resizeMode="stretch"
        style={styles.image3}
        imageStyle={styles.image3_imageStyle}
      >
        <View style={styles.group39}>
          <View style={styles.group34}>
            <View style={styles.group35}>
              <Text style={styles.loremIpsum1}>1SpaceHC</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Notif")}
                style={styles.button10}
              >
                <Icon name="bell" style={styles.icon}></Icon>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Settings")}
              style={styles.button3}
            >
              <Image
                source={require("../assets/images/user1.png")}
                resizeMode="contain"
                style={styles.image13}
              ></Image>
              <Text style={styles.hiJoshua1}>Hi, Joshua</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Emr")}
            style={styles.button}
          >
            <Image
              source={require("../assets/images/medical-record.png")}
              resizeMode="contain"
              style={styles.image14}
            ></Image>
            <Text style={styles.loremIpsum2}>Personal Medical Records</Text>
          </TouchableOpacity>
          <View style={styles.scrollArea}>
            <ScrollView
              horizontal={false}
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              <View style={styles.group31}>
                <View style={styles.group8}>
                  <View style={styles.rect8}></View>
                  <Center vertical>
                    <Text style={styles.consultation}>Consultation</Text>
                  </Center>
                  <View style={styles.rect3}></View>
                </View>
                <View style={styles.rect21}>
                  <View style={styles.button4Row}>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate("Appointments")}
                      style={styles.button4}
                    >
                      <View style={styles.rect4}>
                        <View style={styles.group}>
                          <View style={styles.ellipseStack}>
                            <Svg viewBox="0 0 50 50" style={styles.ellipse}>
                              <Ellipse
                                stroke="rgba(230, 230, 230,1)"
                                strokeWidth={0}
                                fill="rgba(255,199,186,1)"
                                cx={25}
                                cy={25}
                                rx={25}
                                ry={25}
                              ></Ellipse>
                            </Svg>
                            <Image
                              source={require("../assets/images/appointment.png")}
                              resizeMode="contain"
                              style={styles.image4}
                            ></Image>
                          </View>
                        </View>
                        <Text style={styles.appointments}>Appointments</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate("Speci")}
                      style={styles.button5}
                    >
                      <View style={styles.rect5}>
                        <View style={styles.group4}>
                          <View style={styles.ellipse1Stack}>
                            <Svg viewBox="0 0 50 50" style={styles.ellipse1}>
                              <Ellipse
                                stroke="rgba(230, 230, 230,1)"
                                strokeWidth={0}
                                fill="#ebeff4"
                                cx={25}
                                cy={25}
                                rx={25}
                                ry={25}
                              ></Ellipse>
                            </Svg>
                            <Image
                              source={require("../assets/images/office-worker1.png")}
                              resizeMode="contain"
                              style={styles.image5}
                            ></Image>
                          </View>
                        </View>
                        <Text style={styles.specialists}>Specialists</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate("Officers")}
                      style={styles.button6}
                    >
                      <View style={styles.rect6}>
                        <View style={styles.group6}>
                          <View style={styles.ellipse2Stack}>
                            <Svg viewBox="0 0 50 50" style={styles.ellipse2}>
                              <Ellipse
                                stroke="rgba(230, 230, 230,1)"
                                strokeWidth={0}
                                fill="#8ac9fe"
                                cx={25}
                                cy={25}
                                rx={25}
                                ry={25}
                              ></Ellipse>
                            </Svg>
                            <Image
                              source={require("../assets/images/medical-staff1.png")}
                              resizeMode="contain"
                              style={styles.image6}
                            ></Image>
                          </View>
                        </View>
                        <Text style={styles.medicalOfficersGp}>
                          Medical {"\n"}Officers/GP
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.group9}>
                  <Text style={styles.services}>Services</Text>
                  <View style={styles.rect10}></View>
                </View>
                <View style={styles.group10}>
                  <View style={styles.button7Row}>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate("Dcenters1")}
                      style={styles.button7}
                    >
                      <View style={styles.rect12}>
                        <View style={styles.group12}>
                          <View style={styles.ellipse3Stack}>
                            <Svg viewBox="0 0 50 50" style={styles.ellipse3}>
                              <Ellipse
                                stroke="rgba(230, 230, 230,1)"
                                strokeWidth={0}
                                fill="#00dc3b"
                                cx={25}
                                cy={25}
                                rx={25}
                                ry={25}
                              ></Ellipse>
                            </Svg>
                            <Image
                              source={require("../assets/images/pharmacy_(1)1.png")}
                              resizeMode="contain"
                              style={styles.image7}
                            ></Image>
                          </View>
                        </View>
                        <Text style={styles.medicalDiagnostics}>
                          Medical{"\n"}Diagnostics
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button8}>
                      <View style={styles.rect13}>
                        <View style={styles.group14}>
                          <View style={styles.ellipse4Stack}>
                            <Svg viewBox="0 0 50 50" style={styles.ellipse4}>
                              <Ellipse
                                stroke="rgba(230, 230, 230,1)"
                                strokeWidth={0}
                                fill="rgba(255,199,186,1)"
                                cx={25}
                                cy={25}
                                rx={25}
                                ry={25}
                              ></Ellipse>
                            </Svg>
                            <Image
                              source={require("../assets/images/ambulance1.png")}
                              resizeMode="contain"
                              style={styles.image8}
                            ></Image>
                          </View>
                        </View>
                        <Text style={styles.ambulanceServices}>
                          Ambulance{"\n"}Services
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate("Pharmlist")}
                      style={styles.button9}
                    >
                      <View style={styles.rect14}>
                        <View style={styles.group16}>
                          <View style={styles.ellipse5Stack}>
                            <Svg viewBox="0 0 50 50" style={styles.ellipse5}>
                              <Ellipse
                                stroke="rgba(230, 230, 230,1)"
                                strokeWidth={0}
                                fill="rgba(200,245,234,1)"
                                cx={25}
                                cy={25}
                                rx={25}
                                ry={25}
                              ></Ellipse>
                            </Svg>
                            <Image
                              source={require("../assets/images/pharmacy.png")}
                              resizeMode="contain"
                              style={styles.image9}
                            ></Image>
                          </View>
                        </View>
                        <Text style={styles.pharmacyServices}>
                          Pharmacy{"\n"}Services
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.group17}>
                  <Text style={styles.healthInformation}>
                    Health Information
                  </Text>
                  <View style={styles.rect16}></View>
                </View>
                <View style={styles.group18}>
                  <View style={styles.group19Row}>
                    <View style={styles.group19}>
                      <View style={styles.rect18}>
                        <View style={styles.group20}>
                          <View style={styles.ellipse6Stack}>
                            <Svg viewBox="0 0 50 50" style={styles.ellipse6}>
                              <Ellipse
                                stroke="rgba(230, 230, 230,1)"
                                strokeWidth={0}
                                fill="rgba(253,226,219,1)"
                                cx={25}
                                cy={25}
                                rx={25}
                                ry={25}
                              ></Ellipse>
                            </Svg>
                            <Image
                              source={require("../assets/images/calories.png")}
                              resizeMode="contain"
                              style={styles.image10}
                            ></Image>
                          </View>
                        </View>
                        <Text style={styles.healthCalculator}>
                          Health{"\n"}Calculator
                        </Text>
                      </View>
                    </View>
                    <View style={styles.group23}>
                      <View style={styles.rect20}>
                        <View style={styles.group24}>
                          <View style={styles.ellipse8Stack}>
                            <Svg viewBox="0 0 50 50" style={styles.ellipse8}>
                              <Ellipse
                                stroke="rgba(230, 230, 230,1)"
                                strokeWidth={0}
                                fill="rgba(255,199,186,1)"
                                cx={25}
                                cy={25}
                                rx={25}
                                ry={25}
                              ></Ellipse>
                            </Svg>
                            <Image
                              source={require("../assets/images/smartphone_(1).png")}
                              resizeMode="contain"
                              style={styles.image12}
                            ></Image>
                          </View>
                        </View>
                        <Text style={styles.healthInformation3}>
                          Health{"\n"}Information
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.group32}>
            <MaterialBasicFooter
              style={styles.materialBasicFooter}
            ></MaterialBasicFooter>
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
  image3: {
    flex: 1
  },
  image3_imageStyle: {},
  group39: {
    flex: 1
  },
  group34: {
    alignItems: "center",
    backgroundColor: "rgba(118,213,203,1)",
    alignSelf: "stretch",
    paddingTop: 45,
    paddingBottom: 20
  },
  group35: {
    width: 306,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  loremIpsum1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  button10: {
    flexDirection: "row",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 25
  },
  button3: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  image13: {
    width: 70,
    height: 70,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "rgba(255,255,255,1)"
  },
  hiJoshua1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  button: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    padding: 25,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.12,
    shadowRadius: 0
  },
  image14: {
    width: 30,
    height: 30,
    margin: 5
  },
  loremIpsum2: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    margin: 5
  },
  scrollArea: {
    flex: 1,
    alignSelf: "stretch",
    borderRadius: 29
  },
  scrollArea_contentContainerStyle: {
    height: 496,
    alignItems: "center"
  },
  group31: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch"
  },
  group8: {
    width: 306,
    height: 17,
    flexDirection: "row",
    margin: 5
  },
  rect8: {
    flex: 1
  },
  consultation: {
    left: 0,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  rect3: {
    width: 214,
    height: 2,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    top: 8,
    right: 0
  },
  rect21: {
    width: 315,
    height: 95,
    flexDirection: "row",
    margin: 5
  },
  button4: {
    width: 87,
    height: 95
  },
  rect4: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.18,
    shadowRadius: 0,
    flex: 1
  },
  group: {
    width: 50,
    height: 50,
    marginTop: 17,
    alignSelf: "center"
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    position: "absolute"
  },
  image4: {
    top: 10,
    left: 10,
    width: 30,
    height: 30,
    position: "absolute"
  },
  ellipseStack: {
    width: 50,
    height: 50
  },
  appointments: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12,
    height: 16,
    width: 77,
    marginBottom: 5,
    alignSelf: "center"
  },
  button5: {
    width: 87,
    height: 95,
    marginLeft: 141
  },
  rect5: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.18,
    shadowRadius: 0,
    flex: 1
  },
  group4: {
    width: 50,
    height: 50,
    marginTop: 17,
    alignSelf: "center"
  },
  ellipse1: {
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    position: "absolute"
  },
  image5: {
    top: 10,
    left: 10,
    width: 30,
    height: 30,
    position: "absolute"
  },
  ellipse1Stack: {
    width: 50,
    height: 50
  },
  specialists: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12,
    height: 16,
    width: 77,
    textAlign: "center",
    marginBottom: 5,
    alignSelf: "center"
  },
  button6: {
    width: 87,
    height: 95,
    marginLeft: -200
  },
  rect6: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.18,
    shadowRadius: 0,
    flex: 1
  },
  group6: {
    width: 50,
    height: 50,
    marginTop: 8,
    alignSelf: "center"
  },
  ellipse2: {
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    position: "absolute"
  },
  image6: {
    top: 10,
    left: 10,
    width: 30,
    height: 30,
    position: "absolute"
  },
  ellipse2Stack: {
    width: 50,
    height: 50
  },
  medicalOfficersGp: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12,
    height: 16,
    width: 77,
    textAlign: "center",
    marginBottom: 17,
    alignSelf: "center"
  },
  button4Row: {
    height: 95,
    flexDirection: "row",
    flex: 1
  },
  group9: {
    width: 306,
    height: 17,
    flexDirection: "row",
    margin: 5,
    alignItems: "center"
  },
  services: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  rect10: {
    height: 2,
    backgroundColor: "rgba(0,0,0,1)",
    flex: 1
  },
  group10: {
    width: 315,
    height: 95,
    flexDirection: "row",
    margin: 5
  },
  button7: {
    width: 87,
    height: 95
  },
  rect12: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.18,
    shadowRadius: 0,
    flex: 1
  },
  group12: {
    width: 50,
    height: 50,
    marginTop: 10,
    alignSelf: "center"
  },
  ellipse3: {
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    position: "absolute"
  },
  image7: {
    top: 10,
    left: 10,
    width: 30,
    height: 30,
    position: "absolute"
  },
  ellipse3Stack: {
    width: 50,
    height: 50
  },
  medicalDiagnostics: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12,
    height: 16,
    width: 77,
    textAlign: "center",
    marginBottom: 19,
    alignSelf: "center"
  },
  button8: {
    width: 87,
    height: 95,
    marginLeft: 141
  },
  rect13: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.18,
    shadowRadius: 0,
    flex: 1
  },
  group14: {
    width: 50,
    height: 50,
    marginTop: 11,
    alignSelf: "center"
  },
  ellipse4: {
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    position: "absolute"
  },
  image8: {
    top: 10,
    left: 10,
    width: 30,
    height: 30,
    position: "absolute"
  },
  ellipse4Stack: {
    width: 50,
    height: 50
  },
  ambulanceServices: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12,
    height: 16,
    width: 77,
    textAlign: "center",
    marginBottom: 17,
    alignSelf: "center"
  },
  button9: {
    width: 87,
    height: 95,
    marginLeft: -200
  },
  rect14: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.18,
    shadowRadius: 0,
    flex: 1
  },
  group16: {
    width: 50,
    height: 50,
    marginTop: 8,
    alignSelf: "center"
  },
  ellipse5: {
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    position: "absolute"
  },
  image9: {
    top: 10,
    left: 10,
    width: 30,
    height: 30,
    position: "absolute"
  },
  ellipse5Stack: {
    width: 50,
    height: 50
  },
  pharmacyServices: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12,
    height: 16,
    width: 77,
    textAlign: "center",
    marginBottom: 18,
    alignSelf: "center"
  },
  button7Row: {
    height: 95,
    flexDirection: "row",
    flex: 1
  },
  group17: {
    width: 306,
    height: 17,
    flexDirection: "row",
    margin: 5,
    alignItems: "center"
  },
  healthInformation: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  rect16: {
    height: 2,
    backgroundColor: "rgba(0,0,0,1)",
    flex: 1
  },
  group18: {
    width: 315,
    height: 95,
    flexDirection: "row",
    margin: 5
  },
  group19: {
    width: 87,
    height: 95
  },
  rect18: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.18,
    shadowRadius: 0,
    flex: 1
  },
  group20: {
    width: 50,
    height: 50,
    marginTop: 8,
    alignSelf: "center"
  },
  ellipse6: {
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    position: "absolute"
  },
  image10: {
    top: 10,
    left: 10,
    width: 30,
    height: 30,
    position: "absolute"
  },
  ellipse6Stack: {
    width: 50,
    height: 50
  },
  healthCalculator: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12,
    height: 16,
    width: 77,
    textAlign: "center",
    marginBottom: 21,
    marginLeft: 5
  },
  group23: {
    width: 87,
    height: 95,
    marginLeft: 28
  },
  rect20: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.18,
    shadowRadius: 0,
    flex: 1
  },
  group24: {
    width: 50,
    height: 50,
    marginTop: 11,
    alignSelf: "center"
  },
  ellipse8: {
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    position: "absolute"
  },
  image12: {
    top: 10,
    left: 10,
    width: 30,
    height: 30,
    position: "absolute"
  },
  ellipse8Stack: {
    width: 50,
    height: 50
  },
  healthInformation3: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12,
    height: 16,
    width: 77,
    textAlign: "center",
    marginBottom: 18,
    alignSelf: "center"
  },
  group19Row: {
    height: 95,
    flexDirection: "row",
    flex: 1,
    marginRight: 113
  },
  group32: {
    alignSelf: "stretch"
  },
  materialBasicFooter: {
    height: 56,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 0,
      width: 0
    },
    elevation: 5,
    shadowOpacity: 0.38,
    shadowRadius: 0,
    alignSelf: "stretch"
  }
});

export default Home;
