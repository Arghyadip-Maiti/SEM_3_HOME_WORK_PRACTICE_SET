import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)

  const increase=()=>{
    if(count<10){
        setCount(count+1);
    }else{
        alert('limit exceed');
    }
  }

  const decrease=()=>{
    if(count>0){
        setCount(count-1);
    }else{
        alert('limit exceed');
    }
  }

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
        <div className='text-9xl pb-6'>{count}</div>
        <div>
            <button onClick={increase} className='bg-black text-white px-12 py-2 m-4 text-xl active:scale-95 border-none cursor-pointer '>+1</button>
            <button onClick={decrease} className='bg-black text-white px-12 py-2 m-4 text-xl active:scale-95 border-none cursor-pointer '>-1</button>
        </div>
    </div>
  )
}

export default Counter