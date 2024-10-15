import { View, Text } from 'react-native'
import React, { useState } from 'react'

import NavigateMLS from './NavigateMLS'
import HeadlinesMLS from './HeadlinesMLS'
import GamesMLS from './GamesMLS'
import MLSTable from './MLSTable'
import MLSTeams from './MLSTeams'
import MLSGames from './MLSGames'

const ControlMLS = () => {

    const [state, setState] = useState(0)

    if (state === 0 || state === 1) {
        return (
            <View style={{ height: 600 }}>
                <View>
                    <NavigateMLS state={state} setState={setState} />
                </View>

                <HeadlinesMLS />

            </View>
        )
    }
    else if (state === 2) {
        return (
            <View style={{ height: 600 }}>
                <NavigateMLS state={state} setState={setState} />
                <MLSGames />
            </View>
        )
    }
    else if (state === 3) {
        return (
            <View style={{ height: 600 }}>
                <NavigateMLS state={state} setState={setState} />
                <MLSTable />
            </View>
        )
    }
    else if (state === 4) {
        return (
            <View style={{ height: 600 }}>
                <NavigateMLS state={state} setState={setState} />
                <MLSTeams />
            </View>
        )
    }
}

export default ControlMLS