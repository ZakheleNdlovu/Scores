import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import GamesEPL from './GamesEPL'
import PremStats from './PremStats'

const PremGames = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Games' component={GamesEPL} />
                <Stack.Screen name='Stats' component={PremStats} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default PremGames