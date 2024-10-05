import { View, Text } from 'react-native'
import React, { useState } from 'react'
import NavigatePSL from './NavigatePSL'
import HeadlinesPSL from './HeadlinesPSL'
import GamesPSL from './GamesPSL'

const ControlPSL = () => {

    const [state, setState] = useState(0)

    if (state === 0 || state === 1) {
        return (
            <View>
                <View>
                    <NavigatePSL state={state} setState={setState} />
                </View>

                <HeadlinesPSL />

            </View>
        )
    }
    else if (state === 2) {
        return (
            <View>
                <NavigatePSL state={state} setState={setState} />
                <GamesPSL />
            </View>
        )
    }
}

export default ControlPSL