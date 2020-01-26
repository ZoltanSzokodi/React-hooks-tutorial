import React, { useReducer } from 'react'

// Multiple useReducers

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

function ReducerCounter3() {

  // A call to useReducer returns 2 values -> the current state (count) and a dispatch method that accepts an action
  const [count, dispatch] = useReducer(reducer, initialState)
  const [count2, dispatch2] = useReducer(reducer, initialState)

  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
      </div>
      <div>Count2: {count2}</div>
      <div>
        <button onClick={() => dispatch2('increment')}>Increment</button>
        <button onClick={() => dispatch2('decrement')}>Decrement</button>
        <button onClick={() => dispatch2('reset')}>Reset</button>
      </div>
    </div>
  )
}

export default ReducerCounter3
