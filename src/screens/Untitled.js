import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialButtonShare5 from "../components/MaterialButtonShare5";
import MaterialCheckboxWithLabel2 from "../components/MaterialCheckboxWithLabel2";
import MaterialButtonDark from "../components/MaterialButtonDark";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group16}>
        <View style={styles.group}>
          <Icon name="chevron-left" style={styles.icon}></Icon>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.group19}>
              <View style={styles.group13}>
                <Text style={styles.cart}>Cart</Text>
                <View style={styles.rect}></View>
              </View>
              <View style={styles.group11}>
                <View style={styles.group10}>
                  <Image
                    source={require("../assets/images/GSO31400.webp")}
                    resizeMode="cover"
                    style={styles.image}
                  ></Image>
                  <View style={styles.group9}>
                    <View style={styles.group3}>
                      <View style={styles.group2}>
                        <Text style={styles.azithromycin}>Azithromycin</Text>
                        <Text style={styles.xcaPharmacy}>XCA Pharmacy</Text>
                      </View>
                      <MaterialButtonShare5
                        style={styles.materialButtonShare5}
                      ></MaterialButtonShare5>
                    </View>
                    <View style={styles.group6}>
                      <View style={styles.group4}>
                        <Text style={styles.loremIpsum3}>-</Text>
                      </View>
                      <Text style={styles.loremIpsum2}>1</Text>
                      <View style={styles.group5}>
                        <Text style={styles.loremIpsum4}>+</Text>
                      </View>
                    </View>
                    <View style={styles.group8}>
                      <MaterialCheckboxWithLabel2
                        style={styles.materialCheckboxWithLabel2}
                      ></MaterialCheckboxWithLabel2>
                      <Text style={styles.n16700}>N16,700</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.rect9}></View>
                <View style={styles.group12}>
                  <Image
                    source={require("../assets/images/GSO31400.webp")}
                    resizeMode="cover"
                    style={styles.image2}
                  ></Image>
                  <View style={styles.rect2}>
                    <View style={styles.rect3}>
                      <View style={styles.rect4}>
                        <Text style={styles.azithromycin2}>Azithromycin</Text>
                        <Text style={styles.xcaPharmacy2}>XCA Pharmacy</Text>
                      </View>
                      <MaterialButtonShare5
                        style={styles.materialButtonShare52}
                      ></MaterialButtonShare5>
                    </View>
                    <View style={styles.rect5}>
                      <View style={styles.rect6}>
                        <Text style={styles.text}>-</Text>
                      </View>
                      <Text style={styles.text2}>1</Text>
                      <View style={styles.rect7}>
                        <Text style={styles.text3}>+</Text>
                      </View>
                    </View>
                    <View style={styles.rect8}>
                      <MaterialCheckboxWithLabel2
                        style={styles.materialCheckboxWithLabel22}
                      ></MaterialCheckboxWithLabel2>
                      <Text style={styles.n167002}>N16,700</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.group14}>
                <Text style={styles.shippingAddress}>Shipping Address</Text>
                <View style={styles.rect10}></View>
              </View>
              <View style={styles.group15}>
                <TextInput
                  placeholder="PiahConsult, Barth Road, Ibadan.  St. Anne's female hostel, University of Ibadan, Barth Road, 200284, Ibadan."
                  numberOfLines={0}
                  multiline={true}
                  maxLength={255}
                  style={styles.placeholder}
                ></TextInput>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.group18}>
          <View style={styles.group17}>
            <Text style={styles.total}>Total:</Text>
            <Text style={styles.n32900}>N32,900</Text>
          </View>
          <MaterialButtonDark
            style={styles.materialButtonDark}
          ></MaterialButtonDark>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group16: {
    alignItems: "center",
    flex: 1
  },
  group: {
    paddingTop: 0,
    paddingLeft: 0,
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: "rgba(118,213,203,1)"
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginTop: 62,
    marginLeft: 31,
    marginBottom: 11
  },
  scrollArea: {
    alignSelf: "stretch",
    flex: 1
  },
  scrollArea_contentContainerStyle: {
    height: 644
  },
  group19: {
    alignSelf: "stretch"
  },
  group13: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingRight: 34,
    paddingLeft: 34
  },
  cart: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginRight: 11,
    marginLeft: 11
  },
  rect: {
    width: 220,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginRight: 11,
    marginLeft: 11
  },
  group11: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    margin: 0,
    marginTop: 8,
    marginBottom: 8,
    padding: 0,
    paddingTop: 20,
    paddingBottom: 20,
    alignSelf: "stretch",
    marginRight: 25,
    marginLeft: 25
  },
  group10: {
    flexDirection: "row",
    marginBottom: 0,
    alignItems: "center",
    margin: 0,
    alignSelf: "center",
    marginRight: 25,
    marginLeft: 25,
    marginTop: 10
  },
  image: {
    width: 80,
    height: 80,
    margin: 0,
    marginRight: 14
  },
  group9: {
    margin: 0
  },
  group3: {
    flexDirection: "row",
    alignItems: "center",
    margin: 0,
    alignSelf: "stretch",
    justifyContent: "space-between"
  },
  group2: {},
  azithromycin: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 18
  },
  xcaPharmacy: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(191,191,191,1)"
  },
  materialButtonShare5: {
    height: 40,
    width: 40
  },
  group6: {
    flexDirection: "row",
    alignItems: "center",
    margin: 0,
    alignSelf: "stretch",
    marginTop: 5
  },
  group4: {
    width: 20,
    height: 20,
    backgroundColor: "rgba(230, 230, 230,1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginRight: 5,
    marginLeft: 0
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginRight: 5,
    marginLeft: 0
  },
  group5: {
    width: 20,
    height: 20,
    backgroundColor: "rgba(230, 230, 230,1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginRight: 5,
    marginLeft: 0
  },
  loremIpsum4: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  group8: {
    flexDirection: "row",
    alignItems: "center",
    margin: 0,
    alignSelf: "stretch"
  },
  materialCheckboxWithLabel2: {
    height: 15,
    width: 80
  },
  n16700: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(35,171,108,1)",
    marginLeft: 40
  },
  rect9: {
    width: 220,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginTop: 10
  },
  group12: {
    flexDirection: "row",
    marginBottom: 0,
    alignItems: "center",
    margin: 0,
    alignSelf: "center",
    marginRight: 25,
    marginLeft: 25,
    marginTop: 10,
    paddingTop: 0,
    paddingBottom: 0
  },
  image2: {
    width: 80,
    height: 80,
    margin: 0,
    marginRight: 14
  },
  rect2: {
    margin: 0
  },
  rect3: {
    flexDirection: "row",
    alignItems: "center",
    margin: 0,
    alignSelf: "stretch",
    justifyContent: "space-between"
  },
  rect4: {},
  azithromycin2: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 18
  },
  xcaPharmacy2: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(191,191,191,1)"
  },
  materialButtonShare52: {
    height: 40,
    width: 40
  },
  rect5: {
    flexDirection: "row",
    alignItems: "center",
    margin: 0,
    alignSelf: "stretch",
    marginTop: 5
  },
  rect6: {
    width: 20,
    height: 20,
    backgroundColor: "rgba(230, 230, 230,1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginRight: 5,
    marginLeft: 0
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  text2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginRight: 5,
    marginLeft: 0
  },
  rect7: {
    width: 20,
    height: 20,
    backgroundColor: "rgba(230, 230, 230,1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginRight: 5,
    marginLeft: 0
  },
  text3: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  rect8: {
    flexDirection: "row",
    alignItems: "center",
    margin: 0,
    alignSelf: "stretch"
  },
  materialCheckboxWithLabel22: {
    height: 15,
    width: 80
  },
  n167002: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(35,171,108,1)",
    marginLeft: 40
  },
  group14: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    margin: 23,
    marginTop: 6,
    marginBottom: 6
  },
  shippingAddress: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    marginRight: 11,
    marginLeft: 11
  },
  rect10: {
    height: 1,
    backgroundColor: "#E6E6E6",
    marginRight: 11,
    marginLeft: 11,
    flex: 1
  },
  group15: {
    height: 100,
    alignSelf: "stretch",
    margin: 0,
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginRight: 28,
    marginLeft: 28
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 64,
    flex: 1,
    margin: 20
  },
  group18: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "stretch",
    padding: 20,
    backgroundColor: "rgba(230, 230, 230,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 15,
    shadowOpacity: 1,
    shadowRadius: 5
  },
  group17: {
    width: 106,
    height: 19,
    flexDirection: "row"
  },
  total: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212"
  },
  n32900: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(10,251,88,1)"
  },
  materialButtonDark: {
    width: 100,
    height: 25
  }
});

export default Untitled;
