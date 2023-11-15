import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput, Button, useTheme } from "react-native-paper";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../constants/api";

export default function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const handleLogin = async () => {
    if (email === "" || password === "") {
      setError(true);
      return;
    }
    try {
      const response = await api.post("/auth/signin", {
        email,
        password,
      });
      setError(false);
      navigation.navigate("main", { screen: response.data.userType });
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };
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
          {error && (
            <Text style={{ alignSelf: "center", color: "red" }}>
              Error al intentar iniciar sesion
            </Text>
          )}
          <TextInput
            onChangeText={(text) => setEmail(text)}
            label="Nombre de Usuario"
            mode="outlined"
          />
          <TextInput
            onChangeText={(text) => setPassword(text)}
            label="Contraseña"
            mode="outlined"
          />
        </View>
        <Button style={{ alignSelf: "flex-end", marginBottom: 30 }}>
          ¿Olvidaste tu contraseña?
        </Button>
        <TouchableOpacity onPress={handleLogin}>
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
