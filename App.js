import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import { addTodo } from "./actions";
import TodoList from "./containers/TodoListContainer.js";
import AddTodo from "./containers/AddTodo.js";


const store = createStore(reducer)

// debug
console.log(store.getState())
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
console.log(store.getState())






export default class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TodoList />
          <AddTodo />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
