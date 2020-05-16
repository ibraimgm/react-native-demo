import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

export default ({onAddItem}) => {
  const [text, setText] = useState('');

  // handles the onchange when the
  // user types something
  const onChangeText = newText => setText(newText);

  // handles the button pressing
  const onPress = () => {
    if (onAddItem) {
      onAddItem(text);
    }
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={text}
        onChangeText={onChangeText}
      />
      <Button title="Add" color="#8e24aa" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flexGrow: 1,
    borderWidth: 1,
    borderColor: '#eee',
    height: 36,
  },
});
