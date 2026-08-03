import React, { useReducer } from 'react'

const UseReduce = () => {

  const reducer=(count,action)=>{

    if(action.type=='inc'){
      return count+1;
    }else if(action.type=='dec'){
      return count-1;
    }else if(action.type=='res'){
      return 0;
    }else{
      return count;
    }

  }

  const [count, dispatch] = useReducer(reducer, 0)

  
  return (
    <div>
      <div>{count}</div>
      <button onClick={()=>{dispatch({type:'inc'})}}>+</button>
      <button onClick={()=>{dispatch({type:'dec'})}}>-</button>
      <button onClick={()=>{dispatch({type:'res'})}}>reset</button>
    </div>
  )
}

export default UseReduce