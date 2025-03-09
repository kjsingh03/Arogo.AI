import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Home, MentalHealthDashboard, PhysicalHealthDashboard } from "./pages";

export default function App() {

  return (
    <>
      <Navbar />
      <div className="pt-18 2xl:pt-23.5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/physical" element={<PhysicalHealthDashboard />} />
          <Route path="/mental" element={<MentalHealthDashboard />} />
          <Route path="/messages" element={<Home />} />
          <Route path="/appointments" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}