import React from 'react';
import hoc from '../hoc/hocDecorator';

@hoc
export default class HocComponent extends React.Component {

  render() {

    const divStyle = {
      width: '100px',
      height: '100px',
      backgroundColor: 'red',
    };

    return (
      <div>
        <p style={{color: 'brown'}}>啦啦啦</p>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <p>我是一个p标签</p>
        <div style={divStyle}></div>
        <h1>哈哈哈</h1>
      </div>
    );
  }
}