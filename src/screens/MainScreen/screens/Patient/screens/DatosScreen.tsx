import { View, Text } from "react-native";
import React from "react";
import { usePatientStore } from "../../../../../state/userState";

export default function DatosScreen() {
  const patient = usePatientStore((state) => state.patient);
  console.log(patient);
  return (
    <View>
      <Text>Nombre: {patient.name}</Text>
      <Text>Edad: {patient.age}</Text>
      <Text>Peso: {patient.weight}</Text>
    </View>
  );
}
