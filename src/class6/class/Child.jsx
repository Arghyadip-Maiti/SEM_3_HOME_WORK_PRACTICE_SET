import React, { memo } from 'react'

const Child = (props) => {
  
  console.log('heheheehe')  

  props.fun()

  return (
    <div>Child</div>
  )
}

export default memo(Child) 