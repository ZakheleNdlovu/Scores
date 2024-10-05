import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import Navigators from './components/nba/Navigators';
import ControlW from './components/wnba/ControlW';
import ControlF from './components/AmericanFootball/ControlF';
import HomeControl from './components/HomeControl';
import Home from './components/Home';
import GamesMLS from './components/mls/GamesMLS';
import ControlMLS from './components/mls/ControlMLS';
import GamesStatsNFL from './components/AmericanFootball/GameStatsNFL';


export default function App() {


  return (
    <View style={styles.container}>


      <HomeControl />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
});
