import { AppointmentType, Chat, DoctorType, MedicationType, MentalRecordType, UserType } from "./entities";
import { bookAppointmentFormData } from "./formData";
import { DoctorCardProps } from "./props";

export interface UISliceInterface {
    navOpen: boolean;
    loading: boolean;
    progress: number;
}

export interface UserSliceInterface {
    user: UserType;
    isAuthenticated: boolean;
    authLoading: boolean;
    error: string | null;
}

export interface dataSliceInterface {
    upcomingAppointmentList: AppointmentType[];
    medicationList: MedicationType[];
    consultAgainDoctorList: DoctorCardProps[];
    healthVaultRecords: MentalRecordType[];
}

export interface NearbyDoctorSliceInterface {
    doctors: DoctorType[];
}

export interface BookAppointmentSliceInterface {
    doctor: DoctorType;
    formData: bookAppointmentFormData;
}

export interface ChatSliceInterface {
    chats: Chat[];
    activeChat: Chat | null;
}
