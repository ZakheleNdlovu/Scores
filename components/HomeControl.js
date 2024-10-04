import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Home from './Home'
import ControlB from './nba/ControlB'
import ControlF from './AmericanFootball/ControlF'
import ControlW from './wnba/ControlW'


const HomeControl = () => {
    const [state1, setState1] = useState(0)

    if (state1 === 0) {
        return (
            <View>
                <Home state={state1} setState={setState1} />
                <Text>Wano Scores</Text>
            </View>
        )
    }
    else if (state1 === 1) {
        return (
            <View>
                <Home state={state1} setState={setState1} />
                <ControlF />
            </View>
        )
    }
    else if (state1 === 2) {
        return (
            <View>
                <Home state={state1} setState={setState1} />
                <ControlB />
            </View>

        )
    }
    else if (state1 === 3) {
        return (
            <View>
                <Home state={state1} setState={setState1} />
                <ControlW />
            </View>
        )
    }
}

export default HomeControl