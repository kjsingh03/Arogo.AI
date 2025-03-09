export interface User {
    email: string;
    firstName: string;
    lastName: string;
    token?: string;
    dp?: string;
}

export interface Doctor {
    img: string;
    name: string;
    speciality: string;
    clinic: string;
    location: string;
}

export interface Appointment {
    doctor: Doctor;
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

export interface Medication {
    doctor: Doctor;
    from:number;
    to:number;
    id: string;
    name: string;
    times?: string;
    timeSlot?: { time: string; status: string }[];
    documents?: string[];
}