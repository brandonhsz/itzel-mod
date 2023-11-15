import React from "react";
import { ScrollView, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DoctorScreen from "./screens/Doctor/DoctorScreen";
import PatientScreen from "./screens/Patient/PatientScreen";
import Header from "./screens/Doctor/components/Header/Header";
import { headlessOptions } from "../../config/index";

const Stack = createNativeStackNavigator();

export default function MainScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header name="Brandon" />
      <Stack.Navigator initialRouteName="patient">
        <Stack.Screen
          name="doctor"
          component={DoctorScreen}
          options={{ ...headlessOptions }}
        />
        <Stack.Screen
          name="patient"
          component={PatientScreen}
          options={{ ...headlessOptions }}
        />
      </Stack.Navigator>
    </View>
  );
}
