export const ADD = 'ADD';

export function add() {
  return {
    type: 'ADD'
  }
}

export function setNumber(num) {
  return {
    type: 'SET',
    num
  }
}

export function init() {
  return {
    type: 'INIT'
  }
}