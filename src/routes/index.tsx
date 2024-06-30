import React, { useState, useEffect } from "react";
import { StatusBar, AppState } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  useNavigation,
} from "@react-navigation/native";
import LoginWithEmail from "../screens/auth/LoginWithEmail";
import LoginWithSSO from "../screens/auth/LoginWithSSO";
import ResetPassword from "../screens/auth/ResetPassword";
import ChooseLanguage from "../screens/auth/ChooseLanguage";
import ChooseGuide from "../screens/auth/ChooseGuide";
import EnablePermissions from "../screens/auth/EnablePermissions";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Capture from "../screens/main/Capture";
import SplashScreen from "react-native-splash-screen";


const RootNavigator = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    console.log("SpalsjRunning");
    const timer = setTimeout(() => {
      SplashScreen.hide(); // Hide splash screen after two seconds
    }, 2000);

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);





  return (
    <NavigationContainer>
      {/* <StatusBar
        backgroundColor="#yourStatusBarColor"
        barStyle="light-content"
      /> */}

      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginWithSSO" component={LoginWithSSO} />

        <Stack.Screen name="LoginWithEmail" component={LoginWithEmail} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="ChooseLanguage" component={ChooseLanguage} />
        <Stack.Screen name="ChooseGuide" component={ChooseGuide} />
        <Stack.Screen name="EnablePermissions" component={EnablePermissions} />
        <Stack.Screen name="Capture" component={Capture} />




        {/* Add your Login screen here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
