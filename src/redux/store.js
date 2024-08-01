import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reducer/cart";
import { addApi } from "../service/api";

export default configureStore({
  reducer: {
    cart: CartReducer,
    
   
    [addApi.reducerPath]: addApi.reducer,
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(addApi.middleware),
})

