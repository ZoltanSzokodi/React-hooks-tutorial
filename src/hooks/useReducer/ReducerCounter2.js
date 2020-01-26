import React, { useReducer } from 'react'

// useReducer (complex state & action)

// const initialState = {
//   firstCounter: 0
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { firstCounter: state.firstCounter + action.value }
//     case 'decrement':
//       return { firstCounter: state.firstCounter - action.value }
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }

const initialState = {
  firstCounter: 0,
  secondCounter: 10
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value }
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value }
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value }
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value }
    case 'reset':
      return initialState
    default:
      return state
  }
}

function ReducerCounter2() {

  // A call to useReducer returns 2 values -> the current state (count) and a dispatch method that accepts an action
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <div>First counter: {count.firstCounter}</div>
      <div>Second counter: {count.secondCounter}</div>
      <div>
        <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment counter 1 w/1</button>
        <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement counter 1 w/1</button>
        <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment counter 1 w/5</button>
        <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement counter 1 w/5</button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment counter 2 w/1</button>
        <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement counter 2 w/1</button>
        <button onClick={() => dispatch({ type: 'increment2', value: 5 })}>Increment counter 2 w/5</button>
        <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>Decrement counter 2 w/5</button>
      </div>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}

export default ReducerCounter2
