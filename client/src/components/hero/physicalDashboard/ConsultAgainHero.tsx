import { DoctorCard } from '../../index';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { DoctorCardProps } from '../../../types/props';


export default function ConsultAgainHero() {

    const { consultAgainDoctorList }: { consultAgainDoctorList: DoctorCardProps[] } = useSelector((state: RootState) => state.data)

    return (
        <>
            {
                consultAgainDoctorList.length > 0 && (
                    <div className="flex flex-col gap-12 px-10 xl:px-35 py-19.25">
                        <div className="flex items-end justify-between">
                            <div className="flex flex-col">
                                <h6 className="text-[32px] font-semibold leading-[50.4px]">Consult again</h6>
                                <p className="text-xl text-[#606060]">From guided meditations to one-on-one coaching, our team of clinical experts and</p>
                            </div>
                            <button className="btn btn-primary w-35 text-xl font-semibold px-7 py-4 rounded-[25.2px]">
                                View All
                            </button>
                        </div>

                        <div className="flex gap-10 overflow-x-auto no-scrollbar">
                            {consultAgainDoctorList.map((data: DoctorCardProps, idx) => (
                                <div key={'consultDoc' + idx} className="">
                                    <DoctorCard {...data} />
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-center gap-8.5">
                            <svg className='w-11 h-8.25 text-[#cccac9] hover:text-[#44423f] cursor-pointer' width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.9066 22.2335L1.11009 12.4374C0.849432 12.1752 0.703125 11.8205 0.703125 11.4508C0.703125 11.081 0.849432 10.7263 1.11009 10.4641L10.9066 0.667969L12.8799 2.6412L4.07704 11.4438L12.8799 20.2463L10.9066 22.2335Z" fill="currentColor" />
                            </svg>
                            <svg className='w-11 h-8.25 text-[#cccac9] hover:text-[#44423f] cursor-pointer' width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.82682 22.2319L0.853516 20.2447L9.65639 11.4421L0.853516 2.63957L2.82682 0.652344L12.6233 10.4485C12.884 10.7107 13.0303 11.0654 13.0303 11.4351C13.0303 11.8048 12.884 12.1595 12.6233 12.4217L2.82682 22.2319Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                )
            }
        </>
    );
}

