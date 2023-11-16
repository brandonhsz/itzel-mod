import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "./screens/MenuScreen/MenuScreen";
import { headlessOptions } from "../../../../config";
import RecordScreen from "./screens/RecordScreen/RecordScreen";
import AltaScreen from "./screens/AltaScreen/AltaScreen";
import { useUserStore } from "../../../../state/userState";

const Stack = createNativeStackNavigator();

export default function DoctorScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator>
        <Stack.Screen
          name="menu"
          component={MenuScreen}
          options={{ ...headlessOptions }}
        />
        <Stack.Screen
          name="record"
          component={RecordScreen}
          options={{ ...headlessOptions }}
        />
        <Stack.Screen
          name="alta"
          component={AltaScreen}
          options={{ ...headlessOptions }}
        />
      </Stack.Navigator>
    </View>
  );
}
