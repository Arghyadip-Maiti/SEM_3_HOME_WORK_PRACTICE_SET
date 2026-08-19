import React, { useEffect } from 'react'
import { useState } from 'react'

const CompletedToDo = () => {

  const [apiData, setApiData] = useState([])  

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{
        return res.json();
    }).then((data)=>{
        //console.log(data)
        let trueData=data.filter((a)=>{
            return a.completed==true
        })
        //console.log(trueData)
        setApiData(trueData)
    })
  },[])


  return (
    <div>
        {
            apiData.map((a,idx)=>{
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

export default CompletedToDo