import {combineReducers} from 'redux';

let list = [];

const todos = (state = list, action) => {

  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: action.id,
          value: action.value
        }
      ];

    case 'DELETE':
      return state.filter(item => item.id !== action.id);

    case 'EDIT':
      let newState = [...state];
      newState.forEach(item => {
        if (item.id === action.id)  item.value = action.value
      });
      return newState;
    default:
      return [
        ...state
      ];
  }
};

const index = combineReducers({
  todos
});

export default index;