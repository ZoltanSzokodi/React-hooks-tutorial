import React, { useState } from 'react'
import useInput from './myHooks/useInput'

function UserForm() {
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')

  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')

  const handleSubmit = e => {
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }

  console.log('render');


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>first name</label>
          <input
            type='text'
            // value={firstName} 
            // onChange={e => setFirstName(e.target.value)} 
            {...bindFirstName}
          />
        </div>

        <div>
          <label>last name</label>
          <input
            type='text'
            // value={lastName} 
            // onChange={e => setLastName(e.target.value)}
            {...bindLastName}
          />
        </div>

        <button>submit</button>
      </form>
    </div>
  )
}

export default UserForm
