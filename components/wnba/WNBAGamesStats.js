import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const WNBAGameStats = ({ route }) => {

    if (route.params.mame.competitions[0].status.type.state === "pre") {
        return (
            <View>
                <View style={styles.box}>
                    <Text>{route.params.mame.name}</Text>
                    <View style={styles.homeTeam}>
                        <View style={styles.teams}>
                            <Text style={styles.homeTeamText}>{route.params.mame.competitions[0].competitors[1].team.displayName}</Text>
                            <Image source={{ uri: route.params.mame.competitions[0].competitors[1].team.logo }} width={50} height={50} />
                            <View style={styles.score}>
                                <Text style={{ color: 'white', fontSize: 25 }}>{route.params.mame.competitions[0].competitors[0].score}</Text>
                            </View>
                        </View>

                        <View style={styles.teams}>
                            <Text style={styles.homeTeamText}>{route.params.mame.competitions[0].competitors[0].team.displayName}</Text>
                            <Image source={{ uri: route.params.mame.competitions[0].competitors[0].team.logo }} width={50} height={50} />
                            <View style={styles.score}>
                                <Text style={{ color: 'white', fontSize: 25 }}>{route.params.mame.competitions[0].competitors[0].score}</Text>
                            </View>
                        </View>
                        <View>

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
                    <Text>{route.params.mame.name}</Text>
                    <View style={styles.homeTeam}>
                        <View style={styles.teams}>
                            <Text style={styles.homeTeamText}>{route.params.mame.competitions[0].competitors[1].team.displayName}</Text>
                            <Image source={{ uri: route.params.mame.competitions[0].competitors[1].team.logo }} width={50} height={50} />
                            <View style={styles.score}>
                                <Text style={{ color: 'white', fontSize: 25 }}>{route.params.mame.competitions[0].competitors[0].score}</Text>
                            </View>
                        </View>

                        <View style={styles.teams}>
                            <Text style={styles.homeTeamText}>{route.params.mame.competitions[0].competitors[0].team.displayName}</Text>
                            <Image source={{ uri: route.params.mame.competitions[0].competitors[0].team.logo }} width={50} height={50} />
                            <View style={styles.score}>
                                <Text style={{ color: 'white', fontSize: 25 }}>{route.params.mame.competitions[0].competitors[1].score}</Text>
                            </View>
                        </View>

                    </View>
                    <View>
                        <Text style={{ fontSize: 16 }}>{route.params.mame.competitions[0].status.type.shortDetail}</Text>
                    </View>
                </View>
            </View>

        )
    }
    else if (route.params.mame.competitions[0].status.type.description === "In Progress") {
        return (
            <View>
                <View style={styles.box}>
                    <Text>{route.params.mame.name}</Text>
                    <View style={styles.homeTeam}>
                        <View style={styles.teams}>
                            <Text style={styles.homeTeamText}>{route.params.mame.competitions[0].competitors[1].team.displayName}</Text>
                            <Image source={{ uri: route.params.mame.competitions[0].competitors[1].team.logo }} width={50} height={50} />
                            <View style={styles.score}>
                                <Text style={{ color: 'white', fontSize: 25 }}>{route.params.mame.competitions[0].competitors[0].score}</Text>
                            </View>
                        </View>

                        <View style={styles.teams}>
                            <Text style={styles.homeTeamText}>{route.params.mame.competitions[0].competitors[0].team.displayName}</Text>
                            <Image source={{ uri: route.params.mame.competitions[0].competitors[0].team.logo }} width={50} height={50} />
                            <View style={styles.score}>
                                <Text style={{ color: 'white', fontSize: 25 }}>{route.params.mame.competitions[0].competitors[1].score}</Text>
                            </View>
                        </View>

                    </View>
                    <View>
                        <Text style={{ fontSize: 16 }}>{route.params.mame.competitions[0].status.type.shortDetail}</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center', width: 357 }}>
                    <View >
                        <Text style={{ fontSize: 20 }}>Leaders</Text>

                    </View>
                    <View style={styles.statheader}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Points</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 165, paddingLeft: 10 }}>
                            <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[1].leaders[0].leaders[0].athlete.fullName} ({route.params.mame.competitions[0].competitors[1].leaders[0].leaders[0].value})</Text>
                        </View>
                        <View style={{ width: 165, alignItems: 'flex-end', paddingRight: 10 }}>
                            <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[0].leaders[0].leaders[0].athlete.fullName} ({route.params.mame.competitions[0].competitors[0].leaders[0].leaders[0].value})</Text>
                        </View>
                    </View>
                    <View style={styles.statheader}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Rebounds</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 165, paddingLeft: 10 }}>
                            <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[1].leaders[1].leaders[0].athlete.fullName} ({route.params.mame.competitions[0].competitors[1].leaders[1].leaders[0].value})</Text>
                        </View>
                        <View style={{ width: 165, alignItems: 'flex-end', paddingRight: 10 }}>
                            <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[0].leaders[1].leaders[0].athlete.fullName} ({route.params.mame.competitions[0].competitors[0].leaders[1].leaders[0].value})</Text>
                        </View>
                    </View>
                    <View style={styles.statheader}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Assists</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 165, paddingLeft: 10 }}>
                            <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[1].leaders[2].leaders[0].athlete.fullName} ({route.params.mame.competitions[0].competitors[1].leaders[2].leaders[0].value})</Text>
                        </View>
                        <View style={{ width: 165, alignItems: 'flex-end', paddingRight: 10 }}>
                            <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[0].leaders[2].leaders[0].athlete.fullName} ({route.params.mame.competitions[0].competitors[0].leaders[2].leaders[0].value})</Text>
                        </View>
                    </View>
                    <View style={styles.statheader}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Rating</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 165, paddingLeft: 10 }}>
                            <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[1].leaders[3].leaders[0].athlete.fullName} ({route.params.mame.competitions[0].competitors[1].leaders[3].leaders[0].value.toFixed(2)})</Text>
                        </View>
                        <View style={{ width: 165, alignItems: 'flex-end', paddingRight: 10 }}>
                            <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[0].leaders[3].leaders[0].athlete.fullName} ({route.params.mame.competitions[0].competitors[0].leaders[3].leaders[0].value.toFixed(2)})</Text>
                        </View>
                    </View>

                </View>

            </View>
        )
    }
    else if (route.params.mame.competitions[0].status.type.description === "Halftime") {
        return (
            <View>
                <View style={styles.box}>
                    <Text>{route.params.mame.name}</Text>
                    <View style={styles.homeTeam}>
                        <View style={styles.teams}>
                            <Text style={styles.homeTeamText}>{route.params.mame.competitions[0].competitors[1].team.displayName}</Text>
                            <Image source={{ uri: route.params.mame.competitions[0].competitors[1].team.logo }} width={50} height={50} />
                            <View style={styles.score}>
                                <Text style={{ color: 'white', fontSize: 25 }}>{route.params.mame.competitions[0].competitors[0].score}</Text>
                            </View>
                        </View>

                        <View style={styles.teams}>
                            <Text style={styles.homeTeamText}>{route.params.mame.competitions[0].competitors[0].team.displayName}</Text>
                            <Image source={{ uri: route.params.mame.competitions[0].competitors[0].team.logo }} width={50} height={50} />
                            <View style={styles.score}>
                                <Text style={{ color: 'white', fontSize: 25 }}>{route.params.mame.competitions[0].competitors[1].score}</Text>
                            </View>
                        </View>

                    </View>
                    <View>
                        <Text style={{ fontSize: 16 }}>{route.params.mame.competitions[0].status.type.shortDetail}</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center', width: 357 }}>
                    <View >
                        <Text style={{ fontSize: 20 }}>Leaders</Text>

                    </View>
                    <View style={styles.statheader}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Points</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 165, paddingLeft: 10 }}>
                            <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[1].leaders[0].leaders[0].athlete.fullName} ({route.params.mame.competitions[0].competitors[1].leaders[0].leaders[0].value})</Text>
                        </View>
                        <View style={{ width: 165, alignItems: 'flex-end', paddingRight: 10 }}>
                            <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[0].leaders[0].leaders[0].athlete.fullName} ({route.params.mame.competitions[0].competitors[0].leaders[0].leaders[0].value})</Text>
                        </View>
                    </View>
                    <View style={styles.statheader}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Rebounds</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 165, paddingLeft: 10 }}>
                            <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[1].leaders[1].leaders[0].athlete.fullName} ({route.params.mame.competitions[0].competitors[1].leaders[1].leaders[0].value})</Text>
                        </View>
                        <View style={{ width: 165, alignItems: 'flex-end', paddingRight: 10 }}>
                            <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[0].leaders[1].leaders[0].athlete.fullName} ({route.params.mame.competitions[0].competitors[0].leaders[1].leaders[0].value})</Text>
                        </View>
                    </View>
                    <View style={styles.statheader}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Assists</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 165, paddingLeft: 10 }}>
                            <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[1].leaders[2].leaders[0].athlete.fullName} ({route.params.mame.competitions[0].competitors[1].leaders[2].leaders[0].value})</Text>
                        </View>
                        <View style={{ width: 165, alignItems: 'flex-end', paddingRight: 10 }}>
                            <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[0].leaders[2].leaders[0].athlete.fullName} ({route.params.mame.competitions[0].competitors[0].leaders[2].leaders[0].value})</Text>
                        </View>
                    </View>
                    <View style={styles.statheader}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Rating</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 165, paddingLeft: 10 }}>
                            <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[1].leaders[3].leaders[0].athlete.fullName} ({route.params.mame.competitions[0].competitors[1].leaders[3].leaders[0].value.toFixed(2)})</Text>
                        </View>
                        <View style={{ width: 165, alignItems: 'flex-end', paddingRight: 10 }}>
                            <Text style={{ fontSize: 17 }}>{route.params.mame.competitions[0].competitors[0].leaders[3].leaders[0].athlete.fullName} ({route.params.mame.competitions[0].competitors[0].leaders[3].leaders[0].value.toFixed(2)})</Text>
                        </View>
                    </View>

                </View>

            </View>
        )
    }


}

export default WNBAGameStats

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
        width: 35,
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