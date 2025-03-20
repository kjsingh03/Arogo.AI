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

export interface SampleDoctorType {
    img: string;
    name: string;
    speciality: string;
    clinic: string;
    location: string;
}

export interface AppointmentType {
    doctor: SampleDoctorType;
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
    doctor: SampleDoctorType;
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

export interface DoctorType {
    id: number;
    userId: number;
    displayName: string;
    profilePicture: string;
    specialty: string;
    expertiseAreas: string[];
    clinicName: string;
    education: string;
    credentials: string;
    yearsOfExperience: number;
    medicalRegistrationNumber: string;
    languagesSpoken: string[];
    providesOnlineConsultation: boolean;
    bio: string;
    createdAt: Date|string;
    updatedAt: Date|string;
    doctor: {
        email: string;
        isVerified: boolean;
    },
    email: string;
    isVerified: boolean;
    score: number;
}