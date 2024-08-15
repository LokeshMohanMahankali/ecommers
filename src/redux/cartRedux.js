import { createSlice } from "@reduxjs/toolkit";
import Product from "../pages/Product";

const cartslice = createSlice({
  name: "cart",
  initialState: {
    Product: [],
    quantity: 0,
    total: 0,
  },

  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.Product.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct } = cartslice.actions;
export default cartslice.reducer;
