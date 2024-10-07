import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

import ControlEPL from './EPL/ControlEPL'
import ControlLaLiga from './LaLiga/ControlLaliga'
import FootballNav from './FootballNav'
import ControlPSL from './PSL/ControlPSL'
import ControlMLS from './mls/ControlMLS'
import ControlSerieA from './SerieA/ControlSerieA'
import ControlBundes from './Bundesliga/ControlBundes'
import LControl from './Ligue1/LControl'

const SetFootball = () => {

    const [state, setState] = useState(0)

    if (state === 0) {
        return (
            <View>
                <FootballNav state={state} setState={setState} />
                <Text>Football</Text>
            </View>
        )
    }

    else if (state === 1) {
        return (
            <View>
                <FootballNav state={state} setState={setState} />
                <ControlEPL />
            </View>
        )
    }
    else if (state === 2) {
        return (
            <View >
                <FootballNav state={state} setState={setState} />
                <ControlLaLiga />
            </View>
        )
    }
    else if (state === 3) {
        return (
            <View>
                <FootballNav state={state} setState={setState} />
                <ControlPSL />
            </View>
        )
    }
    else if (state === 4) {
        return (
            <View>
                <FootballNav state={state} setState={setState} />
                <ControlMLS />
            </View>
        )
    }
    else if (state === 5) {
        return (
            <View>
                <FootballNav state={state} setState={setState} />
                <ControlSerieA />
            </View>
        )
    }
    else if (state === 6) {
        return (
            <View>
                <FootballNav state={state} setState={setState} />
                <ControlBundes />
            </View>
        )
    }
    else if (state === 7) {
        return (
            <View>
                <FootballNav state={state} setState={setState} />
                <LControl />
            </View>
        )
    }
}

export default SetFootball