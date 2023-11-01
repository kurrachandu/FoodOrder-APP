import { createSlice, } from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name: "Crt",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
        const itemIndex = state.findIndex((item) => item.cartItem.id === action.payload.cartItem.id);
          if(itemIndex === -1)
          {
            state.push({ ...action.payload, quantity: 1 });
          }
          else{
            state[itemIndex].quantity += 1;
          }
        },
        removeItem: (state, action) => {
          const itemIndex = state.findIndex((item) => item.cartItem.id === action.payload.cartItem.id);
            console.log(itemIndex);
        if (itemIndex !== -1) {
        state.splice(itemIndex, 1);
        }
        },
      incItem: (state, action) => {
          const itemIndex = state.findIndex((item) => item.cartItem.id === action.payload.cartItem.id);
          if (itemIndex !== -1) 
          {
              state[itemIndex].quantity += 1; // Increase the quantity of the specific item
          } 
          else {
        state.push({ ...action.payload.cartItem, quantity: 1 }); // Add the item to the state with a quantity of 1 if it doesn't exist
          }
      },
      decItem: (state, action) => {

      const itemIndex = state.findIndex((item) => item.cartItem.id === action.payload.cartItem.id);
        console.log(itemIndex);
// if (itemIndex !== -1) {
 // }
      if (itemIndex !== -1) {
         state[itemIndex].quantity += -1;
      if(state[itemIndex].quantity === 0)
      {
        state.splice(itemIndex, 1);
      }
     }
   },
  },
});

export const { decItem, incItem, removeItem, addItem } = cartSlice.actions;
export default cartSlice.reducer;