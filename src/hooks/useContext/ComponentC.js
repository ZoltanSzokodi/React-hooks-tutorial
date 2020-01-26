import React, { useContext } from 'react'
import { UserContext, ColorContext } from '../../App'

function ComponentC() {

  const user = useContext(UserContext)
  const color = useContext(ColorContext)

  return (
    <div>
      <h1>Component C</h1>
      <br />
      {/* THIS IS TEDIOUS */}
      {/* <UserContext.Consumer>
        {user => {
          return (
            <ColorContext.Consumer>
              {color => {
                return <span>The user name is {user}, who is {color}.</span>
              }}
            </ColorContext.Consumer>
          )
        }}
      </UserContext.Consumer> */}

      {/* THIS IS WAY BETTER */}
      <span>The user name is {user}, who is {color}.</span>
    </div>
  )
}

export default ComponentC
