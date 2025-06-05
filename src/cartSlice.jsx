

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "mycart",
  initialState: {
    cart: [],
  },
  reducers: {
    addtoCart: (state, actions) => {
      const exists = state.cart.find((item) => item.id === actions.payload.id);
      if (exists) {
        // message.error("Product already added!!!"); // Optional message
        return;
      }
      // Clean price string: remove non-numeric except dot, and parse float
      const cleanPrice = parseFloat(
        String(actions.payload.price).replace(/[^\d.]/g, "")
      ) || 0;

      state.cart.push({
        ...actions.payload,
        price: cleanPrice,
        qnty: 1,
      });
    },

    qntyInc: (state, actions) => {
      const item = state.cart.find((item) => item.id === actions.payload.id);
      if (item) {
        item.qnty++;
      }
    },

    qntyDec: (state, actions) => {
      const item = state.cart.find((item) => item.id === actions.payload.id);
      if (item) {
        if (item.qnty <= 1) {
          // message.error("Quantity cannot be less than 1"); // Optional
          return;
        }
        item.qnty--;
      }
    },

    proDelete: (state, actions) => {
      state.cart = state.cart.filter((item) => item.id !== actions.payload);
    },
  },
});

export const { addtoCart, qntyInc, qntyDec, proDelete } = cartSlice.actions;
export default cartSlice.reducer;
