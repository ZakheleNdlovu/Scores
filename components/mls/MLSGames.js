import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import GamesMLS from './GamesMLS'
import MLSStats from './MLSStats'



const MLSGames = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Games' component={GamesMLS} />
                <Stack.Screen name='Stats' component={MLSStats} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MLSGames