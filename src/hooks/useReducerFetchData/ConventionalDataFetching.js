import React, { useState, useEffect } from 'react'
import axios from 'axios'

// CONVENTIONAL DATA FETCHING WITH useEffect() and useState()

function ConventionalDataFetching() {

  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => {
        setLoading(false)
        setPost(res.data)
        setError('')
      })
      .catch(err => {
        setLoading(false)
        setError(`ups something went wrong - ${err.message}`)
        setPost({})
      })
  }, [])

  return (
    <div>
      {loading ? 'fetching data...' : post.title}
      {error && error}
    </div>
  )
}

export default ConventionalDataFetching
