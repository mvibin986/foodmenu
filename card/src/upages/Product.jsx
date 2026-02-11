import React,{ useEffect, useState } from 'react'
import API from "../api/axios";
import "../css/upro.css"

export default function Product() {
const [products, setProducts] = useState([]);

const fetchProducts = async () => {
    const res = await API.get("/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
   <>
   <div>
    {products.map((p) => (
      <div key={p.id} className="pdt">
        <b>{p.name}</b> <b>₹{p.price}</b>  <b>{p.category}</b>
      </div>
    ))}
   </div>
   
   
   
   
   </>
  )
}
