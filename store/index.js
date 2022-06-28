// import { createStore } from "redux";
// import cartItems from "../reducers/cartItems";

// export default store = createStore(cartItems)

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartSlice";

const store = configureStore({

    reducer:{
        cart: cartReducer,

    }
})

export default store;