import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import BGames from './BGames'
import BStats from './BStats'

const BunGames = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Games' component={BGames} />
                <Stack.Screen name='Stats' component={BStats} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default BunGames