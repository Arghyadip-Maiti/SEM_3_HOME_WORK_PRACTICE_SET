import React, { useEffect } from 'react'
import { useState } from 'react'

const ToDoTen = () => {
  const [apiData, setApiData] = useState([])  
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{
        return res.json();
    }).then((data)=>{
        setApiData(data)
    })
  },[])
  
  
  return (
    <div>
      {
        
        

        apiData.slice(0,10).map((a,idx)=>{
          return(
            <div key={idx} className='border p-5 m-4'>
            <div>{a.title}</div>
            <div>{a.id}</div>
            </div>
          )
        })
      }
  
    </div>
  )
}

export default ToDoTen