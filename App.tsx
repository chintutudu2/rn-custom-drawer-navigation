import 'react-native-gesture-handler';

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Navigation from './src/navigation/navigator';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Navigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
