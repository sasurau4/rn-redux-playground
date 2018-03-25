import React  from "react";
import { connect } from "react-redux";
import TodoList from '../components/TodoList.js';

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


