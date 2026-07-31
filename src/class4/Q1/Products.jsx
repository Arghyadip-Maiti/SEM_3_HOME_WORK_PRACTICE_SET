import React from 'react'
import { useNavigate } from 'react-router-dom';

const Products = () => {

    const navi=useNavigate();

  const products = [
    {
      id: 1,
      name: "iPhone 16",
      price: 80000,
    },
    {
      id: 2,
      name: "Samsung S26",
      price: 70000,
    },
    {
      id: 3,
      name: "OnePlus 14",
      price: 50000,
    },
  ];

  const func=(id)=>{
    console.log(id);
    navi(`/p/${id}`);
  }



  return (
    <div>

        {
            products.map((ele)=>{
                return(
                    <div onClick={()=>func(ele.id)}>{ele.name}</div>
                )
            })
        }

    </div>
  )
}

export default Products