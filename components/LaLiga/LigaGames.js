import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import GamesLaLiga from './GamesLaLiga'
import LigaStats from './LigaStats'

const LigaGames = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Games' component={GamesLaLiga} />
                <Stack.Screen name='Stats' component={LigaStats} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default LigaGames