import { useState } from 'react'
import { aiIcon, logo, shareIcon } from '../../assets'

export default function AIInsightModal({ closeModal, handleShare }: { closeModal: () => void, handleShare: () => void }) {

    const [slide, setSlide] = useState<number>(0);

    return (
        <div onClick={closeModal} className="w-screen h-screen bg-[rgba(107,107,107,0.50)] fixed top-0 left-0 z-[1000] flex justify-center items-center ">
            <div onClick={(e) => e.stopPropagation()} className="w-full max-w-[1034px] h-[1089px] max-2xl:h-[95vh] overflow-y-auto thin-scrollbar bg-[#fafafa] flex flex-col items-center gap-17.5 py-9.5 px-12.5 rounded-[27.1px] max-sm:p-2.5 ">
                <div className="w-full relative flex justify-center">
                    <p className="text-[32px] font-semibold leading-[15.8px] ">AI Insights</p>
                    <div className="absolute -top-5 right-0 w-14.5 h-14.5">
                        <img src={logo} className='size-full object-cover' alt="" />
                    </div>
                </div>
                <div className="w-full h-full flex flex-col gap-5.5 items-center">
                    <div className="w-full flex flex-col px-6 pt-3.25 pb-9 rounded-[27px] border border-[rgba(217,217,217,0.60)] shadow-[0px_4px_29.7px_0px_rgba(0,0,0,0.05)] ">
                        <div className="flex items-center justify-between px-6 pb-4 pt-3.5">
                            <p className="text-xl font-semibold">Patient ID : <span className="font-normal">111928823</span></p>
                            <p className="text-xl font-semibold">Name : <span className="font-normal">Mayank</span></p>
                            <p className="text-xl font-semibold">Gender : <span className="font-normal">Male</span></p>
                            <p className="text-xl font-semibold">Age : <span className="font-normal">22</span></p>
                        </div>
                        <div className="w-full h-0.25 bg-[rgba(217,217,217,0.60)]"></div>
                        <p className="text-xl leading-[50.4px] font-semibold px-6">Test Name</p>
                        <div className="w-full rounded-[18px] px-8 py-4.75 bg-white border border-[rgba(217,217,217,0.60)]">
                            <p className="text-lg leading-[20px] font-light">Malaria</p>
                        </div>
                    </div>
                    <div className="h-full max-h-[806px] flex flex-col items-center justify-center">
                        {
                            slide !== 0 &&
                            <>
                                <p className="text-xl leading-[50.4px] font-semibold tracking-[-1px]">Insights</p>
                                <div className="h-full max-h-[806px] px-14 py-5.5 bg-[#fdfdfd] border border-[rgba(217,217,217,0.60)] rounded-[18px] ">
                                    <p className="text-lg font-light leading-[20px]">Take with a full glass of water.Take on an empty stomach (1 hour before or 2 hours after meals).Take with a full glass of water.Take on an empty stomach (1 hour before or 2 hours after meals).</p>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div onClick={() => setSlide(1)} className="group cursor-pointer w-15.75 h-15.75 py-5 flex items-center justify-center rounded-full overflow-hidden">
                                        <svg className='w-full h-full text-[#cccac9] group-hover:text-[#44423f]' width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.9066 22.2335L1.11009 12.4374C0.849432 12.1752 0.703125 11.8205 0.703125 11.4508C0.703125 11.081 0.849432 10.7263 1.11009 10.4641L10.9066 0.667969L12.8799 2.6412L4.07704 11.4438L12.8799 20.2463L10.9066 22.2335Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <p className='text-[22px] font-medium leading-[15.8px] '>{slide}/2</p>
                                    <div onClick={() => setSlide(2)} className="group cursor-pointer w-15.75 h-15.75 py-5 flex items-center justify-center rounded-full overflow-hidden">
                                        <svg className='w-full h-full text-[#cccac9] group-hover:text-[#44423f]' width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M2.82682 22.2319L0.853516 20.2447L9.65639 11.4421L0.853516 2.63957L2.82682 0.652344L12.6233 10.4485C12.884 10.7107 13.0303 11.0654 13.0303 11.4351C13.0303 11.8048 12.884 12.1595 12.6233 12.4217L2.82682 22.2319Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                            </>
                        }
                        <div onClick={() => slide === 0 ? setSlide(1) : {}} className="bg-[linear-gradient(90deg,#8F4FFF_7.53%,#0098E9_100%)] my-4 flex items-center gap-3.5 px-10 py-3.5 rounded-[62px] border-2 border-white">
                            <div className="w-10.5 h-10.5">
                                <img src={aiIcon} className='size-full object-cover' alt="" />
                            </div>
                            <p className='text-[22px] font-medium leading-[15px] text-white'>Generate new</p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex items-center justify-between">
                    <div onClick={handleShare} className="flex items-center gap-5">
                        <div className="w-8 h-8">
                            <img src={shareIcon} className='object-cover size-full' alt="" />
                        </div>
                        <p className="text-accent text-[22px] font-medium leading-[15px]">Share</p>
                    </div>
                    <button className="w-[196px] btn btn-primary ">Download</button>
                </div>
            </div>
        </div>
    )
}
