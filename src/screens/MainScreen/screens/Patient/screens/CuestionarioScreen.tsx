import {
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Button, RadioButton, TextInput, useTheme } from "react-native-paper";
import { usePatientStore, useUserStore } from "../../../../../state/userState";
import { api } from "../../../../../constants/api";

export default function CuestionarioScreen() {
  const theme = useTheme();
  const user = useUserStore((state) => state.user);
  const [values, setValues] = React.useState({
    ronquidos: "no",
    pesadillas: "no",
    rendimiento: "no",
    aprendizaje: "no",
    hiperactividad: "no",
  });
  const questions = [
    {
      label: "ronquidos",
      text: "¿El paciente presenta ronquidos mientras duerme?",
      value: values.ronquidos,
    },
    {
      label: "pesadillas",
      text: "¿El paciente presenta terrores nocturnos (pesadillas) mientras duerme?",
      value: values.pesadillas,
    },
    {
      label: "rendimiento",
      text: "¿El paciente presenta bajo rendimiento en la escuela o casa?",
      value: values.rendimiento,
    },
    {
      label: "aprendizaje",
      text: "¿El paciente presenta problemas de aprendizaje?",
      value: values.aprendizaje,
    },
    {
      label: "hiperactividad",
      text: "¿El paciente presenta hiperactividad?",
      value: values.hiperactividad,
    },
  ];

  const handleSubmit = async () => {
    console.log(user.id);
    await api.post("/patient/cuestionario", {
      patientId: user.id,
      question1: values.aprendizaje === "si" ? true : false,
      question2: values.hiperactividad === "si" ? true : false,
      question3: values.pesadillas === "si" ? true : false,
      question4: values.rendimiento === "si" ? true : false,
      question5: values.ronquidos === "si" ? true : false,
    });
  };
  return (
    <ScrollView style={{ marginHorizontal: 40, marginVertical: 20, flex: 1 }}>
      {questions.map((question, index) => (
        <View key={index}>
          <Text>{question.text}</Text>
          <RadioButton.Group
            onValueChange={(value) =>
              setValues({ ...values, [question.label]: value })
            }
            value={question.value}
          >
            <RadioButton.Item label="Si" value="si" />
            <RadioButton.Item label="No" value="no" />
          </RadioButton.Group>
        </View>
      ))}
      <TouchableOpacity onPress={handleSubmit} style={{ marginTop: 10 }}>
        <Button mode="contained" buttonColor={theme.colors.primary}>
          Ingresar
        </Button>
      </TouchableOpacity>
    </ScrollView>
  );
}
