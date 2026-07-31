import React from 'react'

const Burger = () => {
  return (
    <div className='h-[calc(100vh-96px)] bg-emerald-400 flex justify-center items-center'>
        <div className='flex flex-col items-center gap-2 '>
            <h1 className='text-6xl font-extrabold bg-indigo-500 py-2 px-8 rounded-2xl'>BURGER</h1>
            <img className='h-96 w-96 rounded-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMoWC5lXKc0OsSaFSK817Ic3MtubIXHrH9T5wlWpdOnhbtMnPiQOqlQqr1&s=10" alt="resturant image" />
            <div className='flex gap-6'>
                <div className='bg-white py-2 px-6 text-3xl rounded-2xl font-bold'>One burger. Zero regrets</div>
                <div className='bg-white py-2 px-6 text-3xl rounded-2xl font-bold'>Too big for one bite. Too tasty to share</div>
                <div className='bg-white py-2 px-6 text-3xl rounded-2xl font-bold'>Messy hands, happy heart</div>
            </div>
        </div>
    </div>
  )
}

export default Burger