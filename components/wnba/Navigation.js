import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Navigation = ({ state, setState }) => {

    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={() => setState(state = 0)}>
                <Text>Headlines</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setState(state = 2)}>
                <Text>Games</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Navigation

const styles = StyleSheet.create({
    navbar: {
        height: 40,
        width: 357,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5
    }
})