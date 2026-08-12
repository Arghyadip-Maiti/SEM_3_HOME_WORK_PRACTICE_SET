import React, { useEffect, useState } from 'react'

const Zepto = () => {
  
  const [input, setInput] = useState('') 
  const[apiData, setApiData]=useState([]) 

//------------------------------------------

  useEffect(()=>{

    fetch('https://dummyjson.com/products')
    .then((res)=>{
            return res.json();
        }
    ).then((data)=>{

        setApiData(data.products)
        //console.log(apiData);
    })
  },[])

//-----------------------------------------


  const searchData= async ()=>{

    if(input.trim()==''){
        alert('empty')
        return;
    }

    const res=await fetch(`https://dummyjson.com/products/search?q=${input}`)
    const data=await res.json()

    console.log(data);

    setApiData(data.products)

    return data;

  }

//-------------------------------------------  

  const as=()=>{

    const copyData=[...apiData];
    copyData.sort((a,b)=>{
        return a.price-b.price
    })

    setApiData(copyData)
    
  }
  const ds=()=>{

    const copyData=[...apiData];
    copyData.sort((a,b)=>{
        return b.price-a.price
    })

    setApiData(copyData)

  }

//----------------------------------------  




  return (

    <div>
        <input className='border' type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={searchData}>Search</button>
        <button onClick={as} >Ascending</button>
        <button onClick={ds}>Descending</button>
        {
            apiData?.map((a)=>{
                return(<>
                <div className='border m-4'>
                <h1>{a.id}</h1>
                <h1>{a.title}</h1>
                <img src={a.thumbnail}/>
                <p>{a.price}</p>
                </div>
                </>)
            })
        }
    </div>
  )
}

export default Zepto