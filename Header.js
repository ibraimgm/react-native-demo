import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default ({text}) => <Text style={styles.header}>{text}</Text>;

const styles = StyleSheet.create({
  header: {
    color: 'white',
    backgroundColor: '#8e24aa',
    textAlign: 'center',
    fontSize: 30,
    padding: 15,
  },
});
