import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { TouchableRipple, useTheme } from 'react-native-paper'

export default function RecordScreen() {
    const patientList = [
        { name: 'Brandon', age: 23 },
        { name: 'Leo', age: 23 },
        { name: 'Itzel', age: 23 },
        { name: 'Meztle', age: 23 },
        { name: 'Brandon', age: 23 },
        { name: 'Leo', age: 23 },
    ]
    const theme = useTheme()
    return (
        <ScrollView style={{ flex: 1, marginHorizontal: 20, marginVertical: 40 }}>
            {patientList.map((patient, index) => (
                <TouchableRipple
                    rippleColor={theme.colors.primary + 'CC'}
                    onPress={() => { }}
                    style={styles.card} key={index}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.cardImage} source={require('../../../../../../../assets/paciente.png')} />
                        <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center' }}>{patient.name}</Text>
                    </View>
                </TouchableRipple>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 30,
        margin: 10,
        borderRadius: 20,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    cardImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },

})