import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

const GamesStatsNFL = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('http://site.api.espn.com/apis/site/v2/sports/basketball/wnba/scoreboard')
                const data = await response.json()
                setData(data.events)

            }
            catch (error) {
                setError(error.token)
            }
            finally {
                setLoading(false)
            }
        }
        getData()
    }, [])

    if (loading) {
        return <Text>loading...</Text>
    }

    if (error) {
        return <Text>error:{error}</Text>
    }
    return (
        <View style={{ paddingBottom: 10 }}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => {
                    if (item.competitions[0].attendance === 0) {
                        return (
                            <View style={{ paddingBottom: 5 }}>
                                <View style={styles.view}>
                                    <View style={styles.innerview}>
                                        <Text style={styles.header}>{item.name}</Text>


                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: 200 }}>
                                        <View style={{ alignItems: 'center' }}>

                                            <Text style={styles.teamname}>{item.competitions[0].competitors[1].team.shortDisplayName}</Text>
                                            <Image source={{ uri: item.competitions[0].competitors[1].team.logo }} width={50} height={50} />
                                            <View style={styles.scorebox}>
                                                <Text style={styles.score}>{item.competitions[0].competitors[1].score}</Text>
                                            </View>
                                        </View>
                                        <View style={{ padding: 10 }}>
                                            <Text>VS</Text>
                                        </View>
                                        <View style={{ alignItems: 'center' }}>
                                            <View >
                                                <Text style={styles.teamname}>{item.competitions[0].competitors[0].team.shortDisplayName}</Text>
                                                <Image source={{ uri: item.competitions[0].competitors[0].team.logo }} width={50} height={50} />
                                            </View>
                                            <View style={styles.scorebox}>
                                                <Text style={styles.score}>{item.competitions[0].competitors[0].score}</Text>
                                            </View>


                                        </View>


                                    </View>
                                    <View style={{ width: 330, alignItems: 'center', justifyContent: 'center' }}>


                                    </View>

                                    <View>
                                        <Text style={{ fontSize: 20 }}>Leaders</Text>

                                    </View>
                                    <View style={styles.goalLeaders}>
                                        <View style={styles.statsBox1}>
                                            <Text style={styles.playerHeader}>{item.competitions[0].competitors[1].leaders[0].leaders[0].athlete.displayName}</Text>
                                            <Text>No: {item.competitions[0].competitors[1].leaders[0].leaders[0].athlete.jersey}</Text>
                                            <Text>Position: {item.competitions[0].competitors[1].leaders[0].leaders[0].athlete.position.abbreviation}</Text>
                                            <Text>{item.competitions[0].competitors[1].leaders[0].displayName}</Text>
                                            <Text>{item.competitions[0].competitors[1].leaders[0].leaders[0].value}</Text>
                                        </View>
                                        <View style={styles.statsBox1}>
                                            <Text style={styles.playerHeader}>{item.competitions[0].competitors[0].leaders[0].leaders[0].athlete.displayName}</Text>
                                            <Text>No: {item.competitions[0].competitors[0].leaders[0].leaders[0].athlete.jersey}</Text>
                                            <Text>Position: {item.competitions[0].competitors[0].leaders[0].leaders[0].athlete.position.abbreviation}</Text>
                                            <Text>{item.competitions[0].competitors[0].leaders[0].displayName}</Text>
                                            <Text>{item.competitions[0].competitors[0].leaders[0].leaders[0].value}</Text>

                                        </View>

                                    </View>
                                </View>

                            </View>
                        )
                    }
                    else {
                        return (
                            <View style={{ paddingBottom: 5 }}>
                                <View style={styles.view}>
                                    <View style={styles.innerview}>
                                        <Text style={styles.header}>{item.name}</Text>


                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: 200 }}>
                                        <View style={{ alignItems: 'center' }}>

                                            <Text style={styles.teamname}>{item.competitions[0].competitors[1].team.shortDisplayName}</Text>
                                            <Image source={{ uri: item.competitions[0].competitors[1].team.logo }} width={50} height={50} />
                                            <View style={styles.scorebox}>
                                                <Text style={styles.score}>{item.competitions[0].competitors[1].score}</Text>
                                            </View>
                                        </View>
                                        <View style={{ padding: 10 }}>
                                            <Text>VS</Text>
                                        </View>
                                        <View style={{ alignItems: 'center' }}>
                                            <View >
                                                <Text style={styles.teamname}>{item.competitions[0].competitors[0].team.shortDisplayName}</Text>
                                                <Image source={{ uri: item.competitions[0].competitors[0].team.logo }} width={50} height={50} />
                                            </View>
                                            <View style={styles.scorebox}>
                                                <Text style={styles.score}>{item.competitions[0].competitors[0].score}</Text>
                                            </View>


                                        </View>


                                    </View>
                                    <View style={{ width: 330, alignItems: 'center', justifyContent: 'center' }}>


                                    </View>

                                    <View style={{ width: 330, alignItems: 'center' }}>

                                        <Text>{item.competitions[0].status.type.detail}</Text>
                                        <Text style={styles.header}>{item.competitions[0].notes[0].headline}</Text>
                                        <Text style={{ textDecorationLine: 'underline', fontSize: 17 }}>{item.competitions[0].series.summary}</Text>
                                    </View>
                                    <View style={styles.goalLeaders}>

                                        <View>
                                            <Text>{item.competitions[0].headlines[0].type}</Text>

                                        </View>
                                        <View style={styles.statsBox}>
                                            <Text style={{ fontSize: 20 }}>{item.competitions[0].headlines[0].video[0].headline}</Text>
                                            <Text>{item.competitions[0].headlines[0].description}</Text>
                                            <View style={styles.statsBox1}>
                                                <Text style={styles.header}>Leaders ({item.competitions[0].competitors[0].team.shortDisplayName})</Text>
                                            </View>
                                            <View style={{ width: 340, flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text>Points</Text>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: 150 }}>
                                                    <Text>{item.competitions[0].competitors[0].leaders[0].leaders[0].athlete.displayName}

                                                    </Text>
                                                    <Text>({item.competitions[0].competitors[0].leaders[0].leaders[0].displayValue})</Text>
                                                </View>
                                            </View>
                                            <View style={{ width: 340, flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text>Rebounds</Text>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: 150 }}>
                                                    <Text>{item.competitions[0].competitors[0].leaders[1].leaders[0].athlete.displayName}

                                                    </Text>
                                                    <Text>({item.competitions[0].competitors[0].leaders[1].leaders[0].displayValue})</Text>
                                                </View>
                                            </View>
                                            <View style={{ width: 340, flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text>Assists</Text>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: 150 }}>
                                                    <Text>{item.competitions[0].competitors[0].leaders[2].leaders[0].athlete.displayName}

                                                    </Text>
                                                    <Text>({item.competitions[0].competitors[0].leaders[2].leaders[0].displayValue})</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={styles.statsBox}>

                                            <View style={styles.statsBox1}>
                                                <Text style={styles.header}>Leaders ({item.competitions[0].competitors[1].team.shortDisplayName})</Text>
                                            </View>
                                            <View style={{ width: 340, flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text>Points</Text>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: 150 }}>
                                                    <Text>{item.competitions[0].competitors[1].leaders[0].leaders[0].athlete.displayName}

                                                    </Text>
                                                    <Text>({item.competitions[0].competitors[1].leaders[0].leaders[0].displayValue})</Text>
                                                </View>
                                            </View>
                                            <View style={{ width: 340, flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text>Rebounds</Text>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: 150 }}>
                                                    <Text>{item.competitions[0].competitors[1].leaders[1].leaders[0].athlete.displayName}

                                                    </Text>
                                                    <Text>({item.competitions[0].competitors[1].leaders[1].leaders[0].displayValue})</Text>
                                                </View>
                                            </View>
                                            <View style={{ width: 340, flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text>Assists</Text>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: 150 }}>
                                                    <Text>{item.competitions[0].competitors[1].leaders[2].leaders[0].athlete.displayName}

                                                    </Text>
                                                    <Text>({item.competitions[0].competitors[1].leaders[2].leaders[0].displayValue})</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                            </View>
                        )
                    }
                }} />

        </View>
    )
}

export default GamesStatsNFL

const styles = StyleSheet.create({
    view: {
        width: 357,
        alignItems: 'center',
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 6, justifyContent: 'center'

    },
    innerview: {
        alignItems: 'center',
        width: 340,


    },
    header: {
        fontSize: 20
    },
    teamname: {
        fontSize: 17
    },
    scorebox: {
        width: 30,
        height: 30,
        alignItems: 'center',
        backgroundColor: 'lightgray',
        justifyContent: 'center',
    },
    score: {
        fontSize: 18
    },
    gameclock: {
        height: 40
    },
    goalLeaders: {
        width: 340,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    statsBox: {
        width: 345,

    },
    statsBox1: {
        width: 345,
        alignItems: 'center',

    },
    playerHeader: {
        fontSize: 20,

    }
})