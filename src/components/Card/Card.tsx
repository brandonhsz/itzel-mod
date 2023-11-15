import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Card({ text, onPress }: any) {
  return (
    <TouchableOpacity
        style={styles.card}
        onPress={onPress}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#040624",
    borderWidth: 1,
    width: "50%",
    paddingVertical: 25,
    margin: 10,
    borderRadius: 40,
    elevation: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
