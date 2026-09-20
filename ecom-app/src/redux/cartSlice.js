import {createSlice} from "@reduxjs/toolkit";

export let cartSlice = createSlice({

  name: "cart",

  initialState: {
    cart: [],
  },

  reducers: {
    addToCart: (state, action) => {
      let {cartObj} = action.payload;
      state.cart = [cartObj, ...state.cart];
    },
    removeFromCart: (state, action) => {

    },
    changeQuantity: (state, action) => {

    },
  },

})

export const {addToCart, removeFromCart, changeQuantity} = cartSlice.actions;

export default cartSlice.reducer;