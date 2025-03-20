import { createSlice } from "@reduxjs/toolkit";
import { NearbyDoctorSliceInterface } from "../../types";

const initialState: NearbyDoctorSliceInterface = {
    doctors: []
};

const nearbyDoctorSlice = createSlice({
    name: "nearby",
    initialState,
    reducers: {
        setNearbyDoctor: (state, action) => {
            state.doctors = action.payload
        },
    }
});

export const { setNearbyDoctor } = nearbyDoctorSlice.actions;

export default nearbyDoctorSlice.reducer;