import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Home from './Home'
import ControlB from './nba/ControlB'
import ControlW from './wnba/ControlW'
import ControlMLS from './mls/ControlMLS'
import ControlEPL from './EPL/ControlEPL'
import ControlLaLiga from './LaLiga/ControlLaliga'
import ControlPSL from './PSL/ControlPSL'
import SetLeague from './AmericanFootball/SetLeague'
import SetFootball from './SetFootball'
import SetBasketball from './SetBasketball'


const HomeControl = () => {
    const [state1, setState1] = useState(0)

    if (state1 === 0) {
        return (
            <View >
                <Home state={state1} setState={setState1} />
                <View style={{ width: 350, height: 600, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Wano Scores</Text>
                </View>

            </View>
        )
    }
    else if (state1 === 1) {
        return (
            <View>
                <View>
                    <Home state={state1} setState={setState1} />


                </View>
                <View style={styles.window1}>
                    <SetLeague />
                </View>
            </View>
        )
    }
    else if (state1 === 2) {
        return (
            <View>
                <Home state={state1} setState={setState1} />
                <View style={styles.window1}>
                    <SetFootball />
                </View>

            </View>

        )
    }
    else if (state1 === 3) {
        return (
            <View>
                <View>
                    <Home state={state1} setState={setState1} />

                </View>
                <View style={styles.window1}>
                    <SetBasketball />
                </View>
            </View>
        )
    }


}

export default HomeControl

const styles = StyleSheet.create({
    window: {


        overflow: 'visible',
        alignItems: 'center'

    },
    window1: {
        height: 614,
        overflow: 'visible',
        alignItems: 'center'
    }
})