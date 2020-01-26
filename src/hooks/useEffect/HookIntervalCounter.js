import React, { useState, useEffect } from 'react'

// TRACKING THE PREVIOUS STATE

function HookIntervalCounter() {

  const [count, setCount] = useState(0)

  // both of the solutions below will work with setInterval() UNTIL we keep track of the previous state of count. Either in the dependency array or in the setState method.

  // const tick = () => {
  //   setCount(count + 1)
  // }

  // useEffect(() => {
  //   const interval = setInterval(tick, 1000)
  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [count])

  const tick = () => {
    setCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      {count}
    </div>
  )
}

export default HookIntervalCounter
