import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const NavigateL = ({ state, setState }) => {

    return (
        <View style={styles.navbar}>
            <View style={styles.box}>
                <TouchableOpacity onPress={() => setState(state = 0)}>
                    <Text>Headlines</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                <TouchableOpacity onPress={() => setState(state = 2)}>
                    <Text>Games</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                <TouchableOpacity onPress={() => setState(state = 3)}>
                    <Text>Standings</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                <TouchableOpacity onPress={() => setState(state = 4)}>
                    <Text>Teams</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default NavigateL

const styles = StyleSheet.create({
    navbar: {
        height: 30,
        width: 359,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderStyle: 'solid',

        borderRadius: 5,

    },
    box: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        width: 88,
        height: 28,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue'
    }
})