import React from 'react'

const Card = (props) => {
  return (
    <div className='flex flex-col justify-center items-center p-12 w-23/100 border-2 gap-4 bg-emerald-500 rounded-xl'>
        <div className='text-8xl border-2 p-4 bg-amber-50'>👨🏼‍🎓</div>
        <h1>Name: {props.name}</h1>
        <p>Roll No: {props.rollno}</p>
        <p>Course: {props.course}</p>
    </div>
  )
}

export default Card