import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/UserSlice';
import uIReducer from './slices/UiSlice';
import dataReducer from './slices/DataSlices';
import nearbyDoctorReducer from './slices/NearbyDoctorSlice';
import bookAppointmentReducer from './slices/BookAppointmentSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        ui: uIReducer,
        data: dataReducer,
        nearbyDoctors: nearbyDoctorReducer,
        bookAppointment: bookAppointmentReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
