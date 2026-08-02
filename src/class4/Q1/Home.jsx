import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-amber-300 h-17/20 flex justify-center items-center rounded-4xl'>
        <Link to='/student'><button className='py-4 px-12 bg-white text-6xl rounded-4xl active:scale-95 cursor-pointer font-bold'>Student List ➡️</button></Link> 
    </div>
  )
}

export default Home