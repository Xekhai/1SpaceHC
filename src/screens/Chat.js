import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Chat(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/BG-24.jpg")}
        resizeMode="cover"
        style={styles.bg}
        imageStyle={styles.bg_imageStyle}
      >
        <View style={styles.cont}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Chats")}
            style={styles.head}
          >
            <FontAwesomeIcon
              name="arrow-left"
              style={styles.icon}
            ></FontAwesomeIcon>
            <View style={styles.group2}>
              <Image
                source={require("../assets/images/whatsapp-image-2021-05-01-at-4.18.07-pm-696x10422.jpg")}
                resizeMode="cover"
                style={styles.image}
              ></Image>
              <Text style={styles.drOsioxekhai}>Dr. Osioxekhai</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.scrollArea}>
            <ScrollView
              horizontal={false}
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              <View style={styles.group3}>
                <Text style={styles.loremIpsum}>
                  Send your test results, please.
                </Text>
                <Text style={styles.loremIpsum2}>8:21PM</Text>
              </View>
              <View style={styles.group4}>
                <View style={styles.group6}>
                  <Image
                    source={require("../assets/images/documents.png")}
                    resizeMode="contain"
                    style={styles.image3}
                  ></Image>
                  <Text style={styles.resultsPdf}>Results.pdf</Text>
                </View>
                <Text style={styles.loremIpsum3}>8:23PM</Text>
              </View>
              <View style={styles.group5}>
                <Text style={styles.loremIpsum4}>
                  I have seen your results, you are good to go.
                </Text>
                <Text style={styles.loremIpsum5}>8:24PM</Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.mess}>
            <View style={styles.message}>
              <TextInput
                placeholder="Type a message..."
                style={styles.typmess}
              ></TextInput>
            </View>
            <Image
              source={require("../assets/images/send.png")}
              resizeMode="contain"
              style={styles.send}
            ></Image>
            <FontAwesomeIcon
              name="ellipsis-v"
              style={styles.more}
            ></FontAwesomeIcon>
          </View>
          <View style={styles.base}>
            <View style={styles.group19}>
              <View style={styles.group10}>
                <View style={styles.group15}>
                  <Image
                    source={require("../assets/images/documents1.png")}
                    resizeMode="contain"
                    style={styles.image5}
                  ></Image>
                </View>
                <Text style={styles.documentUpload}>Document Upload</Text>
              </View>
              <View style={styles.group11}>
                <View style={styles.group16}>
                  <Image
                    source={require("../assets/images/camera.png")}
                    resizeMode="contain"
                    style={styles.image6}
                  ></Image>
                </View>
                <Text style={styles.camera}>Camera</Text>
              </View>
            </View>
            <View style={styles.group20}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Videocall")}
                style={styles.button2}
              >
                <View style={styles.group17}>
                  <Image
                    source={require("../assets/images/video-camera.png")}
                    resizeMode="contain"
                    style={styles.image7}
                  ></Image>
                </View>
                <Text style={styles.videoCall}>Video Call</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Voicecall")}
                style={styles.button3}
              >
                <View style={styles.group18}>
                  <Image
                    source={require("../assets/images/telephone.png")}
                    resizeMode="contain"
                    style={styles.image8}
                  ></Image>
                </View>
                <Text style={styles.voiceCall}>Voice call</Text>
              </TouchableOpacity>
            </View>
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
  bg: {
    flex: 1
  },
  bg_imageStyle: {},
  cont: {
    flex: 1
  },
  head: {
    backgroundColor: "rgba(118,213,203,1)",
    width: 375,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.31,
    shadowRadius: 0,
    height: 130,
    justifyContent: "flex-end"
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    margin: 0,
    marginTop: 35,
    marginLeft: 35
  },
  group2: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around"
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 100,
    margin: 10
  },
  drOsioxekhai: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 16,
    margin: 10
  },
  scrollArea: {
    alignSelf: "stretch",
    flex: 1
  },
  scrollArea_contentContainerStyle: {
    height: 394
  },
  group3: {
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    margin: 5,
    marginRight: 40,
    marginLeft: 40,
    alignSelf: "flex-start",
    borderRadius: 5
  },
  loremIpsum: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    alignSelf: "flex-start",
    margin: 10
  },
  loremIpsum2: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12,
    alignSelf: "flex-end",
    margin: 10
  },
  group4: {
    backgroundColor: "rgba(175,220,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    margin: 5,
    marginRight: 40,
    marginLeft: 40,
    alignSelf: "flex-end",
    borderRadius: 5
  },
  group6: {
    width: 115,
    height: 30,
    flexDirection: "row",
    margin: 5,
    alignItems: "center"
  },
  image3: {
    width: 30,
    height: 30,
    margin: 3
  },
  resultsPdf: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    margin: 3
  },
  loremIpsum3: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12,
    margin: 5,
    alignSelf: "flex-end"
  },
  group5: {
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    margin: 5,
    marginRight: 40,
    marginLeft: 40,
    alignSelf: "flex-start",
    borderRadius: 5
  },
  loremIpsum4: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    margin: 10,
    alignSelf: "stretch"
  },
  loremIpsum5: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12,
    margin: 10,
    alignSelf: "flex-end"
  },
  mess: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(230, 230, 230,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 15,
    shadowOpacity: 0.42,
    shadowRadius: 5,
    alignSelf: "stretch"
  },
  message: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,1)",
    padding: 8,
    alignSelf: "stretch",
    flex: 1,
    borderRadius: 85,
    marginTop: 8,
    marginBottom: 8,
    marginRight: 0,
    marginLeft: 25,
    margin: 0
  },
  typmess: {
    fontFamily: "roboto-regular",
    color: "#121212",
    flex: 1,
    alignSelf: "stretch"
  },
  send: {
    width: 20,
    height: 20,
    marginTop: 8,
    marginBottom: 8,
    marginRight: 0,
    marginLeft: 25
  },
  more: {
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    marginTop: 8,
    marginBottom: 8,
    marginRight: 25,
    marginLeft: 25
  },
  base: {
    backgroundColor: "rgba(255,199,186,1)",
    alignSelf: "stretch"
  },
  group19: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "stretch",
    margin: 15
  },
  group10: {
    alignItems: "center",
    width: 100
  },
  group15: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    padding: 15
  },
  image5: {
    width: 50,
    height: 50,
    borderRadius: 100,
    padding: 0
  },
  documentUpload: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12
  },
  group11: {
    alignItems: "center",
    width: 100
  },
  group16: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    padding: 15
  },
  image6: {
    width: 50,
    height: 50
  },
  camera: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12
  },
  group20: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    alignSelf: "stretch",
    margin: 15
  },
  button2: {
    width: 100,
    alignItems: "center"
  },
  group17: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    padding: 15
  },
  image7: {
    width: 50,
    height: 50
  },
  videoCall: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12
  },
  button3: {
    width: 100,
    alignItems: "center"
  },
  group18: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    padding: 15
  },
  image8: {
    width: 50,
    height: 50
  },
  voiceCall: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12
  }
});

export default Chat;
