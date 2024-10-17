import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const NCAAGameLeaders = ({ route }) => {

    return (
        <View>
            <View style={{ alignItems: 'center', width: 357 }}>

                <View style={styles.statheader}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Points</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 170, alignItems: 'center' }}>
                        <Image source={{ uri: route.params.mame.competitions[0].competitors[1].leaders[0].leaders[0].athlete.headshot }} width={50} height={50} borderRadius={50} />
                        <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[1].leaders[0].leaders[0].athlete.fullName} </Text>
                        <Text>Points: {route.params.mame.competitions[0].competitors[1].leaders[0].leaders[0].value}</Text>
                    </View>
                    <View style={{ width: 170, alignItems: 'center' }}>
                        <Image source={{ uri: route.params.mame.competitions[0].competitors[0].leaders[0].leaders[0].athlete.headshot }} width={50} height={50} borderRadius={50} />
                        <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[0].leaders[0].leaders[0].athlete.fullName} </Text>
                        <Text>Points: {route.params.mame.competitions[0].competitors[0].leaders[0].leaders[0].value}</Text>
                    </View>
                </View>
                <View style={styles.statheader}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Rebounds</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 165, alignItems: 'center' }}>
                        <Image source={{ uri: route.params.mame.competitions[0].competitors[1].leaders[1].leaders[0].athlete.headshot }} width={50} height={50} borderRadius={50} />
                        <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[1].leaders[1].leaders[0].athlete.fullName} </Text>
                        <Text>Rebounds: {route.params.mame.competitions[0].competitors[1].leaders[1].leaders[0].value}</Text>
                    </View>
                    <View style={{ width: 165, alignItems: 'center' }}>
                        <Image source={{ uri: route.params.mame.competitions[0].competitors[0].leaders[1].leaders[0].athlete.headshot }} width={50} height={50} borderRadius={50} />
                        <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[0].leaders[1].leaders[0].athlete.fullName} </Text>
                        <Text>Rebounds: {route.params.mame.competitions[0].competitors[0].leaders[1].leaders[0].value}</Text>
                    </View>
                </View>
                <View style={styles.statheader}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Assists</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 165, alignItems: 'center' }}>
                        <Image source={{ uri: route.params.mame.competitions[0].competitors[1].leaders[2].leaders[0].athlete.headshot }} width={50} height={50} borderRadius={50} />
                        <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[1].leaders[2].leaders[0].athlete.fullName} </Text>
                        <Text>Assists: {route.params.mame.competitions[0].competitors[1].leaders[2].leaders[0].value}</Text>
                    </View>
                    <View style={{ width: 165, alignItems: 'center' }}>
                        <Image source={{ uri: route.params.mame.competitions[0].competitors[0].leaders[2].leaders[0].athlete.headshot }} width={50} height={50} borderRadius={50} />
                        <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[0].leaders[2].leaders[0].athlete.fullName} </Text>
                        <Text>Assists: {route.params.mame.competitions[0].competitors[0].leaders[2].leaders[0].value}</Text>
                    </View>
                </View>
                <View style={styles.statheader}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Rating</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 165, alignItems: 'center' }}>
                        <Image source={{ uri: route.params.mame.competitions[0].competitors[1].leaders[3].leaders[0].athlete.headshot }} width={50} height={50} borderRadius={50} />
                        <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[1].leaders[3].leaders[0].athlete.fullName} </Text>
                        <Text>Rating: {route.params.mame.competitions[0].competitors[1].leaders[3].leaders[0].value.toFixed(2)}</Text>
                    </View>
                    <View style={{ width: 165, alignItems: 'center' }}>
                        <Image source={{ uri: route.params.mame.competitions[0].competitors[0].leaders[3].leaders[0].athlete.headshot }} width={50} height={50} borderRadius={50} />
                        <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[0].leaders[3].leaders[0].athlete.fullName} </Text>
                        <Text>Rating: {route.params.mame.competitions[0].competitors[0].leaders[3].leaders[0].value.toFixed(2)}</Text>
                    </View>
                </View>

            </View>
        </View>
    )


}

export default NCAAGameLeaders

const styles = StyleSheet.create({
    box: {
        width: 357,
        height: 150,
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: 'black',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        borderRadius: 5,
        flexDirection: 'column',
        padding: 5,
        justifyContent: 'space-evenly'
    },
    homeTeam: {
        flexDirection: 'row',
        width: 357,
        alignItems: 'flex-start',
        paddingLeft: 10,

    },
    homeTeamText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    homeTeamText1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red'
    },
    teams: {
        width: 163,
        alignItems: 'center'
    },
    score: {
        backgroundColor: 'black',
        color: 'white',
        padding: 5,
        height: 35,
        width: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    leaders: {
        width: 177,
        paddingLeft: 5,
        alignItems: 'center'
    },
    leaders1: {
        width: 177,
        paddingRight: 5,
        alignItems: 'center'
    },
    statheader: {
        width: 357,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        borderRadius: 5
    }
})