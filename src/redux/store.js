import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reducer/cart";

export default configureStore({
    reducer:{
        cart : CartReducer
    }
})