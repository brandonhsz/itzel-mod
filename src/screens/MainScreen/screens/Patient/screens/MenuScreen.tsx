import { View, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Card from "../../../../../components/Card/Card";

export default function MenuScreen() {
  const navigation = useNavigation<any>();

  const cards = [
    { text: "Datos", onPress: () => navigation.navigate("datos") },
    { text: "Historia Clinica", onPress: () => console.log("hola") },
    {
      text: "Cuestionario",
      onPress: () => navigation.navigate("cuestionario"),
    },
    { text: "Señales", onPress: () => console.log("hola") },
    { text: "Diagnostico", onPress: () => navigation.navigate("diagnostico") },
  ];

  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <Card key={index} text={card.text} onPress={card.onPress} />
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
