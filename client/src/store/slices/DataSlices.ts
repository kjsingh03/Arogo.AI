import { createSlice } from "@reduxjs/toolkit";
import { consultAgainDoctor, doctor1, upcomingDoctor, vcDoctor } from "../../assets";
import { dataSliceInterface } from "../interfaces";

const initialState: dataSliceInterface = {
    upcomingAppointmentList: [{ doctor: { img: upcomingDoctor, name: "Dr. Maria Waston", speciality: "Multi-speciality", clinic: "Health Clinic name", location: "632 Broadway, New York, NY 10012" }, times: "12:00AM", date: "9 January", mode: "Online", queue: "23", id: "id1", documents: ['Prescription.pdf', 'Prescription.pdf', 'Prescription.pdf'], fee: 900, paid: true, symptoms: ' A bacterial infection caused by the Brucella species, typically transmitted from animals to humans through unpasteurized dairy products or direct contact with infected animals. Symptoms include fever, joint pain, sweating, and fatigue.' }, { doctor: { img: doctor1, name: "Dr. M. W.", speciality: "Orthologist", clinic: "Clinic name", location: "New Jersey, NY 10012," }, times: "7:00PM", date: "29 March", mode: "Offine", queue: "1", id: "id2", documents: ['Prescription.pdf', 'Prescription.pdf', 'Prescription.pdf', 'Prescription.pdf', 'Prescription.pdf', 'Prescription.pdf', 'Prescription.pdf', 'Prescription.pdf'], fee: 500, paid: false, symptoms: 'A bacterial infection caused by the Brucella species, typically transmitted from animals to humans through unpasteurized dairy products or direct contact with infected animals. Symptoms include fever, joint pain, sweating, and fatigue. A bacterial infection caused by the Brucella species, typically transmitted from animals to humans through unpasteurized dairy products or direct contact with infected animals. Symptoms include fever, joint pain, sweating, and fatigue. A bacterial infection caused by the Brucella species, typically transmitted from animals to humans through unpasteurized dairy products or direct contact with infected animals. Symptoms include fever, joint pain, sweating, and fatigue.' }],

    medicationList : [{ doctor: { img: upcomingDoctor, name: "Dr. Maria Waston", speciality: "Multi-speciality", clinic: "Health Clinic name", location: "632 Broadway, New York, NY 10012" }, id: "med1", name: "Paroxetine 20 mg", times: "Twice daily", timeSlot: [{ time: "10:00AM", status: "Missed" }, { time: "10:00PM", status: "Upcoming" }], documents: ["Prescription.pdf", "Prescription.pdf"], from: 1721239202000, to: 1741239202000 }, { doctor: { img: upcomingDoctor, name: "Dr. Maria Waston", speciality: "Multi-speciality", clinic: "Health Clinic name", location: "632 Broadway, New York, NY 10012" }, id: "med2", name: "Paroxetine 50 mg", timeSlot: [{ time: "10:00PM", status: "Upcoming" }], documents: ["Prescription.pdf"], from: 1711239202000, to: 1741239702000 }, { doctor: { img: upcomingDoctor, name: "Dr. Maria Waston", speciality: "Multi-speciality", clinic: "Health Clinic name", location: "632 Broadway, New York, NY 10012" }, id: "med3", name: "Paroxetine 20 mg", times: "Twice daily", timeSlot: [{ time: "01:00PM", status: "Taken" }, { time: "10:00PM", status: "Upcoming" }], documents: ["Prescription.pdf", "Prescription.pdf", "Prescription.pdf", "Prescription.pdf", "Prescription.pdf"],from:1740259202000,to: 1741259202000}, { doctor: { img: upcomingDoctor, name: "Dr. Maria Waston", speciality: "Multi-speciality", clinic: "Health Clinic name", location: "632 Broadway, New York, NY 10012" }, id: "med4", name: "Paroxetine 50 mg", times: "Thrice daily", timeSlot: [{ time: "10:00AM", status: "Missed" }, { time: "01:00PM", status: "Taken" }, { time: "10:00PM", status: "Upcoming" }], documents: ["Prescription.pdf", "Prescription.pdf", "Prescription.pdf"], from: 1741239002000, to: 1741639202000 }],

    consultAgainDoctorList: [{ img: consultAgainDoctor, name: 'Nitasga singh bali', clinic: 'Grace clinic', experience: 2, specialization: 'specialization', rate: '$20 for 50 mins', id: 'doc1' }, { img: vcDoctor, name: 'Doc Nitasga singh bali', clinic: 'Clinic', experience: 2, specialization: 'Orthologist', rate: '$20 for 50 mins', id: 'doc1' }, { img: consultAgainDoctor, name: 'Nitasga singh bali', clinic: 'Grace clinic', experience: 2, specialization: 'specialization', rate: '$20 for 50 mins', id: 'doc1' }, { img: vcDoctor, name: 'Doc Nitasga singh bali', clinic: 'Clinic', experience: 2, specialization: 'Orthologist', rate: '$20 for 50 mins', id: 'doc1' }, { img: consultAgainDoctor, name: 'Nitasga singh bali', clinic: 'Grace clinic', experience: 2, specialization: 'specialization', rate: '$20 for 50 mins', id: 'doc1' }]
};

const dataSlice = createSlice({
    name: "UI",
    initialState,
    reducers: {
        setUpcomingAppointmentList: (state, action) => {
            state.upcomingAppointmentList = action.payload
        },
        setMedicationList: (state, action) => {
            state.medicationList = action.payload
        }
    }
});

export const { setMedicationList, setUpcomingAppointmentList } = dataSlice.actions;

export default dataSlice.reducer;