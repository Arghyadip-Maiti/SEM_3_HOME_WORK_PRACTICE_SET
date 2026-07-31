import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'

const Router1 = () => {
  return (
    <div>
      <nav className='flex justify-between p-10'>
        <Link to='/'><button>Home</button></Link>
        <Link to='/about'><button>About</button></Link>
        <Link to='/contact'><button>Contact</button></Link>
        <Link to='/services'><button>Services</button></Link>
      </nav>
      <main className='p-10'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default Router1