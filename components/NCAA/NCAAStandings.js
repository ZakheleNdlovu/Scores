import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react'


const NCAAStandings = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('http://site.api.espn.com/apis/site/v2/sports/football/college-football/rankings')
                const standings = await response.json()
                setData(standings.rankings)
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

                            <View style={styles.tableHeader}>

                                <Text>{item.name}</Text>
                            </View>
                            <View style={{ width: 359 }}>
                                <Text>   Rank                         Team                                Record               Points</Text>
                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[0].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[0].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[0].team.nickname} {item.ranks[0].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[0].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[0].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[1].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[1].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[1].team.nickname} {item.ranks[1].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[1].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[1].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[2].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[2].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[2].team.nickname} {item.ranks[1].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[2].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[2].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[3].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[3].team.logos[1].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[3].team.nickname} {item.ranks[3].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[3].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[3].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[4].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[4].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[4].team.nickname} {item.ranks[4].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[4].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[4].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[5].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[5].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[5].team.nickname} {item.ranks[5].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[5].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[5].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[6].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[6].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[6].team.nickname} {item.ranks[6].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[6].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[6].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[7].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[7].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[7].team.nickname} {item.ranks[7].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[7].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[7].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[8].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[8].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[8].team.nickname} {item.ranks[8].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[8].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[8].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[9].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[9].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[9].team.nickname} {item.ranks[9].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[9].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[9].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[10].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[10].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[10].team.nickname} {item.ranks[10].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[10].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[10].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[11].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[11].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[11].team.nickname} {item.ranks[11].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[11].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[11].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[12].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[12].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[12].team.nickname} {item.ranks[12].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[12].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[12].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[13].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[13].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[13].team.nickname} {item.ranks[13].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[13].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[13].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[14].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[14].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[14].team.nickname} {item.ranks[14].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[14].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[14].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[15].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[15].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[15].team.nickname} {item.ranks[15].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[15].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[15].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[16].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[16].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[16].team.nickname} {item.ranks[16].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[16].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[16].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[18].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[18].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[18].team.nickname} {item.ranks[18].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[18].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[18].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[19].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[19].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[19].team.nickname} {item.ranks[19].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[19].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[19].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[20].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[20].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[20].team.nickname} {item.ranks[20].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[20].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[20].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[21].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[21].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[21].team.nickname} {item.ranks[21].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[21].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[21].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[22].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[22].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[22].team.nickname} {item.ranks[22].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[22].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[22].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[23].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[23].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[23].team.nickname} {item.ranks[23].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[23].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[23].points}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ height: 2 }}></View>
                            <View style={styles.tableRow}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 300, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: 150, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text>{item.ranks[24].current}. </Text>
                                            <View style={{ width: 15 }}></View>
                                            <Image source={{ uri: item.ranks[24].team.logos[0].href }} width={30} height={30} />
                                            <View style={{ width: 15 }}></View>
                                            <Text>{item.ranks[24].team.nickname} {item.ranks[24].team.name}</Text>

                                        </View>
                                        <View style={{ width: 70 }}></View>
                                        <Text>{item.ranks[21].recordSummary}</Text>
                                        <View style={{ width: 53 }}></View>
                                        <Text>{item.ranks[21].points}</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                    )
                }} />
        </View>
    )
}

export default NCAAStandings

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