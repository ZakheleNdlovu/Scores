import { View, Text } from 'react-native'
import React, { useState } from 'react'

import NCAAGames from './NCAAGames'
import NCAAHeadlines from './NCAAHeadlines'
import NavigateNCAA from './NavigateNCAA'
import NCAAStandings from './NCAAStandings'

const ControlNCAA = () => {

    const [state, setState] = useState(0)

    if (state === 0 || state === 1) {
        return (
            <View style={{ height: 620 }}>

                <NavigateNCAA state={state} setState={setState} />
                <NCAAHeadlines />

            </View>
        )
    }
    else if (state === 2) {
        return (
            <View style={{ height: 620 }}>
                <NavigateNCAA state={state} setState={setState} />
                <NCAAGames />
            </View>
        )
    }
    else if (state === 3) {
        return (
            <View style={{ height: 620 }}>
                <NavigateNCAA state={state} setState={setState} />
                <NCAAStandings />
            </View>
        )
    }
}

export default ControlNCAA