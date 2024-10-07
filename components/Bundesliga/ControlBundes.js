import { View, Text } from 'react-native'
import React, { useState } from 'react'
import NavigateBundesliga from './NavigateBundesliga'
import BTable from './BTable'
import BGames from './BGames'
import BHeadlines from './BHeadlines'

const ControlBundes = () => {

    const [state, setState] = useState(0)

    if (state === 0 || state === 1) {
        return (
            <View style={{ height: 600 }}>
                <View>
                    <NavigateBundesliga state={state} setState={setState} />
                </View>
                <BHeadlines />


            </View>
        )
    }
    else if (state === 2) {
        return (
            <View style={{ height: 600 }}>
                <NavigateBundesliga state={state} setState={setState} />
                <BGames />
            </View>
        )
    }
    else if (state === 3) {
        return (
            <View style={{ height: 600 }}>
                <NavigateBundesliga state={state} setState={setState} />
                <BTable />
            </View>
        )
    }
}

export default ControlBundes