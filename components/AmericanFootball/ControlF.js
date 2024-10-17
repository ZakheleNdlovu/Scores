import { View, Text } from 'react-native'
import React, { useState } from 'react'
import TopHeadlines from './TopHeadlines'
import Games from './Games'
import Navigate from './Navigate'

import NFLStandings from './NFLStandings'
import StatsNav from './StatsNav'
import NFLTeams from './NFLTeams'

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
                <StatsNav />
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
    else if (state === 4) {
        return (
            <View style={{ height: 620 }}>
                <Navigate state={state} setState={setState} />
                <NFLTeams />
            </View>
        )
    }
}

export default ControlF