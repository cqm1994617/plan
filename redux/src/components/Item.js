import React from 'react';

const Item = ({deleteTodo, editTodo, data}) => (
  <li className="item">
    <div>{data.id + 1}. {data.value}</div>
    <div>
      <button className="btn btn-mg" onClick={editTodo(data.value)}>编辑</button>
      <button className="btn btn-mg" onClick={deleteTodo}>删除</button>
    </div>
  </li>
);

export default Item;
