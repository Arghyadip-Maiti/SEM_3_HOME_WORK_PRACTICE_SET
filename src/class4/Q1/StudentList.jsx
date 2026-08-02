import React from 'react'
import { useNavigate } from 'react-router-dom'

const StudentList = () => {

    let navi=useNavigate();

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

  const func=(id)=>{
    navi(`/student/${id}`)
  }



  return (
    <div className='h-9/10 bg-emerald-400 flex flex-wrap justify-center items-center rounded-4xl border-2 gap-6'>
        {
            studentData.map((ele)=>{
                return(
                    <div className='flex flex-col py-4 px-10 bg-indigo-500 h-72 gap-2 justify-center items-center rounded-4xl'>
                    <div className='text-emerald-400 font-extrabold text-3xl'>{ele.name}</div>
                    <button className='bg-white text-2xl px-6 py-2 rounded-3xl active:scale-95 cursor-pointer' onClick={()=>{func(ele.id)}}  >See Marks ➡️</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default StudentList