import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching2() {

  const [post, setPost] = useState([])
  const [id, setId] = useState(1)

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => {
  //       console.log(res.data)
  //       setPosts(res.data)
  //     })
  //     .catch(error => console.log(error))
  // }, [id])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      setPost(res.data)
    }
    fetchData()
  }, [id])

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <input
        style={{ width: "100px" }}
        type="text"
        value={id}
        onChange={e => setId(e.target.value)} />
      <span>{post.title}</span>
    </div>
  )
}

export default DataFetching2
