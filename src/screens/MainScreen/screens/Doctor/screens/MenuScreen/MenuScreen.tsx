import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function MenuScreen() {

    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('record')}>
                <Text>Expedientes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('alta')}>
                <Text>Altas</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    card: {
        backgroundColor: 'white',
        borderWidth: 1,
        width: '50%',
        padding: 50,
        margin: 10,
        borderRadius: 20,
        elevation: 5,
        alignItems: 'center',
    }
})