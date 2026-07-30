import React from 'react'

const Controls = (props) => {

  const increase=()=>{
    props.setCount(props.count+1)
  }

  const decrease=()=>{
    props.setCount(props.count-1)
  }

  return (
    <div className='flex gap-6'>
        <button className='bg-black text-white text-xl px-12 py-2 rounded active:scale-95' onClick={increase}>+1</button>
        <button className='bg-black text-white text-xl px-12 py-2 rounded active:scale-95' onClick={decrease}>-1</button>
    </div>
  )
}

export default Controls