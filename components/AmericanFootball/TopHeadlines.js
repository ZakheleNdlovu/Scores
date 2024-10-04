import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React, { useState, useEffect } from 'react'

const TopHeadlines = () => {

    const [news, setNews] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getData = async () => {
            try {
                const response = await fetch('http://site.api.espn.com/apis/site/v2/sports/football/nfl/news')
                const news = await response.json()
                setNews(news.articles)


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
                data={news}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <View style={styles.box}>
                                <View style={{ width: 330, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
                                    <Image source={{ uri: item.images[0].url }} width={180} height={130} />
                                </View>
                                <Text style={styles.header}>{item.categories[0].description}</Text>
                                <Text style={styles.headline}>{item.headline}</Text>
                                <Text>{item.description}</Text>
                                <View style={styles.link}>
                                    <TouchableOpacity onPress={() => Linking.openURL(item.links.web.href)}>
                                        <Text style={{ color: 'blue', fontSize: 20 }}>more...</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
                }} />

        </View>
    )


}

export default TopHeadlines

const styles = StyleSheet.create({
    container: {
        width: 350,
        paddingBottom: 5,
        justifyContent: 'center'

    },
    box: {
        width: 357,
        padding: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 6
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    headline: {
        fontSize: 19,
        textDecorationLine: 'underline'
    },
    link: {
        fontSize: 17,
        height: 50,
        width: 310,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row'
    }
})