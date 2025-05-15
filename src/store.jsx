import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./pages/authSlice";
const store = configureStore({
    reducer:{
        mycart:cartReducer,
        auth:authReducer
    }
})
export default store;