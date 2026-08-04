import React, { useReducer } from 'react'

const TraficLight = () => {

  const data={
    color1:'red',
    color2:'white',
    color3:'white'
  }   
  
  const reducer=(state,action)=>{

    if(action.type=='next'){

        if(state.color1=='red'){
            return{
                ...state,
                color1:'white',
                color2:'yellow'
            }
        }else if(state.color2=='yellow'){
            return{
                ...state,
                color2:'white',
                color3:'green'
            }
        }else if(state.color3=='green'){
            return{
                ...state,
                color3:'white',
                color1:'red'
            }
        }

    }
  }

  const[state,dispatch]=useReducer(reducer,data);

  return (
    <div className='bg-olive-400 min-h-screen w-full flex flex-col justify-center items-center gap-1'>
        <div className='bg-black w-44 h-12 '></div>
        <div className='bg-black h-88 w-32 flex flex-col justify-around items-center'>
            <div style={{backgroundColor: state.color1}} className='w-26 h-26 rounded-full'></div>
            <div style={{backgroundColor: state.color2}} className='w-26 h-26 rounded-full'></div>
            <div style={{backgroundColor: state.color3}} className='w-26 h-26 rounded-full'></div>
        </div>
        <button className='bg-cyan-400 py-3 rounded-full px-12 text-4xl mt-12 active:scale-95' onClick={()=>{dispatch({type:'next'})}} >Next<br/>🔴 ➡️ 🟡 ➡️ 🟢</button>
    </div>
  )
}

export default TraficLight