import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Sidebar from "./sidebar/Sidebar";
import HomeFAQ from "./faq/HomeFAQ";

// Layout

import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import ServiceLayout from "./layouts/ServiceLayout";

// Hero Sections
import PhysicalDashboardMainHero from "./hero/physicalDashboard/MainHero";
import StepsHero from "./hero/physicalDashboard/StepsHero";
import WellBeingHero from "./hero/physicalDashboard/WellBeingHero";
import AppointmentsHero from "./hero/physicalDashboard/AppointmentsHero";
import ConsultAgainHero from "./hero/physicalDashboard/ConsultAgainHero";
import SpecialityHero from "./hero/physicalDashboard/SpecialityHero";

// Cards
import DoctorCard from "./cards/UpcomingDoctorCard";
import NearbyDoctorCard from "./cards/NearbyDoctorCard";
import MedicationCard from "./cards/MedicationCard";
import UpcomingAppointmentCard from "./cards/UpcomingAppointmentCard";
import HealthVaultCard from "./cards/HealthVaultCard";

// Modals
import UpcomingAppointmentModal from "./modals/UpcomingAppointmentModal";
import MedicationReminderModal from "./modals/MedicationReminderModal";
import DeleteHealthVaultModal from "./modals/DeleteHealthVaultModal";
import AddHealthVaultModal from "./modals/AddHealthVaultModal";
import AIInsightModal from "./modals/AIInsightModal";
import ShareRecordsModal from "./modals/ShareRecordsModal";
import ViewPrescriptionModal from "./modals/ViewPrescriptionModal";
import VaultDocumentInputModal from "./modals/VaultDocumentInputModal";

// Other Utils
import IconList from "./utils/IconList";
import AuthHappySection from "./utils/AuthHappySection";

// Input
import Input from "./inputs/Input";
import PinInput from "./inputs/PinInput";

// Select
import { CustomSelectButton } from "./select/CustomSelectButton";
import AppointmentCalender from "./utils/AppointmentCalender";

export {
    Navbar, Footer, HomeFAQ, Sidebar,
    AuthLayout, MainLayout, ServiceLayout,
    StepsHero, PhysicalDashboardMainHero, AppointmentsHero, WellBeingHero, ConsultAgainHero, SpecialityHero,
    DoctorCard, MedicationCard, UpcomingAppointmentCard, HealthVaultCard, NearbyDoctorCard,
    UpcomingAppointmentModal, MedicationReminderModal, DeleteHealthVaultModal, AddHealthVaultModal, AIInsightModal, ShareRecordsModal, ViewPrescriptionModal, VaultDocumentInputModal,
    IconList, AuthHappySection, AppointmentCalender,
    Input, PinInput,
    CustomSelectButton,
}