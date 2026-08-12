import React, { useState } from 'react'

const TaskLS = () => {
  
  const [input, setInput] = useState('');
  const [arr, setArr] = useState([])

  const click=()=>{
    let copy=[...arr]
    setArr(input,copy)
    localStorage.setItem('key',JSON.stringify(arr))
  }

  let data=localStorage.getItem('key')

  return (
    <div>
      <input type="text" placeholder='Enter data' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
      <button onClick={click}>Add</button>
      <div>{data}</div>
    </div>
  )
}

export default TaskLS