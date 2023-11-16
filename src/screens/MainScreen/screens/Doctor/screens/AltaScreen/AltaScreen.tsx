import { View, Text } from "react-native";
import React from "react";
import { useUserStore } from "../../../../../../state/userState";
import { TextInput } from "react-native-paper";

export default function AltaScreen() {
  const user = useUserStore((state) => state.user);

  const [form, setForm] = React.useState({
    doctorId: user.id,
  });
  console.log(user.id);
  return (
    <View>
      <TextInput label={"Nombre"} onChangeText={() => {}} />
    </View>
  );
}
