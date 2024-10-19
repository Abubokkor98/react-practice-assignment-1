/* eslint-disable react/prop-types */
import React from 'react';

const Product = ({product}) => {
  console.log(product);
    const {image, id, title, price, description,rating} = product;
  return (
      <article className="product">
      <img src={image} className='product__img' alt="" />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p className="product__desc">{description}</p>
        <div className='price-rating'>
        <p className='product__price'>Price: $ {price}</p>
        <p className='product__rating'>Rating: {rating.rate}</p>
        </div>
        
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
