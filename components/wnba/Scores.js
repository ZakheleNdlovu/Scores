import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

const Scores = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/scoreboard')
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
        <View >
            <FlatList data={data} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => {
                if (item.competitions[0].attendance === 0) {
                    return (
                        <View style={{ paddingBottom: 5 }}>
                            <View style={styles.view}>
                                <View style={styles.innerview}>
                                    <Text style={styles.header}>{item.name}</Text>
                                    <Text>{item.competitions[0].venue.fullName}</Text>
                                    <Text>{item.shortName}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: 200 }}>
                                    <View style={{ alignItems: 'center' }}>

                                        <Text style={styles.teamname}>{item.competitions[0].competitors[1].team.name}</Text>
                                        <View style={styles.scorebox}>
                                            <Text style={styles.score}>-</Text>
                                        </View>
                                    </View>
                                    <View style={{ padding: 10 }}>
                                        <Text>VS</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={styles.teamname}>{item.competitions[0].competitors[0].team.name}</Text>
                                        <View style={styles.scorebox}>
                                            <Text style={styles.score}>-</Text>
                                        </View>

                                    </View>


                                </View>
                                <View style={{ width: 330, alignItems: 'center ' }}>
                                    <Text>{item.competitions[0].status.type.detail}</Text>
                                    <Text>{item.season.year}  {item.season.slug}</Text>
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
                                    <Text>{item.competitions[0].venue.fullName}</Text>
                                    <Text>{item.shortName}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: 200 }}>
                                    <View style={{ alignItems: 'center' }}>

                                        <Text style={styles.teamname}>{item.competitions[0].competitors[1].team.name}</Text>
                                        <View style={styles.scorebox}>
                                            <Text style={styles.score}>{item.competitions[0].competitors[1].score}</Text>
                                        </View>
                                    </View>
                                    <View style={{ padding: 10 }}>
                                        <Text>VS</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={styles.teamname}>{item.competitions[0].competitors[0].team.name}</Text>
                                        <View style={styles.scorebox}>
                                            <Text style={styles.score}>{item.competitions[0].competitors[0].score}</Text>
                                        </View>

                                    </View>


                                </View>
                                <View style={{ height: 30 }}>
                                    <Text >{item.competitions[0].status.displayClock}</Text>
                                </View>


                            </View>
                        </View>
                    )
                }
            }} />

        </View>
    )
}

export default Scores

const styles = StyleSheet.create({
    view: {
        width: 357,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center'

    },
    innerview: {
        alignItems: 'center'
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
    }
})