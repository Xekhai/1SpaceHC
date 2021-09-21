import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Appointments from "./src/screens/Appointments";
import Centerinfo from "./src/screens/Centerinfo";
import Chat from "./src/screens/Chat";
import Chats from "./src/screens/Chats";
import Checkout from "./src/screens/Checkout";
import Contprov from "./src/screens/Contprov";
import Dcenters1 from "./src/screens/Dcenters1";
import Edprofile from "./src/screens/Edprofile";
import Emr from "./src/screens/Emr";
import Extra from "./src/screens/Extra";
import Forgotpass from "./src/screens/Forgotpass";
import Home from "./src/screens/Home";
import Infospec from "./src/screens/Infospec";
import Login from "./src/screens/Login";
import Notif from "./src/screens/Notif";
import Officers from "./src/screens/Officers";
import Pharmacyinfo from "./src/screens/Pharmacyinfo";
import Pharmlist from "./src/screens/Pharmlist";
import Settings from "./src/screens/Settings";
import Signup from "./src/screens/Signup";
import Signupas from "./src/screens/Signupas";
import Speci from "./src/screens/Speci";
import Videocall from "./src/screens/Videocall";
import Voicecall from "./src/screens/Voicecall";

const DrawerNavigation = createDrawerNavigator({
  Appointments: Appointments,
  Centerinfo: Centerinfo,
  Chat: Chat,
  Chats: Chats,
  Checkout: Checkout,
  Contprov: Contprov,
  Dcenters1: Dcenters1,
  Edprofile: Edprofile,
  Emr: Emr,
  Extra: Extra,
  Forgotpass: Forgotpass,
  Home: Home,
  Infospec: Infospec,
  Login: Login,
  Notif: Notif,
  Officers: Officers,
  Pharmacyinfo: Pharmacyinfo,
  Pharmlist: Pharmlist,
  Settings: Settings,
  Signup: Signup,
  Signupas: Signupas,
  Speci: Speci,
  Videocall: Videocall,
  Voicecall: Voicecall
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Appointments: Appointments,
    Centerinfo: Centerinfo,
    Chat: Chat,
    Chats: Chats,
    Checkout: Checkout,
    Contprov: Contprov,
    Dcenters1: Dcenters1,
    Edprofile: Edprofile,
    Emr: Emr,
    Extra: Extra,
    Forgotpass: Forgotpass,
    Home: Home,
    Infospec: Infospec,
    Login: Login,
    Notif: Notif,
    Officers: Officers,
    Pharmacyinfo: Pharmacyinfo,
    Pharmlist: Pharmlist,
    Settings: Settings,
    Signup: Signup,
    Signupas: Signupas,
    Speci: Speci,
    Videocall: Videocall,
    Voicecall: Voicecall
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "comic-sans-ms-regular": require("./src/assets/fonts/comic-sans-ms-regular.ttf"),
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
