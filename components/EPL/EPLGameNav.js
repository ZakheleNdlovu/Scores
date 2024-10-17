import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import GamesEPL from './GamesEPL'
import EPLGameStats from './EPLGamesStats'
import EPLGameLeaders from './EPLGameLeaders'

const EPLGamesNav = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Games' component={GamesEPL} />
                <Stack.Screen name='Stats' component={EPLGameStats} />
                <Stack.Screen name='Leaders' component={EPLGameLeaders} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default EPLGamesNav