// import { createSlice } from "@reduxjs/toolkit";
// // import { message } from "antd";
// const cartSlice = createSlice({
//   name: "mycart",
//   initialState: {
//     cart: [],
//   },
//   reducers: {
//     // addtoCart: (state, actions) => {
//     //   const data = state.cart.filter((key) => key.id == actions.payload.id);
//     //   if (data.length >= 1) {
//     //     message.error("Product aleready added!!!");
//     //   } else {
//     //     state.cart.push({ ...actions.payload, qnty: 1 ,
//     //          price: Number(actions.payload.price) || 0,

//     //     }); 
//     //   }
//     // },


//     addtoCart: (state, actions) => {
//   const data = state.cart.filter((key) => key.id == actions.payload.id);
//   if (data.length >= 1) {
//     message.error("Product already added!!!");
//   } else {
//     const cleanPrice = Number(
//       String(actions.payload.price).replace(/[^0-9.]/g, "")
//     );
//     state.cart.push({
//       ...actions.payload,
//       qnty: 1,
//       price: cleanPrice || 0,
//     });
//   }
// },
//     qntyInc: (state, actions) => {
//       for (var i = 0; i < state.cart.length; i++) {
//         if (state.cart[i].id == actions.payload.id) {
//           state.cart[i].qnty++;
//         }
//       }
//     },
//     qntyDec: (state, actions) => {
//       for (var i = 0; i < state.cart.length; i++) {
//         if (state.cart[i].id == actions.payload.id) {
//           if (state.cart[i].qnty <= 1) {
//             message.error("Quantity not less than 1");
//           } else {
//             state.cart[i].qnty--;
//           }
//         }
//       }
//     },

//     proDelete: (state, actions) => {
//       state.cart = state.cart.filter((key) => key.id != actions.payload);
//     },
//   },
// });
// export const { addtoCart, qntyInc, qntyDec, proDelete } = cartSlice.actions;
// export default cartSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
// import { message } from "antd"; // Uncomment if you use message

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
