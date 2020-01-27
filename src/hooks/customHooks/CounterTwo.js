import React from 'react'
import { useCounter } from './myHooks/useCounter'

function CounterTwo() {

  const [count, increment, decrement, reset] = useCounter(10, 10)

  return (
    <div>
      <h2>Count two: {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default CounterTwo
