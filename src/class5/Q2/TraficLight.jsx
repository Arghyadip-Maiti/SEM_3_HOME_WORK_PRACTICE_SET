import React, { useReducer } from 'react'

const TraficLight = () => {

    const reducer=(state,action)=>{

        if(action.type=='next'){
            if(state=='red'){
                return 'yellow'
            }else if(state=='yellow'){
                return 'green'
            }else if(state=='green'){
                return 'red'
            }
        }

    }

    const[state,dispatch]=useReducer(reducer,'red')


  return (
    <div>
        <div className='h-91 w-91' style={{backgroundColor: state}}></div>
        <button onClick={()=>{dispatch({type:'next'})}}>next</button>
    </div>
  )
}

export default TraficLight