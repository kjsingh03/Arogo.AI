import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import { expert1 } from '../../assets';

interface ConfirmBookingModalProps {
    closeModal: () => void;
}

export default function ConfirmBookingModal({ closeModal }: ConfirmBookingModalProps) {
    const navigate = useNavigate();

    const { doctor } = useSelector((state: RootState) => state.bookAppointment);

    return (
        <div onClick={closeModal} className="w-screen h-screen bg-[rgba(107,107,107,0.50)] fixed top-0 left-0 z-[1000] flex justify-center items-center ">
            <div onClick={(e) => e.stopPropagation()} className="w-full max-w-[997px] h-[654px max-2xl:h-[95vh] overflow-y-auto thin-scrollbar bg-[#fafafa] flex flex-col items-center gap-28 py-11.25 px-20.75 rounded-[22px] max-sm:p-2.5 ">
                <div className="flex flex-col gap-16">
                    <div className="w-full flex flex-col items-center gap-4">
                        <p className="text-[32px] font-medium leading-[20px]">Booking confirmed</p>
                        <p className="text-[20px] leading-[20px]">Your booking has been confirmed. You will be notified with the timings shortly.</p>
                    </div>

                    <div className="w-full max-w-[815px flex items-center gap-18">
                        <div className="w-44.75 h-44.75 rounded-full overflow-hidden">
                            <img src={expert1} className="size-full object-cover object-top" alt="" />
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-7.75">
                                <p className="text-2xl font-semibold leading-[14px]">
                                    {doctor?.displayName}
                                </p>
                                <div className="flex gap-4 items-end bg-pink-30">
                                    <div className="flex flex-col gap-2">
                                        <p className="text-lg font-semibold leading-[14px]">
                                            {doctor?.specialty}
                                        </p>
                                        <p className="text-accent text-lg font-semibold leading-[14px]">
                                            {doctor?.bio}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {doctor?.providesOnlineConsultation && (
                                            <p className="px-8 py-2 rounded-[32px] border border-accent text-accent text-base font-light leading-[14px]">
                                                {"Online"}
                                            </p>
                                        )}
                                        <p className="px-8 py-2 rounded-[32px] border border-accent text-accent text-base font-light leading-[14px]">
                                            In-person
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4.5">
                                <div className="flex flex-col gap-2 ">
                                    <p className="txext-xl font-semibold leading-[14px]">
                                        {"Banglore"}
                                    </p>
                                    <div className="flex items-center gap-2 text-xl leading-[14px] ">
                                        <p className="">{doctor?.clinicName} -</p>
                                        <div className="text-accent font-semibold hover:underline flex items-center gap-1">
                                            <p>{"18 km away"}</p>
                                            <div className="w-5 h-5 ">
                                                <svg className="size-full object-cover" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                    <path d="M10.5018 10.6267C11.8819 10.6267 13.0007 9.50791 13.0007 8.12781C13.0007 6.7477 11.8819 5.62891 10.5018 5.62891C9.12173 5.62891 8.00293 6.7477 8.00293 8.12781C8.00293 9.50791 9.12173 10.6267 10.5018 10.6267Z" stroke="#23B2FF" strokeWidth="0.937088" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M16.7484 8.13007C16.7484 13.7526 10.5012 18.1257 10.5012 18.1257C10.5012 18.1257 4.25391 13.7526 4.25391 8.13007C4.25391 6.47319 4.9121 4.88418 6.08368 3.71259C7.25527 2.541 8.84429 1.88281 10.5012 1.88281C12.158 1.88281 13.747 2.541 14.9186 3.71259C16.0902 4.88418 16.7484 6.47319 16.7484 8.13007Z" stroke="#23B2FF" strokeWidth="0.937088" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="font-medium leading-[14px] ">
                                    <span className="font-light">Speaks: </span>
                                    {doctor?.languagesSpoken.join(", ")}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center justify-center gap-4.75">
                        <p className="text-[26px] font-semibold leading-[23px] tracking-[0.52px]">Date</p>
                        <div className="w-[294px] text-center py-4.5 rounded-[15px] text-accent border border-accent bg-[#23B2FF1A] ">11:00 AM</div>
                    </div>
                </div>
                <div onClick={() => navigate("/")} className="w-max text-center btn btn-primary text-[22px] font-medium px-13 py-4.75">Back to Home Screen</div>
            </div>
        </div>
    )
}
