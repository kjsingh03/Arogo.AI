import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/UserSlice';
import uIReducer from './slices/UiSlice';
import dataReducer from './slices/DataSlices';

const store = configureStore({
    reducer: {
        user: userReducer,
        ui: uIReducer,
        data: dataReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
