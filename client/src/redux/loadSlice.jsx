import { createSlice } from "@reduxjs/toolkit";

export const loadSlice = createSlice({
    name: 'load',
    initialState: {
        isloading: false
    },
    reducers: {
        setLoad: (state, action) => {
            state.isloading = action.payload;
        }
    }
});

export const { setLoad } = loadSlice.actions;
export default loadSlice.reducer;
