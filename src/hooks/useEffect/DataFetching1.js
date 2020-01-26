import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching1() {

  const [posts, setPosts] = useState([])

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => {
  //       console.log(res.data)
  //       setPosts(res.data)
  //     })
  //     .catch(error => console.log(error))
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  )
}

export default DataFetching1
