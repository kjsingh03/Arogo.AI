import { DoctorType } from "../../types";
import { expert1 } from "../../assets";
import { Link } from "react-router-dom";

function NearbyDoctorCard(doctor: DoctorType) {
    return (
        <div className="w-full h-[243px] p-6 bg-white flex justify-between rounded-2xl max-md:p-5 max-md:w-full max-md:h-auto">
            <div className="w-full max-w-[815px flex items-center gap-10">
                <div className="overflow-hidden relative rounded-3xl h-[254px] w-[218px] max-sm:w-full max-sm:h-[200px]">
                    <img src={expert1} className="object-cover bg-white size-full" alt="Doctor profile" />
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-7.75">
                        <p className="text-2xl font-semibold leading-[14px]">{doctor.displayName}</p>
                        <div className="flex gap-4 items-end bg-pink-30">
                            <div className="flex flex-col gap-2">
                                <p className='text-lg font-semibold leading-[14px]'>{doctor.specialty}</p>
                                <p className='text-accent text-lg font-semibold leading-[14px]'>{doctor.bio}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                {
                                    doctor.providesOnlineConsultation &&
                                    <p className="px-8 py-2 rounded-[32px] border border-accent text-accent text-base font-light leading-[14px]">{'Online'}</p>
                                }
                                <p className="px-8 py-2 rounded-[32px] border border-accent text-accent text-base font-light leading-[14px]">In-person</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4.5">
                        <div className="flex flex-col gap-2 ">
                            <p className='txext-xl font-semibold leading-[14px]'>{'Banglore'}</p>
                            <div className="flex items-center gap-2 text-xl leading-[14px] ">
                                <p className="">{doctor.clinicName} -</p>
                                <div className="text-accent font-semibold hover:underline flex items-center gap-1">
                                    <p>{'18 km away'}</p>
                                    <div className="w-5 h-5 ">
                                        <svg className='size-full object-cover' xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                            <path d="M10.5018 10.6267C11.8819 10.6267 13.0007 9.50791 13.0007 8.12781C13.0007 6.7477 11.8819 5.62891 10.5018 5.62891C9.12173 5.62891 8.00293 6.7477 8.00293 8.12781C8.00293 9.50791 9.12173 10.6267 10.5018 10.6267Z" stroke="#23B2FF" strokeWidth="0.937088" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16.7484 8.13007C16.7484 13.7526 10.5012 18.1257 10.5012 18.1257C10.5012 18.1257 4.25391 13.7526 4.25391 8.13007C4.25391 6.47319 4.9121 4.88418 6.08368 3.71259C7.25527 2.541 8.84429 1.88281 10.5012 1.88281C12.158 1.88281 13.747 2.541 14.9186 3.71259C16.0902 4.88418 16.7484 6.47319 16.7484 8.13007Z" stroke="#23B2FF" strokeWidth="0.937088" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="font-medium leading-[14px] "><span className='font-light'>Speaks: </span>{doctor.languagesSpoken.join(", ")}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4.75 items-center justify-center">
                <p className="text-2xl font-medium leading-[14px]">₹500</p>
                <Link to={`/book-appointment?doctorId=${doctor.id}`}>
                    <button className="text-xl btn btn-primary h-[49px] rounded-[35px] w-[183px] max-sm:w-full">
                        Book now
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default NearbyDoctorCard;