import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo, editTodo} from '../action/action';
import Item from './Item';

const TodoList = ({dispatch, todos}) => {

  const deleteFunc = (id) => () => {
    dispatch(deleteTodo(id));
  };

  const editFunc = (id) => (value) => () => {
    const input = prompt('修改内容:', value);
    if (input) {
      dispatch(editTodo(id, input));
    }
  };

  return <ul className="list">
    {
      todos.map(item => <Item
          key={item.id}
          data={item}
          deleteTodo={deleteFunc(item.id)}
          editTodo={editFunc(item.id)}
        />
      )
    }
  </ul>
};

export default connect(state => state)(TodoList);
