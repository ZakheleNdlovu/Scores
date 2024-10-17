import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Headlines from './Headlines'
import Scores from './Scores'
import Navigation from './Navigation'
import WNBAGamesNav from './WNBAGamesNav'
import WNBAStandings from './WNBAStandings'
import WNBATeams from './WNBATeams'

const ControlW = () => {

    const [state, setState] = useState(0)

    if (state === 0 || state === 1) {
        return (
            <View style={{ height: 610 }}>
                <View>
                    <Navigation state={state} setState={setState} />
                </View>

                <Headlines />

            </View>
        )
    }
    else if (state === 2) {
        return (
            <View style={{ height: 610 }}>
                <Navigation state={state} setState={setState} />
                <WNBAGamesNav />
            </View>
        )
    }
    else if (state === 3) {
        return (
            <View style={{ height: 610 }}>
                <Navigation state={state} setState={setState} />
                <WNBAStandings />
            </View>
        )
    }
    else if (state === 4) {
        return (
            <View style={{ height: 610 }}>
                <Navigation state={state} setState={setState} />
                <WNBATeams />
            </View>
        )
    }
}

export default ControlW