import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/productForm';
import ProductList from '../components/ProductList';


const Main = (props) => {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/products')
        .then(response=>{
            setProducts(response.data);
            setLoaded(true);
        })
        .catch(error => console.error(error));
    },[])
  return (
    <div>
             <ProductForm />
             <hr/>
             {loaded && <ProductList products={products}/>}
    </div>
  )
}

export default Main