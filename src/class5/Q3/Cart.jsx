import React, { useReducer } from 'react'

const Cart = () => {

    let data={
        input:'',
        list:[]
    }

    const reducer=(state,action)=>{

        if(action.type=='inp'){
            return{
                ...state,
                input:action.payload
            }
        }else if(action.type=='add'){
            return{
                ...state,
                list:[...state.list,state.input],
                input:''
            }
        }

    }

  const [state, dispatch] = useReducer(reducer, data)

  return (
    <div>
        <input type="text" placeholder='Enter Item Name' className='border' value={state.input} onChange={(e)=>dispatch({type: 'inp',payload: e.target.value})}/>
        <button className='border active:scale-95' onClick={()=>{dispatch({type:'add'})}}>Add</button>
        {
            state.list.map((ele)=>{
                return(<div>{ele}</div>)
            })
        }
    </div>
  )
}

export default Cart