import { View, Text } from "react-native";
import React from "react";
import { usePatientStore } from "../../../../../state/userState";
import { useTheme } from "react-native-paper";

export default function DatosScreen() {
  const patient = usePatientStore((state) => state.patient);
  const theme = useTheme();
  return (
    <View
      style={{
        marginHorizontal: 20,
        flex: 1,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 30, alignSelf: "center", fontWeight: "bold" }}>
          Datos del Paciente:
        </Text>

        <View
          style={{
            backgroundColor: theme.colors.primary,
            padding: 20,
            borderRadius: 20,
            elevation: 5,
          }}
        >
          <Text style={{ color: "white", fontSize: 25 }}>
            Nombre: {patient.name}
          </Text>
          <Text style={{ color: "white", fontSize: 25 }}>
            Edad: {patient.age}
          </Text>
          <Text style={{ color: "white", fontSize: 25 }}>
            Peso: {patient.weight}
          </Text>
          <Text style={{ color: "white", fontSize: 25 }}>
            Telefono: {patient.phone}
          </Text>
        </View>
      </View>
    </View>
  );
}
