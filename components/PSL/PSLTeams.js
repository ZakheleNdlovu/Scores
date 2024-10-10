import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const PSLTeams = () => {

    const [teams, setTeams] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(function () {

        const getTeams = async function () {
            try {
                const response = await fetch('http://site.api.espn.com/apis/site/v2/sports/soccer/rsa.1/teams')
                const teamData = await response.json()
                setTeams(teamData.sports)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }

        }
        getTeams()
    }, [])

    if (loading) {
        return <Text>Loading...</Text>
    }

    if (error) {
        return <Text>Error: {error}</Text>
    }

    return (
        <View style={{ width: 359, alignItems: 'center' }}>
            <FlatList
                data={teams}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width: 359, alignItems: 'center' }}>
                            <View style={{ width: 360, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.leagues[0].name} Teams</Text>
                            </View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[0].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[0].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[1].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[1].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[2].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[2].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[3].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[3].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[4].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[4].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>

                                <View style={{ height: 50, justifyContent: 'center' }}>
                                    <Text>{item.leagues[0].teams[5].team.displayName}</Text>
                                </View>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[6].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[6].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[7].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[7].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[8].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[8].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[9].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[9].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>

                                <View style={{ height: 50, justifyContent: 'center' }}>
                                    <Text>{item.leagues[0].teams[10].team.displayName}</Text>
                                </View>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[11].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[11].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[12].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[12].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[13].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[13].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[14].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[14].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[15].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[15].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                        </View>
                    )
                }} />
        </View>
    )

}

export default PSLTeams

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        width: 357,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        backgroundColor: 'lightblue',
        borderRadius: 5
    }
})