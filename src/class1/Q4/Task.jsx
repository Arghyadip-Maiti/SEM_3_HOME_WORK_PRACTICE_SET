import React, { useState } from 'react'
import Badge from './Badge';

const Task = () => {
  
    const [taskArray, setTaskArray] = useState(["Task1","Task2"])
    const [input, setInput] = useState("");

    const handleChange=(e)=>{
        setInput(e.target.value.trim())
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
    
        let copyArray=[...taskArray]
        if(input!==""){
            copyArray.splice(0,0,input);
        }
        setTaskArray(copyArray);

        setInput("");
    }

  return (
    <div className='flex flex-col items-center min-w-screen p-12 gap-8'>
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handleChange} placeholder='Type here' className='border-1 outline-none w-120 pl-1.5 py-1.5 rounded-l'/>
            <button className='bg-black text-white py-2 px-8 border-none ml-4 active:scale-95 rounded-l'>Add</button>
        </form>
        <Badge total={taskArray.length}/>
        {
            taskArray.map((task,idx)=>{
                return(
                    <div key={idx}>{task}</div>
                )
            })
        }
    </div>
  )
}

export default Task