import React, { useState } from 'react'

const ToDo = () => {
  
    const [list, setList] = useState([]);

    const [input, setInput] = useState('');

    const handleChange=(e)=>{
        setInput(e.target.value)
    }

    const handleform=(e)=>{

        e.preventDefault();

        //console.log(input)

        let copyList=[...list,input];
        //copyList.splice(0,0,input);

        setList(copyList);

        setInput('')
    }




  return (
    <div className='p-12'>

        <form onSubmit={handleform}>
            <input className='h-12 w-94 border pl-2 text-2xl ' type="text" placeholder='Enter your Task' value={input} onChange={handleChange} />
            <button className='bg-black text-white h-12 w-44 border-none ml-12 active:scale-95 text-2xl'>Add</button>
        </form>

        <div>
            {
                list.map((val,idx)=>{
                    return(
                        <div key={idx}>{val}</div>
                    )
                })
            }

        </div>
        
    </div>
  )
}

export default ToDo