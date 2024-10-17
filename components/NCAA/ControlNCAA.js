import { View, Text } from 'react-native'
import React, { useState } from 'react'
import NCAANav from './NCAANav'

import NCAATeams from './NCAATeams'
import NCAAStandings from './NCAAStandings'
import StatNav from './StatNav'
import NCAAHeadlines from './NCAAHeadlines'

const ControlNCAA = () => {

    const [state, setState] = useState(0)

    if (state === 0 || state === 1) {
        return (
            <View style={{ height: 620 }}>

                <NCAANav state={state} setState={setState} />
                <NCAAHeadlines />

            </View>
        )
    }
    else if (state === 2) {
        return (
            <View style={{ height: 620 }}>
                <NCAANav state={state} setState={setState} />
                <StatNav />
            </View>
        )
    }
    else if (state === 3) {
        return (
            <View style={{ height: 620 }}>
                <NCAANav state={state} setState={setState} />
                <NCAAStandings />
            </View>
        )
    }
    else if (state === 4) {
        return (
            <View style={{ height: 620 }}>
                <NCAANav state={state} setState={setState} />
                <NCAATeams />
            </View>
        )
    }
}

export default ControlNCAA