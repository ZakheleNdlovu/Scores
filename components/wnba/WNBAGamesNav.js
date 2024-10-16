import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Scores from './Scores'
import WNBAGameStats from './WNBAGamesStats'
import WNBAGameLeaders from './WNBAGameLeaders'


const WNBAGamesNav = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Games' component={Scores} />
                <Stack.Screen name='Stats' component={WNBAGameStats} />
                <Stack.Screen name='Game Leaders' component={WNBAGameLeaders} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default WNBAGamesNav