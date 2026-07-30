import React, { useState } from 'react'
import Display from './Display'
import Controls from './Controls'

const SplitCounter = () => {

  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen min-w-screen flex flex-col justify-center items-center gap-12'>
        <Display count={count}/>
        <Controls count={count} setCount={setCount}/>
    </div>
  )
}

export default SplitCounter