import { useEffect, useState, useRef } from "react";
import { aiIcon, ellipsis } from "../../assets";
import { MentalRecordType } from "../../types";

export default function HealthVaultCard({ timestamp, type, prescriptionId, hospital, doctor, testName, tag, speciality, showDeleteModal, handleViewPrescription, handleAIInsight }: MentalRecordType & { showDeleteModal?: () => void; handleViewPrescription?: () => void, handleAIInsight?: () => void }) {

  const dateObj = new Date(timestamp);

  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <article className="w-full h-[143px] relative flex justify-between items-center px-10 py-4.5 border bg-[#f7f8f8] rounded-[42px] border-[rgba(217,217,217,0.60)]">
      <div className="w-[6%] flex flex-col items-center gap-2.5 text-accent">
        <p className="text-lg leading-[23px] tracking-[0.28px]">{dateObj.toLocaleString(undefined, { weekday: "short" })}</p>
        <p className="text-[32px] font-medium leading-[23px] tracking-[0.28px]">{dateObj.getDate()}</p>
        <p className="text-sm leading-[23px] tracking-[0.28px]">{dateObj.toLocaleString(undefined, { month: "short", year: "numeric" })}</p>
      </div>

      <div className="h-full w-0.25 bg-[rgba(217,217,217,0.60)]"></div>

      <div className="w-[10%] flex flex-col gap-3 items-center text-center">
        <div className="w-full border border-accent text-accent px-6 py-1.25 rounded-[45px]">{type}</div>
        <p className="text-xl leading-[15.815px]">ID : {prescriptionId}</p>
      </div>

      <p className="w-[15%] text-xl font-semibold leading-[25px] line-clamp-1">{hospital}</p>

      <div className="w-[12%] flex flex-col text-center items-center">
        <p className="text-[22px] font-semibold tracking-[-1px] leading-[50.4px] line-clamp-1">{doctor}</p>
        <p className="text-lg tracking-[0.36px] leading-[23px] line-clamp-1">{speciality}</p>
      </div>

      <p className="w-[10%] text-lg font-light leading-[20px] line-clamp-1">{testName}</p>

      <div className="w-[11%] flex justify-center text-center">
        <p className="w-max text-[#FF8630] bg-[rgba(255,134,48,0.20)] border border-[#FF8630] rounded-[45px] px-7.25 py-1.25">{tag}</p>
      </div>

      {
        handleViewPrescription && showDeleteModal &&
        <>
          <div onClick={handleAIInsight} className="cursor-pointer flex flex-col items-center">
            <div className="w-11.5 h-11.5">
              <img src={aiIcon} className="size-full object-cover" alt="" />
            </div>
            <p className="text-accent text-lg leading-[20px] font-medium">AI Insights</p>
          </div>

          {showModal && (
            <div
              ref={modalRef}
              className="w-[190px] h-[106px] flex flex-col items-center text-center justify-center overflow-hidden rounded-2xl absolute top-4 right-20 bg-[#f7f8f8] border border-[rgba(217,217,217,0.60)] shadow-[0px_4px_29.7px_0px_rgba(0,0,0,0.05)]"
            >
              <p onClick={handleViewPrescription} className="w-full text-lg leading-[54px] hover:bg-[#e9e9e980] cursor-pointer">
                View prescription
              </p>
              <div className="w-full h-0.25 bg-[rgba(217,217,217,0.60)]"></div>
              <p onClick={showDeleteModal} className="w-full text-lg leading-[54px] hover:bg-[#e9e9e980] cursor-pointer">
                Delete
              </p>
            </div>
          )}

          <button
            ref={buttonRef}
            onClick={() => setShowModal(!showModal)}
            className="w-[43px] h-[43px] flex items-center justify-center cursor-pointer"
          >
            <img src={ellipsis} className="size-full object-cover" alt="" />
          </button>
        </>
      }
    </article>
  );
}
