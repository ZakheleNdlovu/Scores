import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import LTeams from './components/Bundesliga/LTeams';
import MLSTeams from './components/mls/MLSTeams';
import HomeControl from './components/HomeControl'

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
