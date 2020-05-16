import React from 'react';
import {StyleSheet, Text} from 'react-native';

const App = () => <Text style={styles.important}>Hello, world</Text>;

const styles = StyleSheet.create({
  important: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
