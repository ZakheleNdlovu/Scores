import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

const NBATeams = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getTeams = async () => {
            try {
                const response = await fetch('http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams')
                const teams = await response.json()
                setData(teams.sports)
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
        return (
            <Text>Loading...</Text>
        )
    }

    if (error) {
        return (
            <Text>Error: {error}</Text>
        )
    }

    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width: 359, alignItems: 'center' }}>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.leagues[0].name}</Text>
                            </View>
                            <View style={{ height: 10 }}></View>
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
                                <Image source={{ uri: item.leagues[0].teams[5].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[5].team.displayName}</Text>
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
                                <Image source={{ uri: item.leagues[0].teams[10].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[10].team.displayName}</Text>
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
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[16].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[16].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[17].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[17].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[18].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[18].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[19].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[19].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[20].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[20].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[21].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[21].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[22].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[22].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[23].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[23].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[24].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[24].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[25].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[25].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[26].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[26].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[27].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[27].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[28].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[28].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>
                            <View style={styles.row}>
                                <Image source={{ uri: item.leagues[0].teams[29].team.logos[0].href }} width={50} height={50} />
                                <View style={{ width: 20 }}></View>
                                <Text>{item.leagues[0].teams[29].team.displayName}</Text>
                            </View>
                            <View style={{ height: 3 }}></View>



                        </View>
                    )
                }} />
        </View>
    )
}

export default NBATeams

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