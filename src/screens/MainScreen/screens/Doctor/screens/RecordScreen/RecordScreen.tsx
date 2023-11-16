import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { TouchableRipple, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../../../../../constants/api";
import {
  usePatientStore,
  useUserStore,
} from "../../../../../../state/userState";

export default function RecordScreen() {
  const [patientList, setPatientList] = React.useState<any>([]);

  const theme = useTheme();
  const navigation = useNavigation<any>();
  const user = useUserStore((state) => state.user);
  const setPatient = usePatientStore((state) => state.setPatient);

  const fetchPatients = async () => {
    const response = await api.get(`/patient/many/${user.id}`, {});
    console.log(response.data);
    setPatientList(response.data);
  };
  useEffect(() => {
    fetchPatients();
  }, []);
  return (
    <ScrollView style={{ flex: 1, marginHorizontal: 20, marginVertical: 40 }}>
      {patientList.map((patient: any, index: number) => (
        <TouchableRipple
          rippleColor={theme.colors.primary + "CC"}
          onPress={() => {
            setPatient(patient);
            navigation.navigate("patient", { patient });
          }}
          style={styles.card}
          key={index}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.cardImage}
              source={require("../../../../../../../assets/paciente.png")}
            />
            <Text
              style={{ fontSize: 30, fontWeight: "bold", alignSelf: "center" }}
            >
              {patient.name}
            </Text>
          </View>
        </TouchableRipple>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 30,
    margin: 10,
    borderRadius: 20,
    elevation: 5,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  cardImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
