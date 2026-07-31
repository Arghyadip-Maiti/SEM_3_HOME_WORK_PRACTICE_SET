import React from 'react'

const Drinks = () => {
  return (
    <div className='h-[calc(100vh-96px)] bg-cyan-400 flex justify-center items-center'>
        <div className='flex flex-col items-center gap-2 '>
            <h1 className='text-6xl font-extrabold bg-pink-500 py-2 px-8 rounded-2xl'>DRINKS</h1>
            <img className='h-96 w-96 rounded-2xl' src="https://img.magnific.com/free-vector/hand-drawn-lemonade-cartoon-illustration_52683-141455.jpg?semt=ais_hybrid&w=740&q=80" alt="resturant image" />
            <div className='flex gap-6'>
                <div className='bg-white py-2 px-6 text-3xl rounded-2xl font-bold'>Sip happens</div>
                <div className='bg-white py-2 px-6 text-3xl rounded-2xl font-bold'>Cool enough to chill your mood</div>
                <div className='bg-white py-2 px-6 text-3xl rounded-2xl font-bold'>Liquid happiness in a glass</div>
            </div>
        </div>
    </div>
  )
}

export default Drinks