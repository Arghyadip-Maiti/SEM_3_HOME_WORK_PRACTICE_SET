import React from 'react'
import Home from './Home'
import Pizza from './Pizza'
import Burger from './Burger'
import Drinks from './Drinks'
import {Routes, Route, Link} from 'react-router-dom'

const FoodMenu = () => {
  return (
    <div>
        <nav className='flex justify-between py-4 px-8 text-4xl bg-red-500 h-24'>
          <Link to='/'><button className='bg-amber-300 py-2 px-6 rounded-2xl active:scale-95 cursor-pointer'>Home</button></Link>   
            <div className='flex gap-8 '>
              <Link to='/pizza'><button className='bg-amber-300 p-2 rounded-2xl active:scale-95 cursor-pointer'>🍕 Pizza</button></Link>
              <Link to='/burger'><button className='bg-amber-300 p-2 rounded-2xl active:scale-95 cursor-pointer'>🍔 Burger</button></Link>
              <Link to='/drinks'><button className='bg-amber-300 p-2 rounded-2xl active:scale-95 cursor-pointer'>🍺 Drinks</button></Link>    
            </div>
        </nav>
        <main>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/pizza' element={<Pizza/>}/>
              <Route path='/burger' element={<Burger/>}/>
              <Route path='/drinks' element={<Drinks/>}/>
            </Routes>
        </main>
    </div>
  )
}

export default FoodMenu