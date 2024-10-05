import { View, Text } from 'react-native'
import React, { useState } from 'react'
import NavigateEPL from './NavigateEPL'
import HeadlinesEPL from './HeadlinesEPL'
import GamesEPL from './GamesEPL'

const ControlEPL = () => {

    const [state, setState] = useState(0)

    if (state === 0 || state === 1) {
        return (
            <View>
                <View>
                    <NavigateEPL state={state} setState={setState} />
                </View>

                <HeadlinesEPL />

            </View>
        )
    }
    else if (state === 2) {
        return (
            <View>
                <NavigateEPL state={state} setState={setState} />
                <GamesEPL />
            </View>
        )
    }
}

export default ControlEPL