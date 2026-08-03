import React, { useReducer } from 'react'

const Quantity = () => {

  const reducer=(state,action)=>{

    if(action.type=='plus'){
        return state+1;
    }else if(action.type=='minus'){
        if(state>1){
        return state-1;
        }else{
            alert('cant do ');
            return state;
        }
    }

  }  

  const[state,dispatch]=useReducer(reducer,1);


  return (
    <div>
        <div>{state}</div>
        <button onClick={()=>{dispatch({type:'plus'})}}>+</button>
        <button onClick={()=>{dispatch({type:'minus'})}}>-</button>

    </div>
  )
}

export default Quantity