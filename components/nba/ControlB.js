import { View, Text } from 'react-native'
import React, { useState } from 'react'
import News from './News'
import Games from './Games'
import Navigators from './Navigators'

const ControlB = () => {

    const [state, setState] = useState(0)

    if (state === 0 || state === 1) {
        return (
            <View>
                <View>
                    <Navigators state={state} setState={setState} />
                </View>

                <News />
                <View style={{ height: 50 }}></View>
            </View>
        )
    }
    else if (state === 2) {
        return (
            <View>
                <Navigators state={state} setState={setState} />
                <Games />
            </View>
        )
    }
}

export default ControlB