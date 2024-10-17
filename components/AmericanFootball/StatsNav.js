import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Games from './Games'
import GameStatsNFL from './GameStatsNFL'
import GameLeaders from './GameLeaders'


const StatsNav = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Games' component={Games} />
                <Stack.Screen name='Stats' component={GameStatsNFL} />
                <Stack.Screen name='Leaders' component={GameLeaders} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StatsNav