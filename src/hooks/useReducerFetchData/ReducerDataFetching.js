import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
  loading: true,
  post: {},
  error: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: ''
      }
    case 'FETCH_FAILED':
      return {
        loading: false,
        post: {},
        error: `ups something went wrong - ${action.payload}`
      }
    default:
      return state
  }
}

function ReducerDataFetching() {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => {
        dispatch(
          {
            type: 'FETCH_SUCCESS',
            payload: res.data
          }
        )
      })
      .catch(err => {
        dispatch(
          {
            type: 'FETCH_FAILED',
            payload: err.message
          }
        )
      })
  }, [])

  return (
    <div>
      {state.loading ? 'fetching data...' : state.post.title}
      {state.error && state.error}
    </div>
  )
}

export default ReducerDataFetching
