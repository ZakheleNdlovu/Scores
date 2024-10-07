import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const LeagueNav = ({ state, setState }) => {
    return (
        <View style={styles.header}>
            <View style={styles.text}>
                <TouchableOpacity onPress={() => setState(state = 1)}>
                    <Text >NFL</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.text}>
                <TouchableOpacity onPress={() => setState(state = 2)}>
                    <Text >NCAA</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default LeagueNav

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: 357,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 17,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        width: 178,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        borderRadius: 5
    }
})