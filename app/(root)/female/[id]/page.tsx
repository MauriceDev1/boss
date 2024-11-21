import React from 'react'

interface Params {
  id: string;  // Assuming `id` is a string
}

const SingleView = ({ id }: Params) => {
  return (
    <div>{id}</div>
  )
}

export default SingleView
