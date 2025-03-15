import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";

export default function ServiceLayout() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="pt-23.5 pl-[106px] min-h-screen flex flex-col justify-between">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};