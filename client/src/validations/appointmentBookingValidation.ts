import { bookAppointmentFormData, PaymentFormData } from "../types/formData";

export const validateBookingAppointmentForm = (formData: bookAppointmentFormData) => {
    const { firstName, lastName, phoneNumber, gender, visitHour, dob, symptoms, isNew, appointmentMode, appointmentDateTime, files } = formData;
    let errors: { [key: string]: string } = {};

    if (!firstName.trim()) errors.firstName = "First name is required";
    if (!lastName.trim()) errors.lastName = "Last name is required";

    if (!phoneNumber.trim()) {
        errors.phoneNumber = "Phone number is required";
    } 
    // else if (!/^\d{10,11,12,13}$/.test(phoneNumber)) {
    //     errors.phoneNumber = "Phone number must be a valid 10-digit number";
    // }

    if (!["male", "female", "prefer not to say"].includes(gender)) {
        errors.gender = "Invalid gender selected";
    }

    if (!visitHour.trim()) {
        errors.visitHour = "Visit hour is required";
    }

    if (!dob) {
        errors.dob = "Date of birth is required";
    } else {
        const age = new Date().getFullYear() - new Date(dob).getFullYear();
        if (age < 0 || age > 120) {
            errors.dob = "Invalid date of birth";
        }
    }

    if (!symptoms.trim()) {
        errors.symptoms = "Please describe your symptoms";
    }

    if (!["true", "false"].includes(isNew)) {
        errors.isNew = "Invalid value for 'isNew' field";
    }

    if (!["online", "in-person"].includes(appointmentMode)) {
        errors.appointmentMode = "Invalid appointment mode";
    }

    if (!appointmentDateTime) {
        errors.appointmentDateTime = "Appointment date and time are required";
    } else if (new Date(appointmentDateTime) < new Date()) {
        errors.appointmentDateTime = "Appointment date must be in the future";
    }

    if (files && Array.isArray(files) && files.length > 5) {
        errors.files = "You can upload up to 5 files only";
    }

    return errors;
};

export const validatePaymentForm = (formData: PaymentFormData) => {
    const { address, city, state, postal, name, number, expiry, cvc } = formData;
    let errors: { [key: string]: string } = {};

    if (!address.trim()) errors.address = "Address is required";
    
    if (!city.trim()) errors.city = "City is required";

    if (!state.trim()) errors.state = "State is required";

    if (!postal.trim()) {
        errors.postal = "Postal code is required";
    } else if (!/^\d{4,6}$/.test(postal)) {
        errors.postal = "Postal code must be 4-6 digits";
    }

    if (!name.trim()) {
        errors.name = "Cardholder’s name is required";
    }

    if (!number.trim()) {
        errors.number = "Card number is required";
    } else if (!/^\d{16}$/.test(number.replace(/\s/g, ""))) {
        errors.number = "Card number must be exactly 16 digits";
    }

    if (!expiry.trim()) {
        errors.expiry = "Expiry date is required";
    } else if (!/^(0[1-9]|1[0-2])\/(\d{2})$/.test(expiry)) {
        errors.expiry = "Expiry format must be MM/YY";
    }

    if (!cvc.trim()) {
        errors.cvc = "CVC is required";
    } else if (!/^\d{3}$/.test(cvc)) {
        errors.cvc = "CVC must be exactly 3 digits";
    }

    return errors;
};
