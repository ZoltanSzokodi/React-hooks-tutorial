import React, { useState, useEffect } from 'react'

// IMITATE COMPONENT-DID-MOUNT - check <HookEffectMouseOut />

function HookEffectMouse() {

  const [X, setX] = useState(0)
  const [Y, setY] = useState(0)

  const logMousePosition = e => {
    console.log('Mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }

  // BAD - called with all rerender
  // useEffect(() => {
  //   console.log('useEffect called')
  //   window.addEventListener('mousemove', logMousePosition)
  // })

  // GOOD - called only on componentDidMount()
  useEffect(() => {
    console.log('useEffect called - added event listener')
    window.addEventListener('mousemove', logMousePosition)

    // remove event listener after component unmounts
    return () => {
      console.log('useEffect returned - removed event listener')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])

  return (
    <div>
      Cursor coordinates: X - {X} Y - {Y}
    </div>
  )
}

export default HookEffectMouse
