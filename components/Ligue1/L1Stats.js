import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const LStats = ({ route }) => {

    if (route.params.mame.competitions[0].status.type.state === "pre") {
        return (
            <View>
                <View style={styles.box}>
                    <View style={styles.homeTeam}>
                        <View style={styles.teams}>

                            <Text style={styles.homeTeamText}>{route.params.mame.competitions[0].competitors[0].team.displayName}</Text>
                            <Image source={{ uri: route.params.mame.competitions[0].competitors[0].team.logo }} width={50} height={50} />
                            <View style={styles.score}>
                                <Text style={{ color: 'white', fontSize: 25 }}>{route.params.mame.competitions[0].competitors[0].score}</Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'flex-end', height: 100 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>VS</Text>
                        </View>
                        <View style={styles.teams}>
                            <Text style={styles.homeTeamText}>{route.params.mame.competitions[0].competitors[1].team.displayName}</Text>
                            <Image source={{ uri: route.params.mame.competitions[0].competitors[1].team.logo }} width={50} height={50} />
                            <View style={styles.score}>
                                <Text style={{ color: 'white', fontSize: 25 }}>{route.params.mame.competitions[0].competitors[1].score}</Text>
                            </View>
                        </View>

                    </View>

                </View>

                <View style={{ width: 357, alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Game Details</Text>
                    <Text style={{ fontSize: 20 }}>{route.params.mame.competitions[0].venue.fullName}</Text>
                    <Text>{route.params.mame.competitions[0].status.type.description}</Text>
                    <Text>{route.params.mame.competitions[0].status.type.detail}</Text>
                    <View style={{ height: 25 }}></View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Leaders</Text>
                    <View style={{ width: 357, flexDirection: 'row' }}>

                        <View style={styles.leaders}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{route.params.mame.competitions[0].competitors[0].leaders[0].displayName}</Text>
                            <Text style={{ fontSize: 20 }}>{route.params.mame.competitions[0].competitors[0].leaders[0].leaders[0].athlete.displayName} :
                                {route.params.mame.competitions[0].competitors[0].leaders[0].leaders[0].value}
                            </Text>

                        </View>
                        <View style={styles.leaders1}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{route.params.mame.competitions[0].competitors[1].leaders[0].displayName}</Text>
                            <Text style={{ fontSize: 20 }}>{route.params.mame.competitions[0].competitors[1].leaders[0].leaders[0].athlete.displayName} :
                                {route.params.mame.competitions[0].competitors[1].leaders[0].leaders[0].value}
                            </Text>

                        </View>
                    </View>

                </View>
            </View>
        )
    }
    else if (route.params.mame.competitions[0].status.type.state === "post") {
        return (
            <View>
                <View style={styles.box}>
                    <View style={styles.homeTeam}>
                        <View style={styles.teams}>

                            <Text style={styles.homeTeamText}>{route.params.mame.competitions[0].competitors[0].team.displayName}</Text>
                            <Image source={{ uri: route.params.mame.competitions[0].competitors[0].team.logo }} width={50} height={50} />
                            <View style={styles.score}>
                                <Text style={{ color: 'white', fontSize: 25 }}>{route.params.mame.competitions[0].competitors[0].score}</Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'flex-end', height: 100 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>VS</Text>
                        </View>
                        <View style={styles.teams}>
                            <Text style={styles.homeTeamText}>{route.params.mame.competitions[0].competitors[1].team.displayName}</Text>
                            <Image source={{ uri: route.params.mame.competitions[0].competitors[1].team.logo }} width={50} height={50} />
                            <View style={styles.score}>
                                <Text style={{ color: 'white', fontSize: 25 }}>{route.params.mame.competitions[0].competitors[1].score}</Text>
                            </View>
                        </View>

                    </View>

                </View>


                <View style={{ width: 357, alignItems: 'center' }}>
                    <Text>{route.params.mame.competitions[0].status.type.description}</Text>
                    <Text>{route.params.mame.competitions[0].venue.fullName}, {route.params.mame.competitions[0].venue.address.city}</Text>

                    <Text style={{ fontSize: 17 }}>Ball Possession</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.leaders}>
                            <Text>{route.params.mame.competitions[0].competitors[0].statistics[4].displayValue}%</Text>

                        </View>
                        <View style={styles.leaders1}>
                            <Text>{route.params.mame.competitions[0].competitors[1].statistics[4].displayValue}%</Text>

                        </View>
                    </View>
                    <Text style={{ fontSize: 17 }}>Shorts on target</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.leaders}>
                            <Text>{route.params.mame.competitions[0].competitors[0].statistics[6].displayValue}</Text>

                        </View>
                        <View style={styles.leaders1}>
                            <Text>{route.params.mame.competitions[0].competitors[1].statistics[6].displayValue}</Text>

                        </View>
                    </View>
                    <Text style={{ fontSize: 17 }}>Total Shots</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.leaders}>
                            <Text>{route.params.mame.competitions[0].competitors[0].statistics[8].displayValue}</Text>

                        </View>
                        <View style={styles.leaders1}>
                            <Text>{route.params.mame.competitions[0].competitors[1].statistics[8].displayValue}</Text>

                        </View>
                    </View>
                    <Text style={{ fontSize: 17 }}>Fouls</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.leaders}>
                            <Text>{route.params.mame.competitions[0].competitors[0].statistics[1].displayValue}</Text>

                        </View>
                        <View style={styles.leaders1}>
                            <Text>{route.params.mame.competitions[0].competitors[1].statistics[1].displayValue}</Text>

                        </View>
                    </View>


                    <Text style={{ fontSize: 17 }}>Form</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.leaders}>
                            <Text>{route.params.mame.competitions[0].competitors[0].form}</Text>

                        </View>
                        <View style={styles.leaders1}>
                            <Text>{route.params.mame.competitions[0].competitors[1].form}</Text>

                        </View>
                    </View>
                    <Text style={{ fontSize: 19 }}>Match events</Text>
                    <View style={{ flexDirection: 'column' }}>

                        <Text>{route.params.mame.competitions[0].details[0].athletesInvolved[0].displayName}
                            ({route.params.mame.competitions[0].details[0].type.text})
                            - {route.params.mame.competitions[0].details[0].clock.displayValue}
                        </Text>
                        <View style={{ height: 4 }}></View>
                        <Text>{route.params.mame.competitions[0].details[1].athletesInvolved[0].displayName}
                            ({route.params.mame.competitions[0].details[1].type.text})
                            - {route.params.mame.competitions[0].details[1].clock.displayValue}
                        </Text>
                        <View style={{ height: 4 }}></View>
                        <Text>{route.params.mame.competitions[0].details[2].athletesInvolved[0].displayName}
                            ({route.params.mame.competitions[0].details[2].type.text})
                            - {route.params.mame.competitions[0].details[2].clock.displayValue}
                        </Text>
                        <View style={{ height: 4 }}></View>
                        <Text>{route.params.mame.competitions[0].details[3].athletesInvolved[0].displayName}
                            ({route.params.mame.competitions[0].details[3].type.text})
                            - {route.params.mame.competitions[0].details[3].clock.displayValue}
                        </Text>


                    </View>
                </View>

            </View>

        )
    }


}

export default LStats

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
        flexDirection: 'row',
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
        width: 35,
        alignItems: 'center',
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
    }
})