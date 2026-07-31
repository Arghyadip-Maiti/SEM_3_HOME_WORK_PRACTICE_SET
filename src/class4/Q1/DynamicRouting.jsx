import React from 'react'
import { Link , Routes, Route} from 'react-router-dom'
import Products from './Products'
import About from './About'
import ProductDetails from './ProductDetails'

const DynamicRouting = () => {
  return (
    <div>
        <nav className='flex justify-between p-12 list-none text-4xl'>
            <Link to='/p'><li>Products</li></Link>
            <Link to='/'><li>About</li></Link>
        </nav>
        <Routes>
            <Route path='/' element={<About/>}/>
            <Route path='/p' element={<Products/>}/>
            <Route path='/p/:id' element={<ProductDetails/>}/>
        </Routes>
    </div>
  )
}

export default DynamicRouting