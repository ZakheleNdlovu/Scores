import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'


const NFLStandings = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('https://site.web.api.espn.com/apis/v2/sports/football/nfl/standings?season=2024')
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
                        <View>
                            <View>
                                <Text>{item.name}</Text>
                            </View>
                            <View style={styles.tableHeader}>

                                <Text>Team                                          W          L          T         S         PCT</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[0].stats[3].value}</Text>
                                    </View>
                                    <View style={{ width: 85 }}>
                                        <Text>{item.standings.entries[0].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[0].stats[10].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[0].stats[2].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[0].stats[8].value}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[0].stats[7].value}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[0].stats[9].displayValue}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[1].stats[3].value}</Text>
                                    </View>
                                    <View style={{ width: 85 }}>
                                        <Text>{item.standings.entries[1].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[1].stats[10].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[1].stats[2].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[1].stats[8].value}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[1].stats[7].value}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[1].stats[9].displayValue}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[2].stats[3].value}</Text>
                                    </View>
                                    <View style={{ width: 85 }}>
                                        <Text>{item.standings.entries[2].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[2].stats[10].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[2].stats[2].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[2].stats[8].value}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[2].stats[7].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[2].stats[9].displayValue}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[3].stats[3].value}</Text>
                                    </View>
                                    <View style={{ width: 85 }}>
                                        <Text>{item.standings.entries[3].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[3].stats[10].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[3].stats[2].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[3].stats[8].value}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[3].stats[7].value}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[3].stats[9].displayValue}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[4].stats[3].value}</Text>
                                    </View>
                                    <View style={{ width: 85 }}>
                                        <Text>{item.standings.entries[4].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[4].stats[10].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[4].stats[2].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[4].stats[8].value}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[4].stats[7].value}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[4].stats[9].displayValue}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[5].stats[3].value}</Text>
                                    </View>
                                    <View style={{ width: 85 }}>
                                        <Text>{item.standings.entries[5].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[5].stats[10].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[5].stats[2].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[5].stats[8].value}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[5].stats[7].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[5].stats[9].displayValue}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[6].stats[3].value}</Text>
                                    </View>
                                    <View style={{ width: 85 }}>
                                        <Text>{item.standings.entries[6].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[6].stats[10].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[6].stats[2].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[6].stats[8].value}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[6].stats[7].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[6].stats[9].displayValue}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[7].stats[3].value}</Text>
                                    </View>
                                    <View style={{ width: 85 }}>
                                        <Text>{item.standings.entries[7].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[7].stats[10].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[7].stats[2].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[7].stats[8].value}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[7].stats[7].value}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[7].stats[9].displayValue}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[8].stats[3].value}</Text>
                                    </View>
                                    <View style={{ width: 85 }}>
                                        <Text>{item.standings.entries[8].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[8].stats[10].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[8].stats[2].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[8].stats[8].value}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[8].stats[7].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[8].stats[9].displayValue}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[9].stats[3].value}</Text>
                                    </View>
                                    <View style={{ width: 85 }}>
                                        <Text>{item.standings.entries[9].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[9].stats[10].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[9].stats[2].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[9].stats[8].value}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[9].stats[7].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[9].stats[9].displayValue}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[10].stats[3].value}</Text>
                                    </View>
                                    <View style={{ width: 85 }}>
                                        <Text>{item.standings.entries[10].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[10].stats[10].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[10].stats[2].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[10].stats[8].value}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[10].stats[7].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[10].stats[9].displayValue}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[11].stats[3].value}</Text>
                                    </View>
                                    <View style={{ width: 85 }}>
                                        <Text>{item.standings.entries[11].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[11].stats[10].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[11].stats[2].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[11].stats[8].value}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[11].stats[7].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[11].stats[9].displayValue}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[12].stats[3].value}</Text>
                                    </View>
                                    <View style={{ width: 85 }}>
                                        <Text>{item.standings.entries[12].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[12].stats[10].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[12].stats[2].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[12].stats[8].value}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[12].stats[7].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[12].stats[9].displayValue}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[13].stats[3].value}</Text>
                                    </View>
                                    <View style={{ width: 85 }}>
                                        <Text>{item.standings.entries[13].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[13].stats[10].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[13].stats[2].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[13].stats[8].value}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[13].stats[7].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[13].stats[9].displayValue}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[14].stats[3].value}</Text>
                                    </View>
                                    <View style={{ width: 85 }}>
                                        <Text>{item.standings.entries[14].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[14].stats[10].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[14].stats[2].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[14].stats[8].value}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[14].stats[7].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[14].stats[9].displayValue}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 30 }}>
                                        <Text>{item.standings.entries[15].stats[3].value}</Text>
                                    </View>
                                    <View style={{ width: 85 }}>
                                        <Text>{item.standings.entries[15].team.displayName}</Text>
                                    </View>
                                </View>
                                <View style={{ width: 50 }}></View>
                                <Text>{item.standings.entries[15].stats[10].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[15].stats[2].value}</Text>
                                <View style={{ width: 32 }}></View>
                                <Text>{item.standings.entries[15].stats[8].value}</Text>
                                <View style={{ width: 25 }}></View>
                                <Text>{item.standings.entries[15].stats[7].value}</Text>
                                <View style={{ width: 22 }}></View>
                                <Text>{item.standings.entries[15].stats[9].displayValue}</Text>
                            </View>

                        </View>
                    )
                }} />
        </View>
    )
}

export default NFLStandings

const styles = StyleSheet.create({
    tableHeader: {
        flexDirection: 'row',
        width: 350,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingLeft: 5,
        paddingRight: 5,
    },
    tableRow: {
        width: 350,
        padding: 10,
        flexDirection: 'row'
    }
})