import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Headlines from './Headlines'
import Scores from './Scores'
import Navigation from './Navigation'

const ControlW = () => {

    const [state, setState] = useState(0)

    if (state === 0 || state === 1) {
        return (
            <View>
                <View>
                    <Navigation state={state} setState={setState} />
                </View>

                <Headlines />
                <View style={{ height: 50 }}></View>
            </View>
        )
    }
    else if (state === 2) {
        return (
            <View>
                <Navigation state={state} setState={setState} />
                <Scores />
            </View>
        )
    }
}

export default ControlW