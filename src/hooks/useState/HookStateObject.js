import React, { useState } from 'react'

// HOW TO SET PROPERTY VALUE OF AN OBJECT IN THE STATE

function HookStateObject() {

  const [name, setName] = useState({ firstName: '', lastName: '' })

  return (
    <form>
      <input type='text' value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />

      <input type='text' value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />

      <br />
      <span>first name: {name.firstName}</span>
      <br />
      <span>last name: {name.lastName}</span>
      <br />
      <span>{JSON.stringify(name)}</span>


    </form>
  )
}

export default HookStateObject
