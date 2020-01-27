import React, { useEffect, useRef } from 'react'

// useRef Hook Part 1

function FocusInput() {

  const inputRef = useRef(null)

  useEffect(() => {
    // focus the input element
    inputRef.current.focus()
  }, [])

  return (
    <div>
      Focus input
      <input ref={inputRef} type='text' />
    </div>
  )
}

export default FocusInput
