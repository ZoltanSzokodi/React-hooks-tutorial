import React, { useState } from 'react'
import HookEffectMouse from './HookEffectMouse'

// IMITATE COMPONENT-WILL-UNMOUNT -> look for the useEffect in the <HookEffectMouse /> component

function HookEffectMouseOut() {

  const [display, setDisplay] = useState(true)

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <HookEffectMouse />}
    </div>
  )
}

export default HookEffectMouseOut
