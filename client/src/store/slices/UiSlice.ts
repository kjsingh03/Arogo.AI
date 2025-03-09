import { createSlice } from "@reduxjs/toolkit";
import { UISliceInterface } from "../interfaces";

const initialState: UISliceInterface = {
    navOpen: false,
    loading: false,
    progress: 0
};

const UISlice = createSlice({
    name: "UI",
    initialState,
    reducers: {
        setNavOpen: (state, action) => {
            state.navOpen = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setProgress: (state, action) => {
            state.progress = action.payload;
        },
        resetUI: () => initialState
    }
});

export const { setNavOpen, setLoading, setProgress, resetUI } = UISlice.actions;

export default UISlice.reducer;