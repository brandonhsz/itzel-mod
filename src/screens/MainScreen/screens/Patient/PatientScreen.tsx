import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Card from "../../../../components/Card/Card";

export default function PatientScreen({ route }: any) {
  const navigation = useNavigation<any>();

  const cards = [
    "Datos",
    "Historia Clinica",
    "Cuestionario",
    "Señales",
    "Diagnostico",
  ];

  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <Card key={index} text={card} />
      ))}
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
