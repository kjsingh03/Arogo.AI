import { setNavOpen, resetUI, setLoading, setProgress } from "./slices/UiSlice";
import { setMedicationList, setConsultAgainDoctorList, setHealthVaultRecords, setUpcomingAppointmentList } from "./slices/DataSlices";
import { setUser, logout, setAuthError, setAuthLoading } from "./slices/UserSlice";
import { setNearbyDoctor } from "./slices/NearbyDoctorSlice";

export {
    setNavOpen, resetUI, setLoading, setProgress,
    setMedicationList, setConsultAgainDoctorList, setHealthVaultRecords, setUpcomingAppointmentList,
    setUser, logout, setAuthError, setAuthLoading,
    setNearbyDoctor,
}