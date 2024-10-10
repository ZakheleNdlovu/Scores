import { View, Text } from 'react-native'
import React, { useState } from 'react'
import NavigateEPL from './NavigateEPL'
import HeadlinesEPL from './HeadlinesEPL'
import GamesEPL from './GamesEPL'
import EPLTable from './EPLTable'
import EPLTeams from './EPLTeams'

const ControlEPL = () => {

    const [state, setState] = useState(0)

    if (state === 0 || state === 1) {
        return (
            <View style={{ height: 600 }}>
                <View>
                    <NavigateEPL state={state} setState={setState} />
                </View>
                <HeadlinesEPL />


            </View>
        )
    }
    else if (state === 2) {
        return (
            <View style={{ height: 600 }}>
                <NavigateEPL state={state} setState={setState} />
                <GamesEPL />
            </View>
        )
    }
    else if (state === 3) {
        return (
            <View style={{ height: 600 }}>
                <NavigateEPL state={state} setState={setState} />
                <EPLTable />
            </View>
        )
    }
    else if (state === 4) {
        return (
            <View style={{ height: 600 }}>
                <NavigateEPL state={state} setState={setState} />
                <EPLTeams />
            </View>
        )
    }
}

export default ControlEPL