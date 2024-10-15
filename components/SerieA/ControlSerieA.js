import { View, Text } from 'react-native'
import React, { useState } from 'react'
import NavigateSerieA from './NavigateSerieA'
import SerieAHeadlines from './SerieAHeadlines'
import SerieAGames from './SerieAGames'
import SerieATable from './SerieATable'
import SerieATeams from './SerieATeams'
import SAGames from './SAGames'

const ControlSerieA = () => {

    const [state, setState] = useState(0)

    if (state === 0) {
        return (
            <View style={{ height: 600 }}>
                <NavigateSerieA state={state} setState={setState} />
                <Text>Headlines</Text>
            </View>
        )
    }
    else if (state === 1) {


        return (
            <View style={{ height: 600 }}>
                <View>
                    <NavigateSerieA state={state} setState={setState} />
                </View>
                <SerieAHeadlines />


            </View>
        )
    }
    else if (state === 2) {
        return (
            <View style={{ height: 600 }}>
                <NavigateSerieA state={state} setState={setState} />
                <SAGames />
            </View>
        )
    }
    else if (state === 3) {
        return (
            <View style={{ height: 600 }}>
                <NavigateSerieA state={state} setState={setState} />
                <SerieATable />
            </View>
        )
    }
    else if (state === 4) {
        return (
            <View style={{ height: 600 }}>
                <NavigateSerieA state={state} setState={setState} />
                <SerieATeams />
            </View>
        )
    }
}


export default ControlSerieA