import React from 'react'

const Badge = (props) => {
  return (
    <div>
       <div className='bg-red-500 px-8 py-3 rounded-xl text-xl text-white'>Total Task:{props.total}</div>
    </div>
  )
}

export default Badge