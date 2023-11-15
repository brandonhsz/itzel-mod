import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  name: string;
}

export default function Header({ name = "Doctor" }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Buen Dia! {name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    position: "absolute",
    zIndex: 1,
    width: "100%",
    top: 80,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});
