import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'


const MLSTable = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('https://site.web.api.espn.com/apis/v2/sports/soccer/usa.1/standings?season=2024')
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
                                <Text> PTS    W     L    D    GP   GF   GA</Text>
                            </View>
                            <View style={{ height: 1 }}></View>











                        </View>
                    )
                }} />
        </View>
    )
}

export default MLSTable

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