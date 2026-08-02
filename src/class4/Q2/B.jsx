import React, { useContext } from 'react'
import Context from './Context';

const B = () => {
  
    let data=useContext(Context);

  return (
    <div>
        B
        <br />
        ⬇️
        <br />
        data:{data}
    </div>
  )
}

export default B