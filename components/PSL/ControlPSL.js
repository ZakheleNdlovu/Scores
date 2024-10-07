import { View, Text } from 'react-native'
import React, { useState } from 'react'
import NavigatePSL from './NavigatePSL'
import HeadlinesPSL from './HeadlinesPSL'
import GamesPSL from './GamesPSL'
import PSLTable from './PSLTable'

const ControlPSL = () => {

    const [state, setState] = useState(0)

    if (state === 0 || state === 1) {
        return (
            <View style={{ height: 600 }}>
                <View>
                    <NavigatePSL state={state} setState={setState} />
                </View>

                <HeadlinesPSL />

            </View>
        )
    }
    else if (state === 2) {
        return (
            <View style={{ height: 600 }}>
                <NavigatePSL state={state} setState={setState} />
                <GamesPSL />
            </View>
        )
    }
    else if (state === 3) {
        return (
            <View style={{ height: 600 }}>
                <NavigatePSL state={state} setState={setState} />
                <PSLTable />
            </View>
        )
    }
}

export default ControlPSL