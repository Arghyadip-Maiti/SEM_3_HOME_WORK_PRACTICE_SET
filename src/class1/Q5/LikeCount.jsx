import React from 'react'

const LikeCount = (props) => {
  return (
    <div>
        <div className='bg-red-400 px-8 py-2 text-2xl text-white rounded-l'>Total Likes: {props.count}</div>
    </div>
  )
}

export default LikeCount