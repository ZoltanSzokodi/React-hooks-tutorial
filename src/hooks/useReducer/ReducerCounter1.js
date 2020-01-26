import React, { useReducer } from 'react'

// useReducer (simple state & action)

const initialState = 0

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function ReducerCounter1() {

  // A call to useReducer returns 2 values -> the current state (count) and a dispatch method that accepts an action
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default ReducerCounter1
