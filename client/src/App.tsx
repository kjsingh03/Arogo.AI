import { Routes, Route } from "react-router-dom";
import { ArogoCardServicePage, Assessment, BookAppointment, BookTestServicePage, ConsultOnlineServicePage, HealthVaultServicePage, Home, Login, MedicineAlertServicePage, MentalHealthDashboard, MentalHealthServicePage, NotFound, PhysicalHealthDashboard, DoctorList, Signup } from "./pages";
import { AuthLayout, MainLayout, ServiceLayout } from "./components";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/physical" element={<PhysicalHealthDashboard />} />
        <Route path="/mental" element={<MentalHealthDashboard />} />
        <Route path="/messages" element={<Home />} />
        <Route path="/appointments" element={<Home />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/doctor-list" element={<DoctorList />} />
        <Route path="/*" element={<NotFound />} />
      </Route>

      <Route path="/" element={<ServiceLayout />}>
        <Route path="/service/mental-health" element={<MentalHealthServicePage />} />
        <Route path="/service/medicine-alert" element={<MedicineAlertServicePage />} />
        <Route path="/service/health-vault" element={<HealthVaultServicePage />} />
        <Route path="/service/book-test" element={<BookTestServicePage />} />
        <Route path="/service/consult-online" element={<ConsultOnlineServicePage />} />
        <Route path="/service/arogo-card" element={<ArogoCardServicePage />} />
      </Route>

      <Route path="/" element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>


    </Routes>
  )
}