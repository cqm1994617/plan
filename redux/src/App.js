import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {add, setNumber, init} from './action/action';
import Main from './components/Main';

/*
import * as action from './action/action';
 (dispatch) => ({
 ...bindActionCreators(action, dispatch)
 })
 */



@connect((state) => state, (dispatch) => ({
  add: () => dispatch(add()),
  setNumber: (z) => dispatch(setNumber(z)),
  init: () => dispatch(init(15))
}))
export default class App extends React.Component {

  render() {
    console.log(this.props);
    const {dispatch, add, setNumber, init} = this.props;
    return (
      <div>
        {this.props.reducer.num} <br />
        {this.props.reducer2.data}
        <button onClick={() => add()}>+1</button>
        <button onClick={() => setNumber(120)}>setNumber = 120</button>
        <button onClick={() => init()}>INIT</button>
      </div>
    );
  }
}