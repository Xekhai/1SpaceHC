import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialButtonShare5 from "../components/MaterialButtonShare5";
import MaterialCheckboxWithLabel2 from "../components/MaterialCheckboxWithLabel2";

function Checkout(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Pharmacyinfo")}
          style={styles.header}
        >
          <Icon name="chevron-left" style={styles.icon}></Icon>
        </TouchableOpacity>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.mcon}>
              <View style={styles.cartdiv}>
                <Text style={styles.cart}>Cart</Text>
                <View style={styles.linediv}></View>
              </View>
              <View style={styles.cartbox}>
                <View style={styles.item1}>
                  <Image
                    source={require("../assets/images/GSO31400.webp")}
                    resizeMode="cover"
                    style={styles.image}
                  ></Image>
                  <View style={styles.info1}>
                    <View style={styles.name}>
                      <View style={styles.nameinfo}>
                        <Text style={styles.azithromycin}>Azithromycin</Text>
                        <Text style={styles.xcaPharmacy}>XCA Pharmacy</Text>
                      </View>
                      <MaterialButtonShare5
                        style={styles.remove}
                      ></MaterialButtonShare5>
                    </View>
                    <View style={styles.numb}>
                      <View style={styles.rduce}>
                        <Text style={styles.loremIpsum3}>-</Text>
                      </View>
                      <Text style={styles.one}>1</Text>
                      <View style={styles.add}>
                        <Text style={styles.loremIpsum4}>+</Text>
                      </View>
                    </View>
                    <View style={styles.hdev}>
                      <MaterialCheckboxWithLabel2
                        style={styles.materialCheckboxWithLabel2}
                      ></MaterialCheckboxWithLabel2>
                      <Text style={styles.n16700}>N16,700</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.div}></View>
                <View style={styles.duper1}>
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
              <View style={styles.sadddiv}>
                <Text style={styles.shippingAddress}>Shipping Address</Text>
                <View style={styles.dv}></View>
              </View>
              <View style={styles.address}>
                <TextInput
                  placeholder="PiahConsult, Barth Road, Ibadan.  St. Anne's female hostel, University of Ibadan, Barth Road, 200284, Ibadan."
                  numberOfLines={0}
                  multiline={true}
                  maxLength={255}
                  style={styles.addressinput}
                ></TextInput>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.base}>
          <View style={styles.tprice}>
            <Text style={styles.total}>Total:</Text>
            <Text style={styles.n32900}>N32,900</Text>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Pharmacyinfo")}
            style={styles.proce}
          >
            <Text style={styles.proceed}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bg: {
    alignItems: "center",
    flex: 1
  },
  header: {
    paddingTop: 0,
    paddingLeft: 0,
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: "rgba(118,213,203,1)",
    alignItems: "flex-end"
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginTop: 62,
    marginLeft: 31,
    marginBottom: 11,
    alignSelf: "flex-end"
  },
  scrollArea: {
    alignSelf: "stretch",
    flex: 1
  },
  scrollArea_contentContainerStyle: {
    height: 628
  },
  mcon: {
    alignSelf: "stretch"
  },
  cartdiv: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingRight: 34,
    paddingLeft: 34,
    justifyContent: "center"
  },
  cart: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    margin: 0,
    marginRight: 10
  },
  linediv: {
    width: 200,
    height: 1,
    backgroundColor: "#E6E6E6",
    margin: 0
  },
  cartbox: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,1)",
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
  item1: {
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
  info1: {
    margin: 0
  },
  name: {
    flexDirection: "row",
    alignItems: "center",
    margin: 0,
    alignSelf: "stretch",
    justifyContent: "space-between"
  },
  nameinfo: {},
  azithromycin: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 18
  },
  xcaPharmacy: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(191,191,191,1)"
  },
  remove: {
    height: 40,
    width: 40
  },
  numb: {
    flexDirection: "row",
    alignItems: "center",
    margin: 0,
    alignSelf: "stretch",
    marginTop: 5
  },
  rduce: {
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
  one: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginRight: 5,
    marginLeft: 0
  },
  add: {
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
  hdev: {
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
  div: {
    width: 220,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginTop: 10
  },
  duper1: {
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
  sadddiv: {
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
  dv: {
    height: 1,
    backgroundColor: "#E6E6E6",
    marginRight: 11,
    marginLeft: 11,
    flex: 1
  },
  address: {
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
  addressinput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 64,
    flex: 1,
    margin: 20
  },
  base: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "stretch",
    padding: 20,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 15,
    shadowOpacity: 1,
    shadowRadius: 5
  },
  tprice: {
    width: 106,
    height: 19,
    flexDirection: "row"
  },
  total: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 18
  },
  n32900: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(118,213,203,1)",
    fontSize: 18
  },
  proce: {
    flexDirection: "row",
    alignSelf: "flex-start",
    margin: 0,
    padding: 0,
    backgroundColor: "rgba(0,0,0,1)",
    borderRadius: 81,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.31,
    shadowRadius: 0
  },
  proceed: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(255,255,255,1)",
    margin: 11
  }
});

export default Checkout;
