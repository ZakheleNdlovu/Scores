import { View, Text } from 'react-native'
import React, { useState } from 'react'
import NavigateLaLiga from './NavigateLaLiga'
import HeadlinesLaLiga from './HeadlinesLaLiga'
import GamesLaLiga from './GamesLaLiga'

const ControlLaLiga = () => {

    const [state, setState] = useState(0)

    if (state === 0 || state === 1) {
        return (
            <View>
                <View>
                    <NavigateLaLiga state={state} setState={setState} />
                </View>

                <HeadlinesLaLiga />

            </View>
        )
    }
    else if (state === 2) {
        return (
            <View>
                <NavigateLaLiga state={state} setState={setState} />
                <GamesLaLiga />
            </View>
        )
    }
}

export default ControlLaLiga