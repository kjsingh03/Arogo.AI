export interface RegisterUserFormData {
    firstName: string;
    lastName: string;
    gender: string;
    securityPin: string;
    email: string;
    otp: string;
    dateOfBirth: string;
    phoneNumber: string;
    dobDay: string;
    dobMonth: string;
    dobYear: string;
    confirmSecurityPin: string;
    mobileotp: string;
}

export interface LoginUserFormData {
    securityPin: string;
    email: string;
    otp: string;
}

export interface HealthVaultFormData {
    type: string;
    hospital: string;
    doctor: string;
    testName: string;
    speciality: string;
    diagnosis: string;
    prescriptionId: number;
    doctorId: number;
    id: string;
    tag: string;
    state: "mental" | "physical";
    timestamp: number;
}

export interface bookAppointmentFormData {
    symptoms: string;
    isNew: "true" | "false";
    consultationMode: 'online' | 'in-person';
    files: FileList | string[] | null;
    date: Date;
}