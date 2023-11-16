import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useUserStore } from "../../../../../../state/userState";

export default function Header() {
  const user = useUserStore((state) => state.user);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Buen Dia! {user.userType === "doctor" ? "Doctor" : "Paciente"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});
