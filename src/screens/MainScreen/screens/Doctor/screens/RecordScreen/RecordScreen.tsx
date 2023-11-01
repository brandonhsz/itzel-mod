import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function RecordScreen() {
    const patientList = [
        { name: 'Brandon', age: 23 },
        { name: 'Leo', age: 23 },
        { name: 'Itzel', age: 23 },
        { name: 'Meztle', age: 23 },
    ]
    return (
        <View style={styles.container}>
            {patientList.map((patient, index) => (
                <View style={styles.card} key={index}>
                    <Text>{patient.name}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderWidth: 1,
        width: '50%',
        padding: 50,
        margin: 10,
        borderRadius: 20,
        elevation: 5,
        alignItems: 'center',
    },
    container: {
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
})