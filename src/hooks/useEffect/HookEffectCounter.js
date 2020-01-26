import React, { useState, useEffect } from 'react'

// IMITATE COMPONENT-DID-MOUNT AND COMPONENT-DID-PDATE

function HookEffectCounter() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  // run when componentDidMount() and componentDidUpdate()
  // useEffect(() => {
  //   console.log('useEffect - Updating title')
  //   document.title = `You clicked ${count} times`
  // })

  // run only when componentDidMount()
  // useEffect(() => {
  //   console.log('useEffect - Updating title')
  //   document.title = `You clicked ${count} times`
  // }, [])

  // only runs when count updates
  useEffect(() => {
    console.log('useEffect - Updating title')
    document.title = `You clicked ${count} times`
  }, [count])

  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  )
}

export default HookEffectCounter
