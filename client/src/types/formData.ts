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
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: 'male' | 'female' | 'prefer not to say';
    visitHour: string;
    dob: Date | null;
    symptoms: string;
    isNew: "true" | "false";
    appointmentMode: 'online' | 'in-person';
    files: FileList | string[] | null;
    appointmentDateTime: Date | null;
}

export interface PaymentFormData{
    address:string;
    city:string;
    state:string;
    postal:string;
    name:string;
    number:string;
    expiry:string;
    cvc:string;
}