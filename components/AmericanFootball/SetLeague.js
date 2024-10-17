import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import LeagueNav from './LeagueNav'
import ControlF from './ControlF'
import ControlNCAA from '../NCAA/ControlNCAA'


const SetLeague = () => {

    const [state, setState] = useState(0)

    if (state === 0) {
        return (
            <View>
                <LeagueNav state={state} setState={setState} />
                <Text>Football</Text>
            </View>
        )
    }

    else if (state === 1) {
        return (
            <View>
                <LeagueNav state={state} setState={setState} />
                <ControlF />
            </View>
        )
    }
    else if (state === 2) {
        return (
            <View>
                <LeagueNav state={state} setState={setState} />
                <ControlNCAA />
            </View>
        )
    }
}

export default SetLeague