import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Headlines from './Headlines'
import Scores from './Scores'
import Navigation from './Navigation'
import WNBAGamesNav from './WNBAGamesNav'

const ControlW = () => {

    const [state, setState] = useState(0)

    if (state === 0 || state === 1) {
        return (
            <View>
                <View>
                    <Navigation state={state} setState={setState} />
                </View>

                <Headlines />

            </View>
        )
    }
    else if (state === 2) {
        return (
            <View>
                <Navigation state={state} setState={setState} />
                <WNBAGamesNav />
            </View>
        )
    }
}

export default ControlW