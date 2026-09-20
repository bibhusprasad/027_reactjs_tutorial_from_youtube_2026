import React from 'react'
import {useDispatch} from "react-redux";
import {increment, decrement} from "../../redux/counterSlice.js";

export default function Home() {

  let dispatch = useDispatch();

  return (
    <div>
      <h1>Home</h1>
      <button
        type="button"
        className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none"
        onClick={() => {
          dispatch(increment())
        }}
      >
        Increment
      </button>
      <button
        type="button"
        className="text-white bg-danger box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none"
        onClick={() => {
          dispatch(decrement())
        }}
      >
        Decrement
      </button>

    </div>
  );
}
