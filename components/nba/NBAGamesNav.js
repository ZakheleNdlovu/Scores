import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Games from './Games'
import GameStats from './GameStats'

const NBAGamesNav = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Games' component={Games} />
                <Stack.Screen name='Stats' component={GameStats} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NBAGamesNav