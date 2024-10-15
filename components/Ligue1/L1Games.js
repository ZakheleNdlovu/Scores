import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import LGames from './LGames'
import L1Stats from './L1Stats'

const L1Games = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Games' component={LGames} />
                <Stack.Screen name='Stats' component={L1Stats} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default L1Games