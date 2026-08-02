import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const StudentDetails = () => {

  let {stuNo}=useParams();

  let navi=useNavigate()

  const studentData=[
    {
        id: 1,
        name: 'Arghyadip Maiti',
        marks: 46
    },{
        id: 2,
        name: 'Arkaprava Maiti',
        marks: 53
    },{
        id: 3,
        name: 'Rajdip Maiti',
        marks: 68
    },{
        id: 4,
        name: 'Debalina Maiti',
        marks: 76
    }
  ]

  const data=studentData.find((ele)=>{
    return ele.id==stuNo;
  })

  const click=()=>{
    navi(`/student`)
  }

  
  if(!data){
    return(
      <div className='flex justify-center items-center flex flex-col'>
      <div className='flex w-full justify-end'>
        <button className='cursor-pointer' onClick={click}>
        <div className='text-black flex gap-2 bg-emerald-600 py-3 px-8 rounded-full active:scale-95 text-xl text-white'><div className='text-6xl'>📃</div> Student <br/>List</div> 
        </button>   
      </div>
      <div className='h-112 w-112 bg-amber-300 flex justify-center items-center rounded-full text-5xl font-extrabold text-cyan-400 '>Product not found</div>   
    </div>
    )
  }
  
  return (
    <div className='flex justify-center items-center flex flex-col'>
      <div className='flex w-full justify-end'>
        <button className='cursor-pointer' onClick={click}>
        <div className='text-black flex gap-2 bg-emerald-600 py-3 px-8 rounded-full active:scale-95 text-xl text-white'><div className='text-6xl'>📃</div> Student <br/>List</div> 
        </button>   
      </div>
      <div className='h-112 w-112 bg-amber-300 flex justify-center items-center rounded-full text-9xl font-extrabold text-cyan-400 '>{data.marks}</div>   
    </div>
  )
}


export default StudentDetails