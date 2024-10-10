import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const FootballNav = ({ state, setState }) => {
    return (
        <View>
            <View style={styles.header}>
                <View style={styles.text}>
                    <TouchableOpacity onPress={() => setState(state = 1)}>
                        <Text >EPL</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.text}>
                    <TouchableOpacity onPress={() => setState(state = 2)}>
                        <Text >LaLIGA</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.text}>
                    <TouchableOpacity onPress={() => setState(state = 3)}>
                        <Text >PSL</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.text}>
                    <TouchableOpacity onPress={() => setState(state = 4)}>
                        <Text >MLS</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.header}>
                <View style={styles.text1}>
                    <TouchableOpacity onPress={() => setState(state = 5)}>
                        <Text >Serie A</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.text1}>
                    <TouchableOpacity onPress={() => setState(state = 6)}>
                        <Text >Bundesliga</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.text1}>
                    <TouchableOpacity onPress={() => setState(state = 7)}>
                        <Text >Ligue 1</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.text1}>
                    <TouchableOpacity onPress={() => setState(state = 4)}>
                        <Text >UCL</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default FootballNav

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
        width: 89,
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