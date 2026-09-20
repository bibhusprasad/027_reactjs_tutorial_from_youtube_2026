import React from 'react'
import {useDispatch} from "react-redux";
import {increment, decrement} from "../../redux/counterSlice.js";
import ProductCart from "./ProductCart.jsx";

export default function Home() {

  let dispatch = useDispatch();

  return (

    <section className='bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12'>
      <h1 className='text-3xl text-center font-bold'>Our Products</h1>
      <div className='mx-auto max-w-[1320px] grid grid-cols-4 gap-8 mt-5'>
        <ProductCart />
      </div>
    </section>
  );
}
