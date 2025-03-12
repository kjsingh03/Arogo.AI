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