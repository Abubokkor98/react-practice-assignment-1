/* eslint-disable react/prop-types */
import React from 'react'
import Product from './Product';


export default function Products({products}) {
  // console.log(products);

  return (
    <div className='products'>
      {
       products.map((product, id) => <Product product={product} key={id}></Product>

       )
      }

    </div>
  )
}
