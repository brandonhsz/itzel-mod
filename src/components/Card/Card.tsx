import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Card({ text, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
