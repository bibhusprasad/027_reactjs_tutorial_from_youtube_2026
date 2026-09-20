import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./counterSlice.js";
import cartSlice from "./cartSlice.js";

export let store = configureStore({
  reducer: {
    counterStore: counterSlice,
    cartSlice: cartSlice
  }
})