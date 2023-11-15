import { View, Dimensions, Text } from "react-native";
import React from "react";
import RNSpeedometer from "react-native-speedometer";

export default function DiagnosticoScreen() {
  const text =
    "Tras realizar un exhaustivo analisis de los datos recabados, se ha procedido a evaluar minuciosamente el porcentaje de riesgo asociado al potencial padecimiento de apnea del sueño por parte del paciente el cual es el mostrado en pantalla";
  const labels = [
    {
      name: text,
      labelColor: "#000000",
      activeBarColor: "#00ff6b",
    },
    {
      name: text,
      labelColor: "#000000",
      activeBarColor: "#14eb6e",
    },
    {
      name: text,
      labelColor: "#000000",
      activeBarColor: "#f2cf1f",
    },
    {
      name: text,
      labelColor: "#000000",
      activeBarColor: "#f4ab44",
    },
    {
      name: text,
      labelColor: "#000000",
      activeBarColor: "#ff5400",
    },
    {
      name: text,
      labelColor: "#000000",
      activeBarColor: "#ff2900",
    },
  ];

  return (
    <View style={{ flex: 1, position: "absolute", width: "100%", top: 250 }}>
      <RNSpeedometer
        labels={labels}
        value={85}
        labelWrapperStyle={{ fontSize: 20 }}
        size={Dimensions.get("window").width - 100}
      />
    </View>
  );
}
