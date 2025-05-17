import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";
import authReducer from "./pages/authSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
const persistConfig = {
    key: "root",
    storage,
  };
const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedwish = persistReducer(persistConfig, wishlistReducer);
const store = configureStore({
    reducer:{
        mycart: persistedCartReducer,
         wishlist: persistedwish,
        auth:authReducer
    }
})
export const persistor = persistStore(store);

export default store;