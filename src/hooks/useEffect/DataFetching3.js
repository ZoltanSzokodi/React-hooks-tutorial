import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching3() {

  const [post, setPost] = useState([])
  const [id, setId] = useState(1)
  const [idFromBtnClick, setIdFromBtnClick] = useState(1)

  const handleClick = () => {
    setIdFromBtnClick(id)
  }

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
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
      setPost(res.data)
    }
    fetchData()
  }, [idFromBtnClick])

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <input
        style={{ width: "100px" }}
        type="text"
        value={id}
        onChange={e => setId(e.target.value)} />
      <span>{post.title}</span>
      <button onClick={handleClick}>Fetch Post</button>
    </div>
  )
}

export default DataFetching3