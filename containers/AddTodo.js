import React from 'react';
import { connect } from "react-redux";
import { addTodo } from "../actions/index.js";
import { StyleSheet, View, Button, TextInput } from 'react-native';

const AddTodo = ({ dispatch }) => (
  <View style={styles.container}>
    <TextInput
      placeholder="Type Here TODO"
    />
    <Button 
      onPress={() => {
        //  dispatch(addTodo(input.value));
        //input.value = ""
      }}
      title="Add Todo"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   paddingBottom: 22,
  },
})

export default connect()(AddTodo);
