import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const BasketballNav = ({ state, setState }) => {
    return (
        <View>
            <View style={styles.header}>
                <View style={styles.text}>
                    <TouchableOpacity onPress={() => setState(state = 1)}>
                        <Text >NBA</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.text}>
                    <TouchableOpacity onPress={() => setState(state = 2)}>
                        <Text >WNBA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default BasketballNav

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: 359,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'scroll',
        backgroundColor: 'lightblue'
    },
    text: {
        fontSize: 17,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'lightblue',
        width: 179,
        height: 25,
        justifyContent: 'center',

        alignItems: 'center',
        backgroundColor: 'lightgreen',
        borderRadius: 5,

    },
    text1: {
        fontSize: 17,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'lightblue',
        width: 89,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgreen',
        borderRadius: 5
    }
})