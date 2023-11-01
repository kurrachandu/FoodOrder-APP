import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice ({
    name : "cartItem",
    initialState : [],
    reducers : {
        setCartItem: (state, action) => {
            state.cartItem = action.payload;
          },
          setSearchKeyword: (state, action) => {
            state.searchKeyword = action.payload;
          },
          addItem: (state, action) => {
            const newItem = action.payload;
            state.cartItem.push(newItem);
          },

    }
});

export const { setCartItem, setSearchKeyword,addItem } = productSlice.actions;
export default productSlice.reducer;










// const initialState = {
//   products: [],
//   searchKeyword: '',
// };

// const productSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     setProducts: (state, action) => {
//         state.products = action.payload;
//       },
//       setSearchKeyword: (state, action) => {
//         state.searchKeyword = action.payload;
//       },
//       addItem: (state, action) => {
//         const newItem = action.payload;
//         state.products.push(newItem);
//       },
    
//   },
// });

// export const { setProducts, setSearchKeyword } = productSlice.actions;
// export default productSlice.reducer;
