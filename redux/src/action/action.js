let id = 0;

export function addTodo(value) {
  return {
    type: 'ADD',
    id: id++,
    value
  }
}

export function deleteTodo(id) {
  return {
    type: 'DELETE',
    id
  }
}

export function editTodo(id, value) {
  return {
    type: 'EDIT',
    value,
    id
  }
}
