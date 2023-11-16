import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Card from "../../../../components/Card/Card";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "./screens/MenuScreen";
import DiagnosticoScreen from "./screens/DiagnosticoScreen";
import { headlessOptions } from "../../../../config";
import DatosScreen from "./screens/DatosScreen";
import CuestionarioScreen from "./screens/CuestionarioScreen";

const Stack = createNativeStackNavigator();

export default function PatientScreen({ route }: any) {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator>
        <Stack.Screen
          name="menu"
          component={MenuScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          options={{ ...headlessOptions }}
          name="diagnostico"
          component={DiagnosticoScreen}
        />
        <Stack.Screen
          options={{ ...headlessOptions }}
          name="datos"
          component={DatosScreen}
        />
        <Stack.Screen
          options={{ ...headlessOptions }}
          name="cuestionario"
          component={CuestionarioScreen}
        />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  card: {
    backgroundColor: "white",
    borderWidth: 1,
    width: "50%",
    padding: 50,
    margin: 10,
    borderRadius: 20,
    elevation: 5,
    alignItems: "center",
  },
});
