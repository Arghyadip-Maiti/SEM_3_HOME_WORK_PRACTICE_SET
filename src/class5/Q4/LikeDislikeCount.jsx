import React, { useReducer } from 'react'

const LikeDislikeCount = () => {

    const data={
        likes:0,
        dislikes:0
    }

    const reducer = (state, action) => {

    if (action.type === 'like') {
        return {
            ...state,
            likes: state.likes + 1
        };
    } else if (action.type === 'dislike') {
        return {
            ...state,
            dislikes: state.dislikes + 1
        };
    }

    };
  
    const [state, dispatch] = useReducer(reducer, data)


  return (
    <div>
        <div>likes:{state.likes} dislikes:{state.dislikes}</div>
        <button onClick={()=>{dispatch({type:'like'})}}>👍🏼</button>
        <button onClick={()=>{dispatch({type:'dislike'})}}>👎🏼</button>
    </div>
  )
}

export default LikeDislikeCount