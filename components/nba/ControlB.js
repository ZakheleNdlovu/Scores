import { View, Text } from 'react-native'
import React, { useState } from 'react'
import News from './News'
import Games from './Games'
import Navigators from './Navigators'
import NBAGamesNav from './NBAGamesNav'
import NBAStandings from './NBAStandings'
import NBATeams from './NBATeams'

const ControlB = () => {

    const [state, setState] = useState(0)

    if (state === 0 || state === 1) {
        return (
            <View>
                <View>
                    <Navigators state={state} setState={setState} />
                </View>

                <News />

            </View>
        )
    }
    else if (state === 2) {
        return (
            <View >
                <Navigators state={state} setState={setState} />
                <NBAGamesNav />
            </View>
        )
    }
    else if (state === 3) {
        return (
            <View style={{ height: 610 }}>
                <Navigators state={state} setState={setState} />
                <NBAStandings />
            </View>
        )
    }
    else if (state === 4) {
        return (
            <View style={{ height: 610 }}>
                <Navigators state={state} setState={setState} />
                <NBATeams />
            </View>
        )
    }
}

export default ControlB