import React, { useReducer } from 'react'

const Quantity = () => {

  const reducer=(state,action)=>{

    if(action.type=='plus'){
      return(state+1);
    }else if(action.type=='minus'){
      if(state>1){
        return(state-1);
      }else{
        alert('Cant go beyond 1');
        return(state);
      }
    }
  }

  const[state,dispatch]=useReducer(reducer,1);

  return (
    <div className='flex justify-center items-center min-h-screen w-full bg-amber-950'>
      <div className='flex w-9/10 flex justify-between'>
        <button className='bg-amber-400 w-32/100 h-54 text-9xl items-center active:scale-95 cursor-pointer rounded-bl-full rounded-tl-full' onClick={()=>{dispatch({type:'plus'})}}>+</button>
        <div className='bg-amber-400 w-35/100 h-54 flex justify-center text-9xl items-center '>🛒: {state}</div>
        <button className='bg-amber-400 w-32/100 h-54 text-9xl items-center active:scale-95 cursor-pointer rounded-br-full rounded-tr-full' onClick={()=>{dispatch({type:'minus'})}}>-</button>
      </div>
    </div>
  )
}

export default Quantity