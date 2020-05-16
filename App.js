import React, {useState} from 'react';
import {View} from 'react-native';

import Header from './Header';
import AddItem from './AddItem';
import ListItems from './ListItems';

const App = () => {
  const [items, setItems] = useState(['React', 'React Native', 'Redux']);

  // handles the 'Add' button click
  const onAddItem = text => {
    const clonedItems = items.slice();
    clonedItems.push(text);
    setItems(clonedItems);
  };

  // handles the deleting of an item
  const onDeleteItem = index => {
    const filteredItems = items.filter((_, idx) => idx !== index);
    setItems(filteredItems);
  };

  return (
    <View>
      <Header text="My List Application" />
      <AddItem onAddItem={onAddItem} />
      <ListItems items={items} onDeleteItem={onDeleteItem} />
    </View>
  );
};

export default App;
