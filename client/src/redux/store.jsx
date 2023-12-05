import { configureStore } from "@reduxjs/toolkit";
import { loadSlice } from "./loadSlice";

const store = configureStore ({
    reducer:{
        load: loadSlice.reducer
    }
})

export default store