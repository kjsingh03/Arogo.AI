import { useEffect, useMemo, useState } from "react";
import { chevronDown } from "../assets";
import { AddHealthVaultModal, AIInsightModal, DeleteHealthVaultModal, HealthVaultCard, ShareRecordsModal, ViewPrescriptionModal } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setHealthVaultRecords } from "../store";

const filterOptions = ["All", "Main", "Uploaded", "Prescription", "Lab Report"];

export default function HealthVaultServicePage() {

  const { healthVaultRecords } = useSelector((state: RootState) => state.data)
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState<"mental" | "physical">("mental");
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [recentExpanded, setRecentExpanded] = useState(true);
  const [pastMonthExpanded, setPastMonthExpanded] = useState(true);
  const [deleteId, setDeleteId] = useState<string>("");
  const [showDeletModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [showViewPrescriptionModal, setShowViewPrescriptionModal] = useState<boolean>(false);
  const [showAIInsightModal, setShowAIInsightModal] = useState<boolean>(false);
  const [showShareRecordsModal, setShowShareRecordsModal] = useState<boolean>(false);

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

  const handleDeleteRecord = () => {
    let newhealthVaultRecords = healthVaultRecords.filter(data => data.id !== deleteId);
    dispatch(setHealthVaultRecords(newhealthVaultRecords));
    setDeleteId("")
    setShowDeleteModal(false)
  }
``
  const handleViewPrescription = (id: string) => {
    console.log(id)
    setShowViewPrescriptionModal(true)
  }

  const handleAIInsight = (id: string) => {
    console.log(id)
    setShowAIInsightModal(true)
  }

  useEffect(() => {
    if (showAddModal || showDeletModal || showAIInsightModal) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showAddModal, showDeletModal, showAIInsightModal]);


  return (
    <>
      {
        showDeletModal &&
        <DeleteHealthVaultModal closeModal={() => { setShowDeleteModal(false); setDeleteId("") }} handleDeleteRecord={handleDeleteRecord} />
      }

      {
        showAddModal &&
        <AddHealthVaultModal closeModal={() => setShowAddModal(false)} />
      }

      {
        showViewPrescriptionModal &&
        <ViewPrescriptionModal closeModal={() => setShowViewPrescriptionModal(false)} handleShare={() => { setShowShareRecordsModal(true); setShowViewPrescriptionModal(false) }} />
      }

      {
        showAIInsightModal &&
        <AIInsightModal closeModal={() => setShowAIInsightModal(false)} handleShare={() => { setShowShareRecordsModal(true); setShowAIInsightModal(false) }} />
      }

      {
        showShareRecordsModal &&
        <ShareRecordsModal closeModal={() => setShowShareRecordsModal(false)} />
      }


      <div className="flex flex-col gap-4 py-7.5 px-12.25">
        <div className="h-16 flex items-center gap-6.25">
          <div className="h-full bg-accent rounded-2xl w-1"></div>
          <p className="text-[32px] font-semibold leading-[26px] tracking-[0.64px]">Health Vault</p>
        </div>

        <main className="flex flex-col gap-7 px-6.5 py-3.5 rounded-3xl border border-gray-200 bg-[#f7f8f8] max-md:pb-24">
          <div className="w-full flex justify-between text-2xl">
            <button onClick={() => setActiveTab("mental")} className={`w-full py-3.5 ${activeTab === "mental" ? "font-semibold text-accent border-b-3 border-b-accent" : "border-b border-b-[#d9d9d9]"}`}>Mental health</button>
            <button onClick={() => setActiveTab("physical")} className={`w-full py-3.5 ${activeTab === "physical" ? "font-semibold text-accent border-b-3 border-b-accent" : "border-b border-b-[#d9d9d9]"}`}>Physical health</button>
          </div>

          <div className="w-full flex flex-col gap-5 justify-between max-3xl:flex-col">
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
                {filterOptions.map((option, idx) => (
                  <button key={"optionFilter" + idx} onClick={() => setActiveFilter(option)} className={`px-9 py-2 rounded-3xl ${activeFilter === option ? "font-medium text-accent bg-stone-50" : "text-gray-700"}`}>
                    {option}
                  </button>
                ))}
              </div>

              <button onClick={() => setShowAddModal(true)} className="w-[148px] h-[52px] btn btn-primary whitespace-nowrap text-[22px] font-medium">
                Add new
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
                  <div className="w-[1620px] flex flex-col gap-3.75">
                    {recentRecords.map((record) => (
                      <HealthVaultCard key={record.id} {...record} showDeleteModal={() => { setShowDeleteModal(true); setDeleteId(record.id) }} handleViewPrescription={() => handleViewPrescription(record.id)} handleAIInsight={() => handleAIInsight(record.id)} />
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
                  <div className="w-[1620px] flex flex-col gap-3.75">
                    {pastMonthRecords.map((record) => (
                      <HealthVaultCard key={record.id} {...record} showDeleteModal={() => { setShowDeleteModal(true); setDeleteId(record.id) }} handleViewPrescription={() => handleViewPrescription(record.id)} handleAIInsight={() => handleAIInsight(record.id)} />
                    ))}
                  </div>
                }
              </section>
            }

          </div>
        </main>
      </div>
    </>
  );
};
