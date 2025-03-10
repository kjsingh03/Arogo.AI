import { useSelector } from "react-redux";
import { file, locationMap, pencil } from "../../assets";
import { RootState } from "../../store/store";
import { Appointment } from "../../types";
import { useSearchParams } from "react-router-dom";

function UpcomingAppointmentModal({ closeModal }: { closeModal: () => void }) {

    const { upcomingAppointmentList } = useSelector((state: RootState) => state.data);

    const [searchParams] = useSearchParams();

    const appointmentId = searchParams.get("appointmentId");

    const selectedAppointment = upcomingAppointmentList.find((appointment: Appointment) => appointment.id === appointmentId);


    return (
        <div onClick={closeModal} className="w-screen h-screen bg-[rgba(107,107,107,0.50)] fixed top-0 left-0 z-[1000] flex justify-center items-center ">
            <div onClick={(e) => e.stopPropagation()} className="w-[630px] max-sm:w-full h-[90%] overflow-y-auto thin-scrollbar bg-[#fafafa] flex flex-col items-center gap-4 py-6 px-15 rounded-2xl max-sm:p-2.5 ">
                <p className="w-full max-w-118.5 text-2xl leading-[29.71px] font-bold text-center">
                    Upcoming appointments Details
                </p>

                <div className="w-118.5 min-h-72.5 py-[10.5px] flex flex-col items-center gap-2.5 text-center rounded-3xl shadow-[0px_4px_29.7px_rgba(0,0,0,0.05)]">
                    {/* <div className="w-full max-w-118.5 flex flex-col items-center gap-2.5 text-center rounded-3xl shadow-[0px_4px_29.7px_rgba(0,0,0,0.05)]"> */}
                        <div className="w-[134.2px] h-34 overflow-hidden rounded-full ">
                            <img src={selectedAppointment?.doctor.img} className="size-full" alt="doctor" />
                        </div>
                        <div className="flex flex-col ">
                            <p className='text-[22px] font-medium leading-[23px] tracking-[0.478px] line-clamp-1 '>{selectedAppointment?.doctor.name}</p>
                            <p className='text-lg font-medium leading-[23px] line-clamp-1 '>{selectedAppointment?.doctor.speciality}</p>
                        </div>
                        <div className=" ">
                            <p className="text-lg font-semibold leading-[23px]">{selectedAppointment?.doctor.clinic}</p>
                            <div className="flex items-center leading-[23px] gap-[13.29px] hover:border-b-accent bg-acc border-b-transparent cursor-pointer border-b  ">
                                <p className='text-accent leading-[23px] font-light cursor-pointer line-clamp-1 '>{selectedAppointment?.doctor.location}</p>
                                <img src={locationMap} className="xl:w-[28.238px] h-[28.238px] " alt="" />
                            </div>
                        </div>
                    {/* </div> */}
                </div>

                <div className="flex gap-4 items-center mx-0">
                    <div className="max-w-[338px] min-h-[147px] max-h-35 flex flex-col items-center gap-2.5">
                        <div className="h-11.25 flex items-center gap-3.75">
                            <p className="min-w-24 text-center leading-[13.584px] p-[16px_20px_14px_20px] font-medium text-lg text-accent rounded-xl border border-accent border-solid">{selectedAppointment?.times}</p>
                            <p className="min-w-35 text-center leading-[13.584px] p-[16px_20px_14px_20px] font-medium text-lg text-accent rounded-xl border border-accent border-solid">{selectedAppointment?.date}</p>
                            <p className="text-lg font-medium">{selectedAppointment?.mode}</p>
                        </div>
                        <p className={`w-full h-21.25 p-5 text-xl flex items-center justify-center rounded-3xl border ${selectedAppointment?.paid ? 'text-[#81d14f] border-[#81d14f] bg-[#DFFFCC]' : 'text-[#FF4A5C] border-[#FF4A5C] bg-[#FFDCDC]'} `}>
                            Consultation Fee {selectedAppointment?.fee} {selectedAppointment?.paid ? 'Paid' : 'Due'}
                        </p>
                    </div>
                    <div className="w-36.25 h-36.75 flex flex-col justify-between p-[22px_27px_7px_28px] text-center bg-accent rounded-3xl text-neutral-50">
                        <p className="mb-2.5 leading-[13.584px] font-medium text-lg">Queue</p>
                        <p className="h-14 text-[74px] leading-[13.584px] font-medium ">{selectedAppointment?.queue}</p>
                    </div>
                </div>



                <div className="h-50.25 px-4 py-5 rounded-[18px] flex flex-col gap-5.75 shadow-[0px_4px_29.7px_rgba(0,0,0,0.05)]">
                    <div className="flex justify-between items-center text-xl font-bold">
                        <p className="leading-[13.584px]">Symptoms</p>
                        <div className="w-[22px] h-[22px] relative">
                            <img src={pencil} className="size-full" />
                        </div>
                    </div>
                    <p className="overflow-y-auto thin-scrollbar text-base leading-6">
                        {selectedAppointment?.symptoms}
                    </p>
                </div>

                <div className="w-full h-38.5 px-4 py-4 rounded-2xl flex flex-col gap-6 shadow-[0px_4px_29.7px_rgba(0,0,0,0.05)]">
                    <div className="flex justify-between items-center text-xl font-bold">
                        <p className="leading-[13.584px]">Document Shared</p>
                        <div className="w-[22px] h-[22px] relative">
                            <img src={pencil} className="size-full" />
                        </div>
                    </div>

                    <div className="w-full overflow-x-auto no-scrollbar flex gap-3 max-sm:flex-col">
                        {
                            selectedAppointment?.documents?.map((data, idx) => (
                                <div key={'pdf' + idx} className="h-19 flex flex-col gap-2.5 items-center p-2.5 text-center rounded-2xl border border-accent border-solid bg-[#fafafa] shadow-[0px_4px_29.7px_rgba(0,0,0,0.05)]">
                                    <div className="w-8 h-8 relative">
                                        <img src={file} className="size-full" />
                                    </div>
                                    <p className="text-sm leading-[13.584px] text-black">{data}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="w-full flex gap-4.75 justify-end mt-5 max-sm:flex-col max-sm:items-center">
                    <button onClick={closeModal} className="px-7 py-3.5 text-xl rounded-[25.2px] leading-[22.68px] tracking-[-0.567px]  btn btn-secondary">
                        Back to home
                    </button>
                    <button className="px-7 py-3.5 text-xl rounded-[25.2px] leading-[22.68px] tracking-[-0.567px] btn btn-primary">
                        Reschedule
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpcomingAppointmentModal;
