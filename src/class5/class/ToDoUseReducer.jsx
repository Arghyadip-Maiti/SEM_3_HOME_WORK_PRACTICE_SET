import React, { useReducer } from 'react'

const ToDoUseReducer = () => {

  let data={
    input:'',
    list:[]
  } 

  const reducer=(state,action)=>{

    if(action.type=='inp'){
        return{
            ...state,
            input: action.payload
        }
    }else if(action.type=='add'){
        return{
        ...state,
        list:[...state.list,state.input],
        input:""
        }
    }else if(action.type=='del'){
        return{
            ...state,
            list:state.list.filter((_,id)=>{return id!==action.payload})
        }
    }

  }

  let[state,dispatch]=useReducer(reducer,data);

  return (
    <div>

        <input type="text" placeholder='Enter your Task' className='border-2' onChange={(e)=>{dispatch({type:'inp',payload: e.target.value})}} value={state.input}/>
        <button className='border-2 ml-2' onClick={()=>{dispatch({type:'add'})}}>Add</button>

        {
            state.list.map((ele,idx)=>{
                return(
                    <div onClick={()=>{dispatch({type:"del",payload:idx})}}>{ele}</div>
                )
            })
        }

    </div>
  )
}

export default ToDoUseReducer