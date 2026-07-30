import React from 'react'

const Display = (props) => {
  return (
    <div>
        <div className='text-8xl border-2 w-64 py-12 text-center rounded-2xl'>{props.count}</div>
    </div>
  )
}

export default Display