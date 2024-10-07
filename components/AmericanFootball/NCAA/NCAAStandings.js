import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'


const NCAAStandings = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('https://site.web.api.espn.com/apis/v2/sports/football/college-football/standings?season=2024')
                const standings = await response.json()
                setData(standings.children)
                console.log(data)
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
                            <View>

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