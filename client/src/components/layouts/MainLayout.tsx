import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="pt-18 2xl:pt-23.5 min-h-screen flex flex-col justify-between">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};