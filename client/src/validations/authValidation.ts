import { RegisterUserFormData } from "../types";

export const validateEmail = (email: string) => {
    if (!email) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Enter a valid email address";
    return "";
};

export const validateOtp = (otp: string) => {
    if (!otp) return "OTP is required";
    if (otp.length !== 6 || isNaN(Number(otp))) return "Enter a valid 6-digit OTP";
    return "";
};

export const validatePhoneNumber = (phoneNumber: string) => {
    if (!phoneNumber) return "Mobile number is required";
    if (phoneNumber.length !== 10) return "Mobile number must have exactly 10 digits";
    if (phoneNumber === "9311129850") return "Mobile already registered. Sign in instead.";
    return "";
};

export const validateDateOfBirth = (dobDay: string, dobMonth: string, dobYear: string) => {
    if (!dobDay || !dobMonth || !dobYear) return "Complete date of birth is required";

    const day = parseInt(dobDay, 10);
    const month = parseInt(dobMonth, 10);
    const year = parseInt(dobYear, 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) return "Date must be numeric";
    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > new Date().getFullYear())
        return "Enter a valid date";

    const today = new Date();
    const dob = new Date(year, month - 1, day);
    const ageDiff = today.getFullYear() - dob.getFullYear();
    const hasBirthdayPassed = (today.getMonth() > dob.getMonth()) ||
        (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());

    const age = hasBirthdayPassed ? ageDiff : ageDiff - 1;

    if (age < 13) return "You must be at least 13 years old";

    return "";
};


export const validateProfileCompletion = (formData: RegisterUserFormData) => {
    const { firstName, lastName, dobYear, dobDay, dobMonth, gender } = formData
    let errors: { [key: string]: string } = {};

    if (!firstName) errors.firstName = "First name is required";
    if (!lastName) errors.lastName = "Last name is required";

    const dobError = validateDateOfBirth(dobDay, dobMonth, dobYear);
    if (dobError) errors.dateOfBirth = dobError;

    if (!gender) errors.gender = "Please select a gender";

    return errors;
};

export const validateConfirmSecurityPin = (securityPin: string, confirmSecurityPin: string) => {
    let errors: { [key: string]: string } = {};

    if (!securityPin) {
        errors.securityPin = "Security PIN is required.";
    } else if (!/^\d{6}$/.test(securityPin)) {
        errors.securityPin = "Security PIN must be exactly 6 digits.";
    }

    if (!confirmSecurityPin) {
        errors.confirmSecurityPin = "Please confirm your Security PIN.";
    } else if (securityPin !== confirmSecurityPin) {
        errors.confirmSecurityPin = "Security PINs do not match.";
    }

    return errors;
};

export const validateSecurityPin = (securityPin: string) => {
    if (!securityPin) {
        return "Security PIN is required.";
    } else if (!/^\d{6}$/.test(securityPin)) {
        return "Security PIN must be exactly 6 digits.";
    }

    return "";
};