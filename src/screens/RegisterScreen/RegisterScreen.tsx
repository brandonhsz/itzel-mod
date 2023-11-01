import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

export default function RegisterScreen() {
    return (
        <View>
            <TextInput label='Nombre' mode='outlined' />
        </View>
    )
}

// const style = StyleSheet.create({
//     container
// })