import { View, Text } from 'react-native'
import React, { useState } from 'react'
import NavigateL from './NavigateL'
import LTable from './LTable'
import LGames from './LGames'
import LHeadlines from './LHeadlines'
import Ligue1Teams from './Ligue1Teams'

const LControl = () => {

    const [state, setState] = useState(0)

    if (state === 0 || state === 1) {
        return (
            <View style={{ height: 600 }}>
                <View>
                    <NavigateL state={state} setState={setState} />
                </View>
                <LHeadlines />


            </View>
        )
    }
    else if (state === 2) {
        return (
            <View style={{ height: 600 }}>
                <NavigateL state={state} setState={setState} />
                <LGames />
            </View>
        )
    }
    else if (state === 3) {
        return (
            <View style={{ height: 600 }}>
                <NavigateL state={state} setState={setState} />
                <LTable />
            </View>
        )
    }
    else if (state === 4) {
        return (
            <View style={{ height: 600 }}>
                <NavigateL state={state} setState={setState} />
                <Ligue1Teams />
            </View>
        )
    }
}

export default LControl