import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'

const MemoDemo = () => {
  const [count, setCount] = useState(0)


  let data=useMemo(()=>{

    let res=0;
    for(let i=0;i<1000000000;i++){
      res+=i;
    }

    return res

    },[])

    const fun1=()=>{
        console.log(count);
    }

    let fun2=useCallback(fun1,[])

    let obj={
        id:1,
        name:'ADM'
    }

    localStorage.setItem('key',JSON.stringify(obj))

    let lsdata=localStorage.getItem('key');

    console.log(lsdata)


  return (
    <div>
        <h1>{data}</h1>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}} className='active:scale-95 border-2 '>Add</button>
        <Child fun={fun2}/>
    </div>
  )
}

export default MemoDemo