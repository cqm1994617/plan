import React from 'react';
import AddTodo from './components/AddTodo';
import Tabs from './components/Tabs';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './main.scss';

//import {bindActionCreators} from 'redux';
//import {connect} from 'react-redux';
//import {add, setNumber, init} from './action/action';


/*
import * as action from './action/action';
 (dispatch) => ({
 ...bindActionCreators(action, dispatch)
 })
 */

/*
@connect((state) => state, (dispatch) => ({
  add: () => dispatch(add()),
  setNumber: (z) => dispatch(setNumber(z)),
  init: () => dispatch(init(15))
}))
*/


export default class App extends React.Component {

  render() {
    return (
      <div className="container">
        <AddTodo />
        <Tabs />
        <TodoList />
        <Footer />
      </div>
    );
  }
}