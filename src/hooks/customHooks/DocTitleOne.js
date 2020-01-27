import React, { useEffect, useState } from 'react'
import { useDocumentTitle } from './myHooks/useDocumentTitle'

function DocTitleOne() {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   document.title = `the count is ${count}`
  // }, [count])

  useDocumentTitle(count)

  return (
    <div>
      <button onClick={() => setCount(count + 1)} >count: {count}</button>
    </div>
  )
}

export default DocTitleOne
