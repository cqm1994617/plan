import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../action/action';

const AddTodo = ({dispatch}) => {
  let input = null;

  return (
    <div>
      <div>
        <input className="add-input" ref={dom => {
          input = dom
        }} />
        <button className="btn" onClick={() => dispatch(addTodo(input.value))}>添加</button>
      </div>
    </div>
  );
};

export default connect()(AddTodo);