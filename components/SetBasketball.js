import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

import ControlEPL from './EPL/ControlEPL'
import ControlLaLiga from './LaLiga/ControlLaliga'
import FootballNav from './FootballNav'
import ControlPSL from './PSL/ControlPSL'
import BasketballNav from './BasketballNav'
import ControlB from './nba/ControlB'
import ControlW from './wnba/ControlW'

const SetBasketball = () => {

    const [state, setState] = useState(0)

    if (state === 0) {
        return (
            <View>
                <BasketballNav state={state} setState={setState} />
                <Text>Basketball</Text>
            </View>
        )
    }

    else if (state === 1) {
        return (
            <View>
                <BasketballNav state={state} setState={setState} />
                <ControlB />
            </View>
        )
    }
    else if (state === 2) {
        return (
            <View>
                <BasketballNav state={state} setState={setState} />
                <ControlW />
            </View>
        )
    }

}

export default SetBasketball