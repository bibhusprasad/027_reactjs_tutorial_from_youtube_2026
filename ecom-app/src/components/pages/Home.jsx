import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import ProductCard from "./ProductCard.jsx";
import axios from "axios";

export default function Home() {

  let dispatch = useDispatch();
  let [products, setProducts] = useState([])

  let getAllProducts = () => {
    axios.get(`https://dummyjson.com/products`)
      .then(res => setProducts(res.data.products))
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <section className='bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12'>
      <h1 className='text-3xl text-center font-bold'>Our Products</h1>
      <div className='mx-auto max-w-[1320px] grid grid-cols-4 gap-8 mt-5'>
        {
          products.map((product, index) => {
            return (
              <ProductCard key={index} data={product} />
            )
          })
        }
      </div>
    </section>
  );
}
