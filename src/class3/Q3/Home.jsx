import React from 'react'

const Home = () => {
  return (
    <div className='h-[calc(100vh-96px)] bg-blue-500 flex justify-center items-center'>
        <div className='flex flex-col items-center gap-2 '>
            <img className='h-124 w-124 rounded-2xl' src="https://static.vecteezy.com/system/resources/thumbnails/020/398/609/small/restaurant-building-with-flat-style-isolated-on-white-background-vector.jpg" alt="resturant image" />
            <h1 className='text-6xl font-extrabold bg-cyan-300 p-2 rounded-2xl'>WELCOME TO MY RESTURANT</h1>
        </div>
    </div>
  )
}

export default Home