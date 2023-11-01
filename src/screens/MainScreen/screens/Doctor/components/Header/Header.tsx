import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
    name: string
}

export default function Header({ name = 'Doctor' }: Props) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Buen Dia {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        borderBottomWidth: 1,
        padding: 15,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})