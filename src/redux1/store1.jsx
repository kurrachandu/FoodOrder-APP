import {configureStore} from "@reduxjs/toolkit"

import cartReducer from "./slices/cartSlice"

export const store1 = configureStore({
    reducer : 
    {
        Cat : cartReducer,
        
    }
})

export default store1