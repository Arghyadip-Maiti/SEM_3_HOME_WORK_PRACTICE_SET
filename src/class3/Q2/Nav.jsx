import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-end items-center h-24 bg-amber-300 text-xl'>
        <div className='flex w-1/4 gap-14 list-none'>
        
            <Link to='/'><li className='hover:text-gray-500 hover:underline cursor-pointer transition-colors duration-200 underline-offset-4' >Home</li></Link>
            <Link to='/projects'><li className='hover:text-gray-500 hover:underline cursor-pointer transition-colors duration-200 underline-offset-4'>Projects</li></Link>
            <Link to='/resume'><li className='hover:text-gray-500 hover:underline cursor-pointer transition-colors duration-200 underline-offset-4'>Resume</li></Link>
            
            </div>
    </div>
  )
}

export default Nav