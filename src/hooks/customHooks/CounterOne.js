import React from 'react'
import { useCounter } from './myHooks/useCounter'

function CounterOne() {

  const [count, increment, decrement, reset] = useCounter()

  return (
    <div>
      <h2>Count one: {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default CounterOne
