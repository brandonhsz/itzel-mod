import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import MainScreen from "./src/screens/MainScreen/MainScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import RegisterScreen from "./src/screens/RegisterScreen/RegisterScreen";
import { headlessOptions } from "./src/config";
import Header from "./src/screens/MainScreen/screens/Doctor/components/Header/Header";

const Stack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#040624",
    secondary: "#2C5784",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ ...headlessOptions }}
              name="login"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{ ...headlessOptions }}
              name="register"
              component={RegisterScreen}
            />
            <Stack.Screen
              name="main"
              options={{ header: () => <Header /> }}
              component={MainScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
