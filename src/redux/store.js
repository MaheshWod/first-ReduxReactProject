import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./customerSlice";
const store = configureStore({
    reducer: {
        customerSlice
    }
})

export default store