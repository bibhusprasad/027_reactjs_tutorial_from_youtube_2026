import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./counterSlice.js";

export let store = configureStore({
  reducer: {
    counterStore: counterSlice
  }
})