import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import StudentList from './StudentList'
import StudentDetails from './StudentDetails'

const DynamicRouting = () => {
  return (
    <div className='bg-cyan-400 h-screen p-9'>
      <Link to='/'><button className='text-5xl rounded-full bg-cyan-700 h-20 w-20 flex justify-center items-center active:scale-95 cursor-pointer'>🏠</button></Link>
      <br />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={<StudentList/>}/>
        <Route path='/student/:stuNo' element={<StudentDetails/>}/>
      </Routes>
      

    </div>
  )
}

export default DynamicRouting