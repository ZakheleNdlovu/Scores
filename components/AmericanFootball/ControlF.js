import { View, Text } from 'react-native'
import React, { useState } from 'react'
import TopHeadlines from './TopHeadlines'
import Games from './Games'
import Navigate from './Navigate'

import NFLStandings from './NFLStandings'

const ControlF = () => {

    const [state, setState] = useState(0)

    if (state === 0 || state === 1) {
        return (
            <View style={{ height: 620 }}>

                <Navigate state={state} setState={setState} />
                <TopHeadlines />

            </View>
        )
    }
    else if (state === 2) {
        return (
            <View style={{ height: 620 }}>
                <Navigate state={state} setState={setState} />
                <Games />
            </View>
        )
    }
    else if (state === 3) {
        return (
            <View style={{ height: 620 }}>
                <Navigate state={state} setState={setState} />
                <NFLStandings />
            </View>
        )
    }
}

export default ControlF