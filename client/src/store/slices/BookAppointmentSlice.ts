import { createSlice } from "@reduxjs/toolkit";
import { BookAppointmentSliceInterface } from "../../types";

const initialState: BookAppointmentSliceInterface = {
    doctor: { id: 0, userId: 0, displayName: "", profilePicture: "", specialty: "", expertiseAreas: [], clinicName: "", education: "", credentials: "", yearsOfExperience: 0, medicalRegistrationNumber: "", languagesSpoken: [], providesOnlineConsultation: true, bio: "", createdAt: "", updatedAt: "", doctor: { email: "", isVerified: false, }, email: "", isVerified: false, score: 0, },
    formData: { symptoms: "", isNew: "true", appointmentMode: "in-person", files: null, appointmentDateTime: null, dob: null, firstName: "", lastName: "", gender: "male", phoneNumber: "", visitHour: "", }
};

const BookAppointmentSlice = createSlice({
    name: "bookAppointment",
    initialState,
    reducers: {
        setBookAppointmentFormData: (state, action) => {
            state.formData = { ...state.formData,...action.payload }
        },
        setBookAppointmentDoctor: (state, action) => {
            state.doctor = action.payload
        },
    }
});

export const { setBookAppointmentFormData, setBookAppointmentDoctor } = BookAppointmentSlice.actions;

export default BookAppointmentSlice.reducer;