// No cart-slice.js

import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../data/product";

interface CartState {
  cart: Product[];
  isCartOpen: boolean; // Adicionamos o estado isCartOpen
}

const initialState: CartState = {
  cart: [],
  isCartOpen: false,
};

export const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addProduct: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },

    removeProduct: (state, action) => {
      const productToRemove = action.payload;
      const cartFiltered = state.cart.filter(
        (product) => product.id !== productToRemove.id
      );

      state.cart = cartFiltered;
    },

    fecharCarrinho: (state) => {
      state.isCartOpen = false;
    },
  },
});

export const { addProduct, removeProduct, fecharCarrinho } = cartSlice.actions;
export default cartSlice.reducer;
