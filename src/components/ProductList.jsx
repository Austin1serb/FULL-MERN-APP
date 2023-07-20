import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
  return (
    <div> 
      <h1>Product List:</h1>
      {props.products.map((product,i) => 
      // <br /> Price: {product.price}  <br />Description: {product.description} <br /> 
      <Link to={`/products/${product._id}`} key={i} ><p>{product.title} </p> <br /></Link>
      )}
    </div>
  )
}

export default ProductList;