import { useSelector } from "react-redux";
import { bellz, file, locationMap } from "../../assets";
import { RootState } from "../../store/store";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

export default function MedicationReminderModal({ closeModal }: { closeModal: () => void }) {

    const { medicationList } = useSelector((state: RootState) => state.data);

    const [searchParams] = useSearchParams();

    const searchParamsObj = useMemo(() => {
        return {
            medicationId: searchParams.get("medicationId"),
        };
    }, [searchParams]);

    const { medicationId } = searchParamsObj;

    const selectedMedication = medicationList.find((med) => med.id === medicationId);

    const getColor = (status: string) => {
        return status === "Missed" ? '#2E2E2E' : status === "Taken" ? '#00CA4E' : '#FFA929'
    }

    const formatDate = (timestamp: number) => {
        const date = new Date(timestamp);
        return {
            day: date.getDate(), 
            weekday: date.toLocaleString("en-US", { weekday: "short" }),
            month: date.toLocaleString("en-US", { month: "long" }) 
        };
    };
    
    const fromDate = formatDate(selectedMedication?.from ?? Date.now());
    const toDate = formatDate(selectedMedication?.to ?? Date.now());
    

    return (
        <div onClick={closeModal} className="w-screen h-screen bg-[rgba(107,107,107,0.50)] fixed top-0 left-0 z-[1000] flex justify-center items-center ">
            <div onClick={(e) => e.stopPropagation()} className="w-[630px] max-sm:w-full max-h-[90%] overflow-y-auto thin-scrollbar bg-[#fafafa] flex flex-col items-center gap-12.5 py-8.5 px-7 rounded-2xl max-sm:p-2.5 ">

                <div className="w-full max-w-118.5 h-82 flex flex-col items-center gap-3.5 py-2.25 shadow-[0px_4px_29.7px_rgba(0,0,0,0.05)]">
                    <p className="w-full text-[22px] leading-[30px] font-bold text-center">
                        Prescribing Doctor
                    </p>

                    <div className="w-full flex flex-col items-center gap-2.5 text-center rounded-3xl ">
                        <div className="w-[134.2px] h-34 overflow-hidden rounded-full ">
                            <img src={selectedMedication?.doctor.img} className="size-full" alt="doctor" />
                        </div>
                        <div className="flex flex-col ">
                            <p className='text-[22px] font-medium leading-[23px] tracking-[0.478px] line-clamp-1 '>{selectedMedication?.doctor.name}</p>
                            <p className='text-lg font-medium leading-[23px] line-clamp-1 '>{selectedMedication?.doctor.speciality}</p>
                        </div>
                        <div className=" ">
                            <p className="text-lg font-semibold">{selectedMedication?.doctor.clinic}</p>
                            <div className="flex items-center leading-[23px] gap-[13.29px] hover:border-b-accent bg-acc border-b-transparent cursor-pointer border-b  ">
                                <p className='text-accent leading-[23px] font-light cursor-pointer line-clamp-1 '>{selectedMedication?.doctor.location}</p>
                                <img src={locationMap} className="xl:w-[28.238px] h-[28.238px] " alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-118.5 flex flex-col items-center gap-7.5">
                    <div className="flex flex-col items-center gap-5.5">
                        <p className="text-lg font-semibold leading-[13.584px] ">{selectedMedication?.name} {selectedMedication?.times ? `(${selectedMedication?.times})` : ''}</p>
                        <div className="flex items-center gap-2.75">
                            {
                                selectedMedication?.timeSlot?.map((slot, idx) => (
                                    <div key={selectedMedication?.name + idx} style={{ color: getColor(slot.status) }} className="flex flex-col items-center ">
                                        <div style={{ borderColor: getColor(slot.status) }} className={`border border- p-[16.293px_12.404px_14.582px_17.378px] rounded-[13px] text-[18px] font-medium leading-[15.8px] tracking-default `}>
                                            <p>{slot.time}</p>
                                        </div>
                                        <p className='text-[12px] leading-[29.17px]'>{slot.status}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                   <div className="h-22.25 flex items-center justify-center gap-5 my-2">
                        <div className="w-24.5 h-full rounded-[17px] border-[2.26px] border-accent flex flex-col justify-center items-center gap-1.75">
                            <p className="text-lg font-semibold leading-[13.584px] tracking-[0.362px] ">{fromDate.day}</p>
                            <p className="text-xs font-medium leading-[13.584px] tracking-[0.24px] ">{fromDate.weekday}</p>
                            <p className="text-[15.848px] font-medium leading-[13.584px] tracking-[0.317px] ">{fromDate.month}</p>
                        </div>
                        <p className="text-accent text-lg font-semibold leading-[13.584px] tracking-[0.362px] ">To</p>
                        <div className="w-24.5 h-full rounded-[17px] border-[2.26px] border-accent flex flex-col justify-center items-center gap-1.75">
                            <p className="text-lg font-semibold leading-[13.584px] tracking-[0.362px] ">{toDate.day}</p>
                            <p className="text-xs font-medium leading-[13.584px] tracking-[0.24px] ">{toDate.weekday}</p>
                            <p className="text-[15.848px] font-medium leading-[13.584px] tracking-[0.317px] ">{toDate.month}</p>
                        </div>
                    </div>

                    <div className={`w-full px-2 overflow-x-auto no-scrollbar flex gap-3 items-center max-sm:flex-col ${selectedMedication?.documents?.length! < 3 ? 'justify-center' : ''}`}                    >
                        {selectedMedication?.documents?.map((data, idx) => (
                            <div key={'pdf' + idx} className="h-19 flex flex-col gap-2.5 items-center p-2.5 text-center rounded-2xl border border-accent border-solid bg-[#fafafa] shadow-[0px_4px_29.7px_rgba(0,0,0,0.05)]">
                                <div className="w-8 h-8 relative">
                                    <img src={file} className="size-full" />
                                </div>
                                <p className="text-sm leading-[13.584px] text-black">{data}</p>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="w-full flex gap-4.75 items-center justify-end mt-5 max-sm:flex-col max-sm:items-center">
                    <button onClick={closeModal} className="max-w-45 p-[14px_8px_14.03px_8px] text-xl rounded-[25.2px] leading-[22.68px] tracking-[-0.567px]  btn btn-primary">
                        Back to home
                    </button>
                    <div className="w-11.25 h-11.25 relative bg-[#FF9D15] p-[7px_6px_6px_7px] rounded-full overflow-hidden ">
                        <img src={bellz} className="size-full object-cover" alt="notification" />
                    </div>
                </div>
            </div>
        </div>
    );
};