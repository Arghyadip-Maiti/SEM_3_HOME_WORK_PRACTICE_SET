import React from 'react'
import Nav from './Nav'
import Home from './Home'
import Projects from './Projects'
import Resume from './Resume'
import { Routes, Route } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div className='flex flex-col'>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/resume' element={<Resume/>} />
        </Routes>
        
        

    </div>
  )
}

export default Portfolio