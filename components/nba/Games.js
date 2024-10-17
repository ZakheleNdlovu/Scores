import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const Games = ({ navigation }) => {

    const [games, setGames] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getGames = async () => {
            try {
                const response = await fetch('http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard')
                const games = await response.json()
                setGames(games.events)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        getGames()
    }, [])

    if (loading) {
        return (
            <View style={{ width: 350, height: 600, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Loading...</Text>
            </View>
        )
    }
    if (error) {
        return (
            <View style={{ width: 350, height: 600, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Error: {error}</Text>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={games}
                renderItem={({ item }) => {
                    if (item.competitions[0].status.type.state === 'post') {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Stats', { mame: item })}>
                                <View>
                                    <View style={styles.box}>
                                        <Text>{item.shortName}</Text>
                                        <View>
                                            <View style={styles.homeTeam}>
                                                <View style={{ width: 210, flexDirection: 'row', alignItems: 'center' }}>
                                                    <Image source={{ uri: item.competitions[0].competitors[1].team.logo }} width={30} height={30} />
                                                    <Text style={styles.homeTeamText}>{item.competitions[0].competitors[1].team.displayName}</Text>
                                                </View>
                                                <View style={{ width: 30 }}></View>
                                                <Text style={styles.homeTeamText}>{item.competitions[0].competitors[1].score}</Text>
                                            </View>
                                            <View style={styles.homeTeam}>
                                                <View style={{ width: 210, flexDirection: 'row', alignItems: 'center' }}>
                                                    <Image source={{ uri: item.competitions[0].competitors[0].team.logo }} width={30} height={30} />
                                                    <Text style={styles.homeTeamText}>{item.competitions[0].competitors[0].team.displayName}</Text>
                                                </View>
                                                <View style={{ width: 30 }}></View>
                                                <Text style={styles.homeTeamText}>{item.competitions[0].competitors[0].score}</Text>
                                                <View style={{ width: 20 }}></View>
                                                <Text>{item.competitions[0].status.type.detail}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ height: 2 }}></View>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                    else if (item.competitions[0].status.type.state === 'pre') {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Stats', { mame: item })}>
                                <View>
                                    <View style={styles.box}>
                                        <Text>{item.shortName}</Text>
                                        <View>
                                            <View style={styles.homeTeam}>
                                                <View style={{ width: 155, flexDirection: 'row', alignItems: 'center' }}>
                                                    <Image source={{ uri: item.competitions[0].competitors[1].team.logo }} width={30} height={30} />
                                                    <Text style={styles.homeTeamText}>{item.competitions[0].competitors[1].team.displayName}</Text>
                                                </View>
                                                <View style={{ width: 30 }}></View>
                                                <Text style={styles.homeTeamText}>{item.competitions[0].competitors[1].score}</Text>
                                            </View>
                                            <View style={styles.homeTeam}>
                                                <View style={{ width: 155, flexDirection: 'row', alignItems: 'center' }}>
                                                    <Image source={{ uri: item.competitions[0].competitors[0].team.logo }} width={30} height={30} />
                                                    <Text style={styles.homeTeamText}>{item.competitions[0].competitors[0].team.displayName}</Text>
                                                </View>
                                                <View style={{ width: 30 }}></View>
                                                <Text style={styles.homeTeamText}>{item.competitions[0].competitors[0].score}</Text>
                                                <View style={{ width: 20 }}></View>
                                                <Text>{item.competitions[0].status.type.detail.slice(5, 17)} {item.competitions[0].status.type.detail.slice(21, 32)}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ height: 2 }}></View>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                    else if (item.competitions[0].status.type.state === 'in') {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Stats', { mame: item })}>
                                <View>
                                    <View style={styles.box}>
                                        <Text>{item.shortName}</Text>
                                        <View>
                                            <View style={styles.homeTeam}>
                                                <View style={{ width: 170, flexDirection: 'row', alignItems: 'center' }}>
                                                    <Image source={{ uri: item.competitions[0].competitors[1].team.logo }} width={30} height={30} />
                                                    <Text style={styles.homeTeamText}>{item.competitions[0].competitors[1].team.displayName}</Text>
                                                </View>
                                                <View style={{ width: 30 }}></View>
                                                <Text style={styles.homeTeamText1}>{item.competitions[0].competitors[1].score}</Text>
                                            </View>
                                            <View style={styles.homeTeam}>
                                                <View style={{ width: 170, flexDirection: 'row', alignItems: 'center' }}>
                                                    <Image source={{ uri: item.competitions[0].competitors[0].team.logo }} width={30} height={30} />
                                                    <Text style={styles.homeTeamText}>{item.competitions[0].competitors[0].team.displayName}</Text>
                                                </View>
                                                <View style={{ width: 30 }}></View>
                                                <Text style={styles.homeTeamText1}>{item.competitions[0].competitors[0].score}</Text>
                                                <View style={{ width: 20 }}></View>
                                                <Text>{item.competitions[0].status.type.shortDetail}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ height: 2 }}></View>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                }} />
        </View>
    )
}

export default Games

const styles = StyleSheet.create({
    box: {
        width: 357,
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: 'black',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        borderRadius: 5
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
    }
})