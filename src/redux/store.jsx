import { configureStore } from "@reduxjs/toolkit";
import cartreduser from "./cartRedux";

export default configureStore({
  reducer: {
    cart: cartreduser,
  },
});
