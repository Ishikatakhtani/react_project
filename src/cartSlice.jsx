import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state, actions)=>{
        const mydata= state.cart.filter(key=>key.id==actions.payload.id);
        if (mydata.length>=1)
        {
            alert("This Product Aleready Added!");
        }
        else 
        {
            state.cart.push(actions.payload);
        } 
        },

        qtyIncr:(state, actions)=>{
            for (var i=0; i<state.cart.length; i++)
            {
                if (state.cart[i].id==actions.payload.id)
                {
                    state.cart[i].qnty++;
                }
            }
        },

        qtyDecr:(state, actions)=>{
            for (var i=0; i<state.cart.length; i++)
            {
                if (state.cart[i].id==actions.payload.id)
                {
                    if (state.cart[i].qnty<=1)
                    {
                        alert("Quantity not less than 1")
                    }
                    else 
                    {
                      state.cart[i].qnty--;
                    }
                    
                }
            }
        },

        proRemove:(state, actions)=>{
            state.cart= state.cart.filter(key=>key.id!=actions.payload.id);
        }
    }
})

export const {addToCart, qtyIncr, qtyDecr, proRemove} = cartSlice.actions;
export default cartSlice.reducer;