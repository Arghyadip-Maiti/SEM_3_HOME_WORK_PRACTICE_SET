import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Link, Route, Routes } from 'react-router-dom'

const Company = () => {
  return (
    <div>
        <nav className='flex justify-between p-10 text-4xl list-none bg-fuchsia-400 font-bold h-36'>
            <Link to='/'><li className='bg-fuchsia-700 text-fuchsia-400 py-2 px-6 rounded-2xl '><button className='cursor-pointer'>🏠 Home</button></li></Link>
            <Link to='/about'><li className='bg-fuchsia-700 text-fuchsia-400 py-2 px-6 rounded-2xl '><button className='cursor-pointer'>🧑🏻‍💻 About Us</button></li></Link>
            <Link to='/contact'><li className='bg-fuchsia-700 text-fuchsia-400 py-2 px-6 rounded-2xl '><button className='cursor-pointer'>🤙🏻 Contact Us</button></li></Link>
        </nav>
        <main>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </main>
    </div>
  )
}

export default Company