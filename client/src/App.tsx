import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Home } from "./pages";

export default function App() {

  return (
    <>
      <Navbar />
      <div className="pt-18 2xl:pt-23.5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages" element={<Home />} />
          <Route path="/appointments" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}