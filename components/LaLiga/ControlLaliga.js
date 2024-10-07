import { View, Text } from 'react-native'
import React, { useState } from 'react'
import NavigateLaLiga from './NavigateLaLiga'
import HeadlinesLaLiga from './HeadlinesLaLiga'
import GamesLaLiga from './GamesLaLiga'
import LaLIGATable from './LaLIGATable'

const ControlLaLiga = () => {

    const [state, setState] = useState(0)

    if (state === 0 || state === 1) {
        return (
            <View style={{ height: 600, width: 357, alignItems: 'center' }}>

                <NavigateLaLiga state={state} setState={setState} />


                <HeadlinesLaLiga />

            </View>
        )
    }
    else if (state === 2) {
        return (
            <View style={{ height: 600 }}>
                <NavigateLaLiga state={state} setState={setState} />
                <GamesLaLiga />
            </View>
        )
    }
    else if (state === 3) {
        return (
            <View style={{ height: 600 }}>
                <NavigateLaLiga state={state} setState={setState} />
                <LaLIGATable />
            </View>
        )
    }
}

export default ControlLaLiga