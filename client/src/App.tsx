import { Routes, Route } from "react-router-dom";
import { Home, Login, MentalHealthDashboard, PhysicalHealthDashboard, Signup } from "./pages";
import { AuthLayout, MainLayout } from "./components";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/physical" element={<PhysicalHealthDashboard />} />
        <Route path="/mental" element={<MentalHealthDashboard />} />
        <Route path="/messages" element={<Home />} />
        <Route path="/appointments" element={<Home />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  )
}