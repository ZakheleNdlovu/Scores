import { View, Text } from 'react-native'
import React, { useState } from 'react'
import StatNav from './StatNav'
import GameStats from './GameStats'
import GameLeaders from './GameLeaders'

const StatControl = () => {

    const [state, setState] = useState(0)

    if (state == 0 || state == 1) {
        return (
            <View>
                <StatNav state={state} setState={setState} />
                <GameStats />
            </View>
        )
    }
    else if (state == 2) {
        return (
            <View>
                <StatNav state={state} setState={setState} />
                <GameLeaders />
            </View>
        )
    }
}

export default StatControl