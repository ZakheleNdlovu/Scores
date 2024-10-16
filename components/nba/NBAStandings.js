import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'


const NBAStandings = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('https://site.web.api.espn.com/apis/v2/sports/basketball/nba/standings?season=2024')
                const standings = await response.json()
                setData(standings.children)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        getData()
    }, [])

    if (loading) {
        return <Text>Loading...</Text>
    }
    if (error) {
        return <Text>Error: {error}</Text>
    }

    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width: 360, alignItems: 'center' }}>
                            <View style={{ width: 357, alignItems: 'center' }}>
                                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{item.name}</Text>
                            </View>
                            <View style={styles.tableHeader}>

                                <Text>Team                                          W         L          S         PCT</Text>
                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[0].stats[8].value}</Text>
                                    </View>
                                    <View style={{ width: 97 }}>
                                        <Text>{item.standings.entries[0].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[0].stats[12].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[0].stats[7].value}</Text>
                                <View style={{ width: 24 }}></View>
                                <Text>{item.standings.entries[0].stats[10].displayValue}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[0].stats[11].value.toFixed(2)}%</Text>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[1].stats[8].value}</Text>
                                    </View>
                                    <View style={{ width: 97 }}>
                                        <Text>{item.standings.entries[1].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[1].stats[12].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[1].stats[7].value}</Text>
                                <View style={{ width: 24 }}></View>
                                <Text>{item.standings.entries[1].stats[10].displayValue}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[1].stats[11].value.toFixed(2)}%</Text>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[2].stats[8].value}</Text>
                                    </View>
                                    <View style={{ width: 97 }}>
                                        <Text>{item.standings.entries[2].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[2].stats[12].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[2].stats[7].value}</Text>
                                <View style={{ width: 24 }}></View>
                                <Text>{item.standings.entries[2].stats[10].displayValue}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[2].stats[11].value.toFixed(2)}%</Text>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[3].stats[8].value}</Text>
                                    </View>
                                    <View style={{ width: 97 }}>
                                        <Text>{item.standings.entries[3].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[3].stats[12].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[3].stats[7].value}</Text>
                                <View style={{ width: 24 }}></View>
                                <Text>{item.standings.entries[3].stats[10].displayValue}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[3].stats[11].value.toFixed(2)}%</Text>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[4].stats[8].value}</Text>
                                    </View>
                                    <View style={{ width: 97 }}>
                                        <Text>{item.standings.entries[4].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[4].stats[12].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[4].stats[7].value}</Text>
                                <View style={{ width: 24 }}></View>
                                <Text>{item.standings.entries[4].stats[10].displayValue}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[4].stats[11].value.toFixed(2)}%</Text>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[5].stats[8].value}</Text>
                                    </View>
                                    <View style={{ width: 97 }}>
                                        <Text>{item.standings.entries[5].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[5].stats[12].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[5].stats[7].value}</Text>
                                <View style={{ width: 24 }}></View>
                                <Text>{item.standings.entries[5].stats[10].displayValue}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[5].stats[11].value.toFixed(2)}%</Text>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[6].stats[8].value}</Text>
                                    </View>
                                    <View style={{ width: 97 }}>
                                        <Text>{item.standings.entries[6].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[6].stats[12].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[6].stats[7].value}</Text>
                                <View style={{ width: 24 }}></View>
                                <Text>{item.standings.entries[6].stats[10].displayValue}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[6].stats[11].value.toFixed(2)}%</Text>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[7].stats[8].value}</Text>
                                    </View>
                                    <View style={{ width: 97 }}>
                                        <Text>{item.standings.entries[7].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[7].stats[12].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[7].stats[7].value}</Text>
                                <View style={{ width: 24 }}></View>
                                <Text>{item.standings.entries[7].stats[10].displayValue}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[7].stats[11].value.toFixed(2)}%</Text>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[8].stats[8].value}</Text>
                                    </View>
                                    <View style={{ width: 97 }}>
                                        <Text>{item.standings.entries[8].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[8].stats[12].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[8].stats[7].value}</Text>
                                <View style={{ width: 24 }}></View>
                                <Text>{item.standings.entries[8].stats[10].displayValue}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[8].stats[11].value.toFixed(2)}%</Text>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[9].stats[8].value}</Text>
                                    </View>
                                    <View style={{ width: 97 }}>
                                        <Text>{item.standings.entries[9].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[9].stats[12].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[9].stats[7].value}</Text>
                                <View style={{ width: 24 }}></View>
                                <Text>{item.standings.entries[9].stats[10].displayValue}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[9].stats[11].value.toFixed(2)}%</Text>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[10].stats[8].value}</Text>
                                    </View>
                                    <View style={{ width: 97 }}>
                                        <Text>{item.standings.entries[10].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[10].stats[12].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[10].stats[7].value}</Text>
                                <View style={{ width: 24 }}></View>
                                <Text>{item.standings.entries[10].stats[10].displayValue}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[10].stats[11].value.toFixed(2)}%</Text>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[11].stats[8].value}</Text>
                                    </View>
                                    <View style={{ width: 97 }}>
                                        <Text>{item.standings.entries[11].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[11].stats[12].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[11].stats[7].value}</Text>
                                <View style={{ width: 24 }}></View>
                                <Text>{item.standings.entries[11].stats[10].displayValue}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[11].stats[11].value.toFixed(2)}%</Text>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[12].stats[8].value}</Text>
                                    </View>
                                    <View style={{ width: 97 }}>
                                        <Text>{item.standings.entries[12].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[12].stats[12].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[12].stats[7].value}</Text>
                                <View style={{ width: 24 }}></View>
                                <Text>{item.standings.entries[12].stats[10].displayValue}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[12].stats[11].value.toFixed(2)}%</Text>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[13].stats[8].value}</Text>
                                    </View>
                                    <View style={{ width: 97 }}>
                                        <Text>{item.standings.entries[13].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[13].stats[12].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[13].stats[7].value}</Text>
                                <View style={{ width: 24 }}></View>
                                <Text>{item.standings.entries[13].stats[10].displayValue}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[13].stats[11].value.toFixed(2)}%</Text>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[14].stats[8].value}</Text>
                                    </View>
                                    <View style={{ width: 97 }}>
                                        <Text>{item.standings.entries[14].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[14].stats[12].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[14].stats[7].value}</Text>
                                <View style={{ width: 24 }}></View>
                                <Text>{item.standings.entries[14].stats[10].displayValue}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[14].stats[11].value.toFixed(2)}%</Text>

                            </View>


                        </View>
                    )
                }} />
        </View>
    )
}

export default NBAStandings

const styles = StyleSheet.create({
    tableHeader: {
        flexDirection: 'row',
        width: 350,
        height: 28,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: 'lightgray'
    },
    tableRow: {
        width: 350,
        borderRadius: 5,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'lightblue'
    }
})