import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSliceInterface } from "../interfaces";
import { User } from "../../types";

const initialState: UserSliceInterface = {
    user: { email: '', firstName: '', lastName: '', token: '' },
    isAuthenticated: false,
    authLoading: true,
    error: null
};

const UserSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
        },
        // setSignUpFormdata: (state, action) => {
        //     state.formData = action.payload;
        // },
        setAuthLoading: (state, action: PayloadAction<boolean>) => {
            state.authLoading = action.payload;
        },
        setAuthError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = { email: '', dp: '', firstName: '', lastName: '', token: '' };
            state.isAuthenticated = false;
        }
    }
});

export const { setUser, setAuthLoading, setAuthError, logout } = UserSlice.actions;
export default UserSlice.reducer;