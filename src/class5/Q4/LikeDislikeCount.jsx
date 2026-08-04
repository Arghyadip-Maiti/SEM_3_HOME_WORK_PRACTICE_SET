import React,{useReducer} from 'react'

const LikeDislikeCount = () => {

  const data={
    likes:0,
    dislikes:0
  }  

  const reducer=(state,action)=>{

    if(action.type=='like'){
        return{
            ...state,
            likes:state.likes+1
        }

    }else if(action.type=='dislike'){
        return{
            ...state,
            dislikes:state.dislikes+1
        }
    }


  }  

  const[state,dispatch]=useReducer(reducer,data);
    
  return (
    <div className='min-h-screen w-full bg-amber-200 flex justify-center items-center'>
        <div className='w-1/3'>
        <div className='flex justify-between w-full mb-1'>
            <div className='w-99/200 h-26 bg-black text-amber-50 flex justify-center items-center text-4xl rounded-2xl'>Likes</div>
            <div className='w-99/200 h-26 bg-black text-amber-50 flex justify-center items-center text-4xl rounded-2xl'>Dislikes</div>
        </div>
        <div className='flex justify-between w-full'>
            <div className='w-99/200 h-56 bg-black text-amber-50 flex justify-center items-center text-9xl rounded-2xl'>{state.likes}</div>
            <div className='w-99/200 h-56 bg-black text-amber-50 flex justify-center items-center text-9xl rounded-2xl'>{state.dislikes}</div>
        </div>
        <div className='flex w-full justify-between mt-1'>
            <button className='bg-black w-99/200 rounded-2xl py-4 justify-center items-center text-4xl active:scale-95' onClick={()=>{dispatch({type:'like'})}} >👍🏼</button>
            <button className='bg-black w-99/200 rounded-2xl py-4 justify-center items-center text-4xl active:scale-95' onClick={()=>{dispatch({type:'dislike'})}} >👎🏼</button>
        </div>
        </div>
    </div>
  )
}

export default LikeDislikeCount