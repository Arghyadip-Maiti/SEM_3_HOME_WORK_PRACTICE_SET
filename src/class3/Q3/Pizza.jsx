import React from 'react'

const Pizza = () => {
  return (
    <div className='h-[calc(100vh-96px)] bg-indigo-500 flex justify-center items-center'>
        <div className='flex flex-col items-center gap-2 '>
            <h1 className='text-6xl font-extrabold bg-cyan-300 py-2 px-8 rounded-2xl'>PIZZA</h1>
            <img className='h-96 w-96 rounded-2xl' src="https://static.vecteezy.com/system/resources/previews/038/498/739/non_2x/free-cute-cartoon-pizza-art-design-illustration-free-vector.jpg" alt="resturant image" />
            <div className='flex gap-6'>
                <div className='bg-white py-2 px-6 text-3xl rounded-2xl font-bold'>Love at first slice</div>
                <div className='bg-white py-2 px-6 text-3xl rounded-2xl font-bold'>Cheesy enough to fix your bad day</div>
                <div className='bg-white py-2 px-6 text-3xl rounded-2xl font-bold'>Warning: Highly addictive</div>
            </div>
        </div>
    </div>
  )
}

export default Pizza