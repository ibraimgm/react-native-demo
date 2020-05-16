import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

const ListItem = ({data, onDelete}) => {
  const {item, index} = data;

  return (
    <TouchableOpacity
      style={styles.touchable}
      onLongPress={() => onDelete && onDelete(index)}>
      <View style={styles.view}>
        <Text style={styles.text}>{item}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ListItems = ({items, onDeleteItem}) => {
  return (
    <FlatList
      data={items}
      renderItem={item => <ListItem data={item} onDelete={onDeleteItem} />}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: '#f4f4f4',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default ListItems;
