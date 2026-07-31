import React, { useState } from 'react'

const ColorChange = () => {

  const [color, setColor] = useState('green')

  return (
    <div className='min-w-screen flex flex-col items-center p-12'>

        <h1 className='pb-24 text-6xl font-extrabold'>Change My Color</h1>

        <h3>Current Color</h3>
        <div style={{backgroundColor: color}} className='h-66 w-66 rounded-xl'></div>

        <div className='pt-24 flex flex-wrap gap-2 w-82'>
            <button onClick={()=>{setColor('green')}} style={{backgroundColor: "green"}} className='w-18 h-12 text-white active:scale-95'>Green</button>
            <button onClick={()=>{setColor('blue')}} style={{backgroundColor: "blue"}} className='w-18 h-12 text-white active:scale-95'>Blue</button>
            <button onClick={()=>{setColor('red')}} style={{backgroundColor: "red"}} className='w-18 h-12 text-white active:scale-95'>Red</button>
            <button onClick={()=>{setColor('yellow')}} style={{backgroundColor: "yellow"}} className='w-18 h-12 active:scale-95'>Yellow</button>
            <button onClick={()=>{setColor('gray')}} style={{backgroundColor: "gray"}} className='w-18 h-12 text-white active:scale-95'>Gray</button>
            <button onClick={()=>{setColor('brown')}} style={{backgroundColor: "brown"}} className='w-18 h-12 text-white active:scale-95'>Brown</button>
            <button onClick={()=>{setColor('black')}} style={{backgroundColor: "black"}} className='w-18 h-12 text-white active:scale-95'>Black</button>
            <button onClick={()=>{setColor('orange')}} style={{backgroundColor: "orange"}} className='w-18 h-12 text-white active:scale-95'>Orange</button>
        </div>

    </div>
  )
}

export default ColorChange