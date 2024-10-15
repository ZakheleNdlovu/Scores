import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import GamesPSL from './GamesPSL'
import PSLStats from './PSLStats'


const PSLGames = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Games' component={GamesPSL} />
                <Stack.Screen name='Stats' component={PSLStats} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default PSLGames