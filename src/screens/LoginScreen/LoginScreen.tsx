import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput, Button, useTheme } from "react-native-paper";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../../assets/login.png")}
      />
      <View>
        <View style={{ gap: 10 }}>
          <TextInput label="Nombre de Usuario" mode="outlined" />
          <TextInput label="Contraseña" mode="outlined" />
        </View>
        <Button style={{ alignSelf: "flex-end", marginBottom: 30 }}>
          ¿Olvidaste tu contraseña?
        </Button>
        <TouchableOpacity
          onPress={() => navigation.navigate("main", { screen: "doctor" })}
        >
          <Button mode="contained" buttonColor={theme.colors.primary}>
            Ingresar
          </Button>
        </TouchableOpacity>
        <Button
          textColor="black"
          onPress={() => navigation.navigate("register")}
        >
          ¿No estás registrado?{" "}
          <Text style={{ fontWeight: "bold", color: theme.colors.primary }}>
            Regístrate
          </Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 40,
    justifyContent: "space-evenly",
  },
  logo: {
    resizeMode: "contain",
    width: "100%",
    height: 200,
    borderRadius: 40,
  },
});
