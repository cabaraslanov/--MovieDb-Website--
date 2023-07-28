import { configureStore } from "@reduxjs/toolkit";
import countertSlice from "./feature/countertSlice";

export default configureStore({
    reducer:{
        counterData:countertSlice
    }
})