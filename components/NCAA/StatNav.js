import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import NCAAGames from './NCAAGames'
import NCAAGameStats from './NCAAGameStats'
import NCAAGameLeaders from './NCAAGamesLeaders'


const StatNav = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Games' component={NCAAGames} />
                <Stack.Screen name='Stats' component={NCAAGameStats} />
                <Stack.Screen name='Leaders' component={NCAAGameLeaders} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StatNav