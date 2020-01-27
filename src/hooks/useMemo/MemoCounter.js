import React, { useState, useMemo } from 'react'

// useMemo Hook

function MemoCounter() {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  const incerementOne = () => {
    setCountOne(countOne + 1)
  }

  const incerementTwo = () => {
    setCountTwo(countTwo + 1)
  }

  const isEven = useMemo(() => {
    // lets imitate complexity whith slowing this function execution down deliberatly
    let i = 0
    while (i < 2000000000) i++
    return countOne % 2 === 0
  }, [countOne])

  return (
    <div>
      <div>
        <button onClick={incerementOne}>Count one: {countOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>
      <div>
        <button onClick={incerementTwo}>Count two: {countTwo}</button>
      </div>
    </div>
  )
}

export default MemoCounter