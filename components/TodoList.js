import React from 'react';
import { FlatList, StyleSheet, Text, View, Button, TextInput } from 'react-native';

const TodoList = ({ todos }) => (
  <View style={styles.container}>
    <FlatList
      data={todos}
      keyExtractor={(item, index) => item.id}
      renderItem={({item}) => 
        <Text key= {item.id} style={styles.item}>{item.text}</Text>
      }
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   paddingBottom: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default TodoList;
