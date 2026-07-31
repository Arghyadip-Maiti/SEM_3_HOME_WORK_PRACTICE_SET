import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  
  let{id}=useParams();

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

      let data=products.find((val)=>{
        return val.id==id
      })

  return (
    <div>
        {data.name}
        <br />
        {data.price}
    </div>
  )
}

export default ProductDetails