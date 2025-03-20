import { useMemo, useState } from 'react'
import HealthVaultCard from '../cards/HealthVaultCard';
import { chevronDown } from '../../assets';
import {  } from '../../store';
import {  useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface VaultDocumentInputModalProps {
    closeModal: () => void;
}

export default function VaultDocumentInputModal({ closeModal }: VaultDocumentInputModalProps) {

    const { healthVaultRecords } = useSelector((state: RootState) => state.data)

    const [activeTab, setActiveTab] = useState<"mental" | "physical">("mental");
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [recentExpanded, setRecentExpanded] = useState(true);
    const [pastMonthExpanded, setPastMonthExpanded] = useState(true);

    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;

    const filteredRecords = useMemo(() => {
        let recs = healthVaultRecords.filter((r) => r.state === activeTab);
        if (activeFilter !== "All") {
            recs = recs.filter((r) => r.tag === activeFilter || r.type === activeFilter);
        }
        if (searchQuery.trim() !== "") {
            const query = searchQuery.toLowerCase();
            recs = recs.filter((r) => r.hospital.toLowerCase().includes(query) || r.doctor.toLowerCase().includes(query) || r.testName.toLowerCase().includes(query));
        }
        return recs;
    }, [activeTab, activeFilter, searchQuery, healthVaultRecords]);

    const recentRecords = useMemo(() => {
        return filteredRecords.filter((r) => {
            const d = new Date(r.timestamp);
            return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
        });
    }, [filteredRecords, currentMonth, currentYear]);

    const pastMonthRecords = useMemo(() => {
        return filteredRecords.filter((r) => {
            const d = new Date(r.timestamp);
            return d.getMonth() !== currentMonth || d.getFullYear() !== currentYear;
        });
    }, [filteredRecords, lastMonth, lastMonthYear]);

    return (
        <div onClick={closeModal} className="w-screen h-screen bg-[rgba(107,107,107,0.50)] fixed top-0 left-0 z-[1000] flex justify-center items-center ">
            <div onClick={(e) => e.stopPropagation()} className="w-full max-w-[80%] h-[95vh] max-2xl:h-[95vh] overflow-y-auto thin-scrollbar bg-[#fafafa] flex flex-col items-center gap-17.5 py-9.5 px-12.5 rounded-[27.1px] max-sm:p-2.5 ">
                <div className="w-full flex justify-between text-2xl">
                    <button onClick={() => setActiveTab("mental")} className={`w-full py-3.5 ${activeTab === "mental" ? "font-semibold text-accent border-b-3 border-b-accent" : "border-b border-b-[#d9d9d9]"}`}>Mental health</button>
                    <button onClick={() => setActiveTab("physical")} className={`w-full py-3.5 ${activeTab === "physical" ? "font-semibold text-accent border-b-3 border-b-accent" : "border-b border-b-[#d9d9d9]"}`}>Physical health</button>
                </div>

                <div className="w-full flex flex-col gap-5 justify-between max-3xl:flex-col">
                    <div className="flex flex-col gap-8 items-end justify-end">
                        <div className="w-full flex items-center justify-between gap-6">
                            <div className="w-full max-w-[458px] h-[52px] flex justify-end items-center border rounded-[61px] border-[#979797] p-0.5">
                                <input type="text" placeholder="Condition, Doctor, Symptoms..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full px-12 h-[23px] bg-transparent text-xl font-light outline-none border-none" />
                                <div className="w-11 h-11 hover:text-accent text-white btn btn-primary p-2.5 rounded-full">
                                    <svg className="size-full object-cover " width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21.0703 21.0703L27.9991 27.9991" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            <div className="w-full xl:w-max flex gap-2 items-center px-2.5 py-2 bg-[rgba(217,217,217,0.60)] rounded-[50px] whitespace-nowrap overflow-x-auto">
                                {["All", "Main", "Uploaded", "Prescription", "Lab Report"].map((option, idx) => (
                                    <button key={"optionFilter" + idx} onClick={() => setActiveFilter(option)} className={`px-9 py-2 rounded-3xl ${activeFilter === option ? "font-medium text-accent bg-stone-50" : "text-gray-700"}`}>
                                        {option}
                                    </button>
                                ))}
                            </div>

                        </div>
                        <button onClick={() => {}} className="w-[148px] h-[52px] btn btn-primary whitespace-nowrap text-[22px] font-medium">
                            Send
                        </button>
                    </div>

                    {
                        recentRecords.length > 0 &&
                        <section className="w-full flex flex-col gap-4.5 py-4.5 overflow-x-auto">
                            <div onClick={() => setRecentExpanded(!recentExpanded)} className="flex gap-4.5 items-center cursor-pointer">
                                <p className="text-xl">Recent</p>
                                <div className="w-8 h-8">
                                    <img src={chevronDown} className={`size-full transition-transform duration-150 ${recentExpanded ? "" : "-rotate-180"}`} alt="" />
                                </div>
                            </div>
                            {recentExpanded && (
                                <div className="w-[1436px] flex flex-col gap-3.75">
                                    {recentRecords.map((record) => (
                                        <HealthVaultCard key={record.id} {...record} />
                                    ))}
                                </div>
                            )}
                        </section>
                    }

                    <div className="w-full h-0.25 bg-[rgba(217,217,217,0.60)]"></div>

                    {
                        pastMonthRecords.length > 0 &&
                        <section className="flex flex-col gap-4.5 w-full py-4.5 overflow-x-auto">
                            <div onClick={() => setPastMonthExpanded(!pastMonthExpanded)} className="flex gap-4.5 items-center cursor-pointer">
                                <p className="text-xl">Past month</p>
                                <div className="w-8 h-8">
                                    <img src={chevronDown} className={`size-full transition-transform duration-150 ${pastMonthExpanded ? "" : "-rotate-180"}`} alt="" />
                                </div>
                            </div>
                            {pastMonthExpanded &&
                                <div className="w-[1436px] flex flex-col gap-3.75">
                                    {pastMonthRecords.map((record) => (
                                        <HealthVaultCard key={record.id} {...record} />
                                    ))}
                                </div>
                            }
                        </section>
                    }
                </div>
            </div>
        </div >
    )
}