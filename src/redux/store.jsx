import { configureStore } from "@reduxjs/toolkit";
import cartreduser from "./cartRedux";
import useReducer from "./userRedux";

export default configureStore({
  reducer: {
    cart: cartreduser,
    user: useReducer,
  },
});
