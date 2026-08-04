import React from 'react'
import { useReducer } from 'react';

const UseReduce = () => {

  const reducer=(state,action)=>{

    if(action.type=='plus'){
      return(state+1);
    }else if(action.type=='minus'){
      return(state-1);
    }else if(action.type=='reset'){
      return(0);
    }else{
      return(state);
    }


  }

  const[state,dispatch]=useReducer(reducer,0)

  return (
    <div className='flex flex-col items-center justify-center p-12'>
      <div className='h-124 w-124 border-42 rounded-4xl text-9xl flex justify-center items-center font-extrabold'>
        {state}
      </div>
      <div className='w-124 mt-6 flex justify-between'>
        <button className='bg-black text-white w-3/10 rounded-3xl py-2 text-2xl active:scale-95' onClick={()=>{dispatch({type:'plus'})}}>+1</button>
        <button className='bg-black text-white w-3/10 rounded-3xl py-2 text-2xl active:scale-95' onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
        <button className='bg-black text-white w-3/10 rounded-3xl py-2 text-2xl active:scale-95' onClick={()=>{dispatch({type:'minus'})}}>-1</button>
      </div>
    </div>
  )
}

export default UseReduce