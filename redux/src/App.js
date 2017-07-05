import React from 'react';
import {connect} from 'react-redux';
import {add, setNumber, init} from './action/action';

@connect((state) => state)
export default class App extends React.Component {

  render() {
    console.log(this.props)
    const {dispatch, reducer, reducer2} = this.props;
    console.log(reducer === reducer2)
    return (
      <div>
        {this.props.reducer.num} <br />
        {this.props.reducer2.data}
        <button onClick={() => dispatch(add())}>+1</button>
        <button onClick={() => dispatch(setNumber(100))}>setNumber = 100</button>
        <button onClick={() => dispatch(init(100))}>INIT</button>
      </div>
    );
  }
}