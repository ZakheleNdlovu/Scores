import { View, Text } from 'react-native'
import React, { useState } from 'react'

import NavigateMLS from './NavigateMLS'
import HeadlinesMLS from './HeadlinesMLS'
import GamesMLS from './GamesMLS'

const ControlMLS = () => {

    const [state, setState] = useState(0)

    if (state === 0 || state === 1) {
        return (
            <View>
                <View>
                    <NavigateMLS state={state} setState={setState} />
                </View>

                <HeadlinesMLS />

            </View>
        )
    }
    else if (state === 2) {
        return (
            <View>
                <NavigateMLS state={state} setState={setState} />
                <GamesMLS />
            </View>
        )
    }
}

export default ControlMLS