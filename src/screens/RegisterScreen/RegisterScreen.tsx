import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput, Button, useTheme, RadioButton } from "react-native-paper";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { api } from "../../constants/api";

export default function RegisterScreen() {
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [role, setRole] = React.useState("paciente");
  const [error, setError] = React.useState(false);
  const handleRegister = async () => {
    if (
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      password !== confirmPassword
    ) {
      setError(true);
      return;
    }
    setError(false);
    try {
      await api.post("/auth/signup", {
        email,
        password,
        is_doctor: role === "doctor" ? true : false,
      });
      setError(false);
      navigation.navigate("login");
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../../assets/login.png")}
      />
      <View>
        {error && (
          <Text
            style={{ fontWeight: "bold", alignSelf: "center", color: "red" }}
          >
            Ocurrio un problema al registrarte
          </Text>
        )}
        <View style={{ gap: 10, marginBottom: 20 }}>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            label="Correo Electronico"
            mode="outlined"
          />
          <TextInput
            onChangeText={(text) => setPassword(text)}
            label="Contraseña"
            mode="outlined"
          />
          <TextInput
            onChangeText={(text) => setConfirmPassword(text)}
            label="Confirmar Contraseña"
            mode="outlined"
          />

          <RadioButton.Group
            onValueChange={(value) => setRole(value)}
            value={role}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <RadioButton value="paciente" />
              <Text>Paciente</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <RadioButton value="doctor" />
              <Text>Doctor</Text>
            </View>
          </RadioButton.Group>
        </View>
        <TouchableOpacity onPress={handleRegister}>
          <Button mode="contained" buttonColor={theme.colors.primary}>
            Registrar
          </Button>
        </TouchableOpacity>
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
