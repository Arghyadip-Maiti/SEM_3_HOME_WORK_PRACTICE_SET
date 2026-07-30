import React, { useState } from 'react'
import LikeCount from './LikeCount'
import LikeButton from './LikeButton'

const Like = () => {

  const [count, setCount] = useState(0)

  const handleLike=()=>{
    setCount(prev=>prev+1);
  }

  return (
    <div className='min-w-screen flex flex-col items-center p-18 gap-12 '>
        <LikeCount count={count}/>
        <LikeButton handleLike={handleLike}/>
    </div>
  )
}

export default Like