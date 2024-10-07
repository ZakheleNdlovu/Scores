import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'


const EPLTable = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('https://site.web.api.espn.com/apis/v2/sports/soccer/eng.1/standings?season=2024')
                const table = await response.json()
                setData(table.children)

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
                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.tableHeader}>
                                <Text>TEAM NAME</Text>
                                <View style={{ width: 120 }}></View>
                                <Text>PTS    W     L    D    GP   GF   GA</Text>
                            </View>
                            <View style={{ height: 1 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ width: 180, flexDirection: 'row' }}>
                                    <View style={{ width: 25, padding: 5 }}>
                                        <Text>{item.standings.entries[0].note.rank}. </Text>
                                    </View>
                                    <View style={{ width: 145, padding: 5, justifyContent: 'center' }}>
                                        <Text>{item.standings.entries[0].team.name}</Text>
                                    </View>

                                </View>

                                <Text>{item.standings.entries[0].stats[3].value}</Text>
                                <View style={{ width: 16 }}></View>
                                <Text>{item.standings.entries[0].stats[7].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[0].stats[1].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[0].stats[6].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[0].stats[0].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[0].stats[5].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[0].stats[4].value}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ width: 180, flexDirection: 'row' }}>
                                    <View style={{ width: 25, padding: 5 }}>
                                        <Text>{item.standings.entries[1].note.rank}. </Text>
                                    </View>
                                    <View style={{ width: 145, padding: 5, justifyContent: 'center' }}>
                                        <Text>{item.standings.entries[1].team.name}</Text>
                                    </View>

                                </View>

                                <Text>{item.standings.entries[1].stats[3].value}</Text>
                                <View style={{ width: 16 }}></View>
                                <Text>{item.standings.entries[1].stats[7].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[1].stats[1].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[1].stats[6].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[1].stats[0].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[1].stats[5].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[1].stats[4].value}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ width: 180, flexDirection: 'row' }}>
                                    <View style={{ width: 25, padding: 5 }}>
                                        <Text>{item.standings.entries[2].note.rank}. </Text>
                                    </View>
                                    <View style={{ width: 145, padding: 5, justifyContent: 'center' }}>
                                        <Text>{item.standings.entries[2].team.name}</Text>
                                    </View>

                                </View>

                                <Text>{item.standings.entries[2].stats[3].value}</Text>
                                <View style={{ width: 16 }}></View>
                                <Text>{item.standings.entries[2].stats[7].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[2].stats[1].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[2].stats[6].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[2].stats[0].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[2].stats[5].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[2].stats[4].value}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ width: 180, flexDirection: 'row' }}>
                                    <View style={{ width: 25, padding: 5 }}>
                                        <Text>{item.standings.entries[3].note.rank}. </Text>
                                    </View>
                                    <View style={{ width: 145, padding: 5, justifyContent: 'center' }}>
                                        <Text>{item.standings.entries[3].team.name}</Text>
                                    </View>

                                </View>

                                <Text>{item.standings.entries[3].stats[3].value}</Text>
                                <View style={{ width: 16 }}></View>
                                <Text>{item.standings.entries[3].stats[7].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[3].stats[1].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[3].stats[6].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[3].stats[0].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[3].stats[5].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[3].stats[4].value}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ width: 180, flexDirection: 'row' }}>
                                    <View style={{ width: 25, padding: 5 }}>
                                        <Text>{item.standings.entries[4].note.rank}. </Text>
                                    </View>
                                    <View style={{ width: 145, padding: 5, justifyContent: 'center' }}>
                                        <Text>{item.standings.entries[4].team.name}</Text>
                                    </View>

                                </View>

                                <Text>{item.standings.entries[4].stats[3].value}</Text>
                                <View style={{ width: 16 }}></View>
                                <Text>{item.standings.entries[4].stats[7].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[4].stats[1].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[4].stats[6].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[4].stats[0].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[4].stats[5].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[4].stats[4].value}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ width: 180, flexDirection: 'row' }}>
                                    <View style={{ width: 25, padding: 5 }}>
                                        <Text>{item.standings.entries[5].stats[10].value}. </Text>
                                    </View>
                                    <View style={{ width: 145, padding: 5, justifyContent: 'center' }}>
                                        <Text>{item.standings.entries[5].team.name}</Text>
                                    </View>

                                </View>

                                <Text>{item.standings.entries[5].stats[3].value}</Text>
                                <View style={{ width: 16 }}></View>
                                <Text>{item.standings.entries[5].stats[7].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[5].stats[1].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[5].stats[6].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[5].stats[0].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[5].stats[5].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[5].stats[4].value}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ width: 180, flexDirection: 'row' }}>
                                    <View style={{ width: 25, padding: 5 }}>
                                        <Text>{item.standings.entries[6].stats[10].value}. </Text>
                                    </View>
                                    <View style={{ width: 145, padding: 5, justifyContent: 'center' }}>
                                        <Text>{item.standings.entries[6].team.name}</Text>
                                    </View>

                                </View>

                                <Text>{item.standings.entries[6].stats[3].value}</Text>
                                <View style={{ width: 16 }}></View>
                                <Text>{item.standings.entries[6].stats[7].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[6].stats[1].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[6].stats[6].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[6].stats[0].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[6].stats[5].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[6].stats[4].value}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ width: 180, flexDirection: 'row' }}>
                                    <View style={{ width: 25, padding: 5 }}>
                                        <Text>{item.standings.entries[7].stats[10].value}. </Text>
                                    </View>
                                    <View style={{ width: 145, padding: 5, justifyContent: 'center' }}>
                                        <Text>{item.standings.entries[7].team.name}</Text>
                                    </View>

                                </View>

                                <Text>{item.standings.entries[7].stats[3].value}</Text>
                                <View style={{ width: 16 }}></View>
                                <Text>{item.standings.entries[7].stats[7].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[7].stats[1].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[7].stats[6].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[7].stats[0].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[7].stats[5].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[7].stats[4].value}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ width: 180, flexDirection: 'row' }}>
                                    <View style={{ width: 25, padding: 5 }}>
                                        <Text>{item.standings.entries[8].stats[10].value}. </Text>
                                    </View>
                                    <View style={{ width: 145, padding: 5, justifyContent: 'center' }}>
                                        <Text>{item.standings.entries[8].team.name}</Text>
                                    </View>

                                </View>

                                <Text>{item.standings.entries[8].stats[3].value}</Text>
                                <View style={{ width: 16 }}></View>
                                <Text>{item.standings.entries[8].stats[7].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[8].stats[1].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[8].stats[6].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[8].stats[0].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[8].stats[5].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[8].stats[4].value}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ width: 180, flexDirection: 'row' }}>
                                    <View style={{ width: 25, padding: 5 }}>
                                        <Text>{item.standings.entries[9].stats[10].value}. </Text>
                                    </View>
                                    <View style={{ width: 145, padding: 5, justifyContent: 'center' }}>
                                        <Text>{item.standings.entries[9].team.name}</Text>
                                    </View>

                                </View>

                                <Text>{item.standings.entries[9].stats[3].value}</Text>
                                <View style={{ width: 16 }}></View>
                                <Text>{item.standings.entries[9].stats[7].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[9].stats[1].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[9].stats[6].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[9].stats[0].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[9].stats[5].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[9].stats[4].value}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ width: 180, flexDirection: 'row' }}>
                                    <View style={{ width: 25, padding: 5 }}>
                                        <Text>{item.standings.entries[10].stats[10].value}. </Text>
                                    </View>
                                    <View style={{ width: 145, padding: 5, justifyContent: 'center' }}>
                                        <Text>{item.standings.entries[10].team.name}</Text>
                                    </View>

                                </View>

                                <Text>{item.standings.entries[10].stats[3].value}</Text>
                                <View style={{ width: 16 }}></View>
                                <Text>{item.standings.entries[10].stats[7].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[10].stats[1].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[10].stats[6].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[10].stats[0].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[10].stats[5].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[10].stats[4].value}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ width: 180, flexDirection: 'row' }}>
                                    <View style={{ width: 25, padding: 5 }}>
                                        <Text>{item.standings.entries[11].stats[10].value}. </Text>
                                    </View>
                                    <View style={{ width: 145, padding: 5, justifyContent: 'center' }}>
                                        <Text>{item.standings.entries[11].team.name}</Text>
                                    </View>

                                </View>

                                <Text>{item.standings.entries[11].stats[3].value}</Text>
                                <View style={{ width: 16 }}></View>
                                <Text>{item.standings.entries[11].stats[7].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[11].stats[1].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[11].stats[6].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[11].stats[0].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[11].stats[5].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[11].stats[4].value}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ width: 180, flexDirection: 'row' }}>
                                    <View style={{ width: 25, padding: 5 }}>
                                        <Text>{item.standings.entries[12].stats[10].value}. </Text>
                                    </View>
                                    <View style={{ width: 145, padding: 5, justifyContent: 'center' }}>
                                        <Text>{item.standings.entries[12].team.name}</Text>
                                    </View>

                                </View>

                                <Text>{item.standings.entries[12].stats[3].value}</Text>
                                <View style={{ width: 16 }}></View>
                                <Text>{item.standings.entries[12].stats[7].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[12].stats[1].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[12].stats[6].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[12].stats[0].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[12].stats[5].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[12].stats[4].value}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ width: 180, flexDirection: 'row' }}>
                                    <View style={{ width: 25, padding: 5 }}>
                                        <Text>{item.standings.entries[13].stats[10].value}. </Text>
                                    </View>
                                    <View style={{ width: 145, padding: 5, justifyContent: 'center' }}>
                                        <Text>{item.standings.entries[13].team.name}</Text>
                                    </View>

                                </View>

                                <Text>{item.standings.entries[13].stats[3].value}</Text>
                                <View style={{ width: 16 }}></View>
                                <Text>{item.standings.entries[13].stats[7].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[13].stats[1].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[13].stats[6].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[13].stats[0].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[13].stats[5].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[13].stats[4].value}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ width: 180, flexDirection: 'row' }}>
                                    <View style={{ width: 25, padding: 5 }}>
                                        <Text>{item.standings.entries[14].stats[10].value}. </Text>
                                    </View>
                                    <View style={{ width: 145, padding: 5, justifyContent: 'center' }}>
                                        <Text>{item.standings.entries[14].team.name}</Text>
                                    </View>

                                </View>

                                <Text>{item.standings.entries[14].stats[3].value}</Text>
                                <View style={{ width: 16 }}></View>
                                <Text>{item.standings.entries[14].stats[7].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[14].stats[1].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[14].stats[6].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[14].stats[0].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[14].stats[5].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[14].stats[4].value}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ width: 180, flexDirection: 'row' }}>
                                    <View style={{ width: 25, padding: 5 }}>
                                        <Text>{item.standings.entries[15].stats[10].value}. </Text>
                                    </View>
                                    <View style={{ width: 145, padding: 5, justifyContent: 'center' }}>
                                        <Text>{item.standings.entries[15].team.name}</Text>
                                    </View>

                                </View>

                                <Text>{item.standings.entries[15].stats[3].value}</Text>
                                <View style={{ width: 16 }}></View>
                                <Text>{item.standings.entries[15].stats[7].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[15].stats[1].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[15].stats[6].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[15].stats[0].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[15].stats[5].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[15].stats[4].value}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ width: 180, flexDirection: 'row' }}>
                                    <View style={{ width: 25, padding: 5 }}>
                                        <Text>{item.standings.entries[16].stats[10].value}. </Text>
                                    </View>
                                    <View style={{ width: 145, padding: 5, justifyContent: 'center' }}>
                                        <Text>{item.standings.entries[16].team.name}</Text>
                                    </View>

                                </View>

                                <Text>{item.standings.entries[16].stats[3].value}</Text>
                                <View style={{ width: 16 }}></View>
                                <Text>{item.standings.entries[16].stats[7].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[16].stats[1].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[16].stats[6].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[16].stats[0].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[16].stats[5].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[16].stats[4].value}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ width: 180, flexDirection: 'row' }}>
                                    <View style={{ width: 25, padding: 5 }}>
                                        <Text>{item.standings.entries[17].stats[10].value}. </Text>
                                    </View>
                                    <View style={{ width: 145, padding: 5, justifyContent: 'center' }}>
                                        <Text>{item.standings.entries[17].team.name}</Text>
                                    </View>

                                </View>

                                <Text>{item.standings.entries[17].stats[3].value}</Text>
                                <View style={{ width: 16 }}></View>
                                <Text>{item.standings.entries[17].stats[7].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[17].stats[1].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[17].stats[6].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[17].stats[0].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[17].stats[5].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[17].stats[4].value}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ width: 180, flexDirection: 'row' }}>
                                    <View style={{ width: 25, padding: 5 }}>
                                        <Text>{item.standings.entries[18].stats[10].value}. </Text>
                                    </View>
                                    <View style={{ width: 145, padding: 5, justifyContent: 'center' }}>
                                        <Text>{item.standings.entries[18].team.name}</Text>
                                    </View>

                                </View>

                                <Text>{item.standings.entries[18].stats[3].value}</Text>
                                <View style={{ width: 16 }}></View>
                                <Text>{item.standings.entries[18].stats[7].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[18].stats[1].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[18].stats[6].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[18].stats[0].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[18].stats[5].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[18].stats[4].value}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={{ width: 180, flexDirection: 'row' }}>
                                    <View style={{ width: 25, padding: 5 }}>
                                        <Text>{item.standings.entries[19].stats[10].value}. </Text>
                                    </View>
                                    <View style={{ width: 145, padding: 5, justifyContent: 'center' }}>
                                        <Text>{item.standings.entries[19].team.name}</Text>
                                    </View>

                                </View>

                                <Text>{item.standings.entries[19].stats[3].value}</Text>
                                <View style={{ width: 16 }}></View>
                                <Text>{item.standings.entries[19].stats[7].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[19].stats[1].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[19].stats[6].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[19].stats[0].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[19].stats[5].value}</Text>
                                <View style={{ width: 15 }}></View>
                                <Text>{item.standings.entries[19].stats[4].value}</Text>
                            </View>
                        </View>
                    )
                }} />
        </View>
    )
}

export default EPLTable

const styles = StyleSheet.create({
    tableHeader: {
        flexDirection: 'row',
        height: 28,
        width: 357,
        alignItems: 'center',
        backgroundColor: 'lightgray',
        paddingLeft: 5
    },
    tableRow: {
        width: 357,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        flexDirection: 'row',
        alignItems: 'center'
    }
})