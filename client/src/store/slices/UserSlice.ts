import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSliceInterface } from "../../types/slices";
import { UserType } from "../../types";

const initialState: UserSliceInterface = {
    user: { email: '', firstName: '', lastName: '', dateOfBirth: '', gender: '', id: '' },
    isAuthenticated: false,
    authLoading: true,
    error: null
};

const UserSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserType>) => {
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
            state.user = { email: '', firstName: '', lastName: '', dateOfBirth: '', gender: '', id: '' };
            state.isAuthenticated = false;
        }
    }
});

export const { setUser, setAuthLoading, setAuthError, logout } = UserSlice.actions;
export default UserSlice.reducer;