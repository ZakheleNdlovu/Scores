import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'


const Home = ({ state, setState }) => {

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => setState(state = 1)}>
                <View style={styles.box}><Text style={styles.text}>NFL</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setState(state = 2)}>
                <View style={styles.box}><Text style={styles.text}>NBA</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setState(state = 3)}>
                <View style={styles.box}><Text style={styles.text}>WNBA</Text></View>
            </TouchableOpacity>
        </View>
    )

}

export default Home

const styles = StyleSheet.create({
    header: {
        height: 60,
        flexDirection: 'row',
        width: 360,
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        backgroundColor: 'tomato'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    box: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        width: 118,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    }
})