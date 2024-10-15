import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import SerieAGames from './SerieAGames'
import SAStats from './SAStats'


const SAGames = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Games' component={SerieAGames} />
                <Stack.Screen name='Stats' component={SAStats} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SAGames