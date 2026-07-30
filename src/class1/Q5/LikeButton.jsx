import React from 'react'

const LikeButton = (props) => {
  return (
    <div>
        <button className='text-8xl border-1 p-6 rounded-full active:scale-95' onClick={props.handleLike}>👍🏼</button>
    </div>
  )
}

export default LikeButton