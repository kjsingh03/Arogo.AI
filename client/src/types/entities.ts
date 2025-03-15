export interface UserType {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    gender: string;
    biometricEnabled?: boolean;
    googleAuth?: boolean;
    completedProfile?: boolean;
    createdAt?: string;
    updatedAt?: string
    defaultHomeScreen?: string;
}

export interface DoctorType {
    img: string;
    name: string;
    speciality: string;
    clinic: string;
    location: string;
}

export interface AppointmentType {
    doctor: DoctorType;
    times: string;
    date: string;
    mode: string;
    queue: string;
    id: string;
    fee?: number;
    paid?: boolean;
    symptoms?: string;
    documents?: string[];
}

export interface MedicationType {
    doctor: DoctorType;
    from: number;
    to: number;
    id: string;
    name: string;
    times?: string;
    timeSlot?: { time: string; status: string }[];
    documents?: string[];
}

export interface MentalRecordType {
    id: string;
    timestamp: number;
    type: string;
    prescriptionId: number;
    hospital: string;
    doctor: string;
    doctorId: number;
    testName: string;
    tag: string;
    speciality: string;
    state: "mental" | "physical";
    diagnosis: string;
}