// const cartItems = (state = [], action)=>{
//     switch(action.type){
//         case 'ADD_TO_CART':
//             return [...state, action.payload]
//         case 'REMOVE_FROM_CART':
//             return state.filter(cartItem=>cartItem.id !== action.payload.id)
//     }
//     return state
// }

// export default cartItems

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      //   console.log(payload);
      //uid is the unique id of the item
      const { id } = payload;

      const find = state.find((item) => item.id === id);
      //if item wasnt in cart add it
      if (find) {
        return state.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        //if item was in cart increase quantity
        state.push({
          ...payload,
          quantity: 1,
        });
      }
    },
    increment(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    },
    decrement(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );
    },
    removeItem: (state, action) => {
      //   console.log(state);
      //   console.log(state);
      //   console.log(action);
      const itemId = action.payload;
      return state.filter((item) => item.id !== itemId);
    },
    clear(state) {
      return [];
    },
  },
});

export const { addToCart, increment, decrement, removeItem, clear } =
  cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;