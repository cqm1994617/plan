import {combineReducers} from 'redux';

let fuck = {
  num: 0,
  data: 109
};

function reducer(state = fuck, actions) {
  if (actions.type === 'ADD') {
    return {...state, num: state.num + 1}
  } else if (actions.type === 'SET') {
    return {...state, num: actions.num}
  } else {
    return state;
  }
}

function reducer2(state = fuck, actions) {
  if (actions.type === 'INIT') {
    return {...state, data: 0};
  } else {
    return state;
  }
}

const index = combineReducers({
  reducer,
  reducer2,
});

export default index;