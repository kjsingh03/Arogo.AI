import { DoctorCardProps } from "../../types/props";
import { Appointment, Medication, User } from "../../types";

export interface UISliceInterface {
    navOpen: boolean;
    loading: boolean;
    progress: number;
}

export interface UserSliceInterface {
    user: User;
    // formData: SignUpFormData;
    isAuthenticated: boolean;
    authLoading: boolean;
    error: string | null;
}

export interface dataSliceInterface {
    upcomingAppointmentList: Appointment[];
    medicationList: Medication[];
    consultAgainDoctorList: DoctorCardProps[];
}