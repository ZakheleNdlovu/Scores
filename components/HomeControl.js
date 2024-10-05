import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Home from './Home'
import ControlB from './nba/ControlB'
import ControlF from './AmericanFootball/ControlF'
import ControlW from './wnba/ControlW'
import ControlMLS from './mls/ControlMLS'
import ControlEPL from './EPL/ControlEPL'
import ControlLaLiga from './LaLiga/ControlLaliga'
import ControlPSL from './PSL/ControlPSL'


const HomeControl = () => {
    const [state1, setState1] = useState(0)

    if (state1 === 0) {
        return (
            <View>
                <Home state={state1} setState={setState1} />
                <Text>Wano Scores</Text>
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
                    <ControlF />
                </View>
            </View>
        )
    }
    else if (state1 === 2) {
        return (
            <View>
                <Home state={state1} setState={setState1} />
                <View style={styles.window1}>
                    <ControlB />
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
                    <ControlW />
                </View>
            </View>
        )
    }
    else if (state1 === 4) {
        return (
            <View>
                <View>
                    <Home state={state1} setState={setState1} />

                </View>
                <View style={styles.window1}>
                    <ControlMLS />
                </View>

            </View>
        )
    }
    else if (state1 === 5) {
        return (
            <View>
                <View>
                    <Home state={state1} setState={setState1} />

                </View>
                <View style={styles.window1}>
                    <ControlEPL />
                </View>

            </View>
        )
    }
    else if (state1 === 6) {
        return (
            <View>
                <View>
                    <Home state={state1} setState={setState1} />

                </View>
                <View style={styles.window1}>
                    <ControlLaLiga />
                </View>

            </View>
        )
    }
    else if (state1 === 7) {
        return (
            <View>
                <View>
                    <Home state={state1} setState={setState1} />

                </View>
                <View style={styles.window1}>
                    <ControlPSL />
                </View>

            </View>
        )
    }
}

export default HomeControl

const styles = StyleSheet.create({
    window: {

        height: 565,
        overflow: 'visible',
        alignItems: 'center'

    },
    window1: {
        height: 614,
        overflow: 'visible',
        alignItems: 'center'
    }
})