import {  logo, shareIcon } from '../../assets'

export default function AIInsightModal({ closeModal, handleShare }: { closeModal: () => void, handleShare: () => void }) {

    return (
        <div onClick={closeModal} className="w-screen h-screen bg-[rgba(107,107,107,0.50)] fixed top-0 left-0 z-[1000] flex justify-center items-center ">
            <div onClick={(e) => e.stopPropagation()} className="w-full max-w-[1034px] h-[1089px] max-2xl:h-[95vh] overflow-y-auto thin-scrollbar bg-[#fafafa] flex flex-col items-center gap-2.5 py-9.5 px-12.5 rounded-[27.1px] max-sm:p-2.5 ">
                <div className="w-full relative flex justify-center">
                    <p className="text-[32px] font-semibold leading-[15.8px] ">Prescription</p>
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
                        <p className="text-xl leading-[50.4px] font-semibold px-6">Symptoms</p>
                        <div className="w-full rounded-[18px] px-8 py-4.75 bg-white border border-[rgba(217,217,217,0.60)]">
                            <p className="text-lg leading-[20px] font-light">Take with a full glass of water.Take on an empty stomach (1 hour before or 2 hours after meals).Take with a full glass of water.Take on an empty stomach (1 hour before or 2 hours after meals).</p>
                        </div>
                        <p className="text-xl leading-[50.4px] font-semibold px-6">Diagnosis</p>
                        <div className="w-full rounded-[18px] px-8 py-4.75 bg-white border border-[rgba(217,217,217,0.60)]">
                            <p className="text-lg leading-[20px] font-light">Malaria</p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col">
                    <p className="text-xl leading-[50.4px] font-semibold ">Medication</p>
                    <div className="w-full rounded-[18px] flex flex-col items-center justify-between gap-3 px-6 py-4.75 bg-white border border-[rgba(217,217,217,0.60)]">
                        <div className="w-full flex items-center justify-between">
                            <div className="flex flex-col">
                                <p className="text-[22px] leading-[25.4px] tracking-[-0.1px] font-semibold">Paracetamol 500mg</p>
                                <p className="text-[22px] leading-[25.4px] tracking-[-0.1px] font-medium">Salt name paracetamol</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className='h-max border border-[rgba(217,217,217,0.60)] bg-white rounded-[30px] px-4.5'>Twice a day</p>
                                <p className=''>Duration : <span className='text-accent'>3 days</span></p>
                            </div>
                        </div>
                        <div className="w-full h-0.25 bg-[rgba(217,217,217,0.60)]"></div>
                        <div className="w-full flex justify-between">
                            <p className="max-w-[694px] text-lg leading-[17px] tracking-[-0.1px] font-light">Take with a full glass of water.Take on an empty stomach (1 hour before or 2 hours after meals).</p>
                            <div className="flex flex-col justify-end text-end gap-1">
                                <p className='text-sm font-light leading-[50.4px] tracking-[-0.1px]'>Daily <span className="text-2xl font-medium leading-[17.4px] tracking-[-0.1px]">0-1-1</span></p>
                                <p className='tracking-[-0.1px]'>After meal</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="w-full flex flex-col">
                    <p className="text-xl leading-[50.4px] font-semibold ">Lab Test</p>
                    <div className="w-full rounded-[18px] flex items-center justify-between px-6 py-4.75 bg-white border border-[rgba(217,217,217,0.60)]">
                        <div className="flex flex-col">
                            <p className="text-[22px] leading-[25.4px] tracking-[-0.1px] font-semibold">Paracetamol 500mg</p>
                            <p className="text-[22px] leading-[25.4px] tracking-[-0.1px] font-medium">Salt name paracetamol</p>
                        </div>
                        <p className='h-max border border-[rgba(217,217,217,0.60)] bg-white rounded-[30px] px-4.5'>Twice a day</p>
                    </div>
                </div>

                <div className="w-full flex flex-col">
                    <p className="text-xl leading-[50.4px] font-semibold ">Doctor's Advice</p>
                    <div className="w-full rounded-[18px] px-8 py-4.75 bg-white border border-[rgba(217,217,217,0.60)]">
                        <p className="text-lg leading-[20px] font-light">Take with a full glass of water.Take on an empty stomach (1 hour before or 2 hours after meals).Take with a full glass of water.Take on an empty stomach (1 hour before or 2 hours after meals).</p>
                    </div>
                </div>

                <div className="w-full flex items-center justify-between">
                    <div onClick={handleShare} className="flex items-center gap-5">
                        <div className="w-8 h-8">
                            <img src={shareIcon} className='object-cover size-full' alt="" />
                        </div>
                        <p className="text-accent text-[22px] font-medium leading-[15px]">Share</p>
                    </div>
                    <div className="flex items-center gap-4.5">
                        <button className="w-[196px] btn btn-secondary ">Download</button>
                        <button className="w-[196px] btn btn-primary ">Add med alert</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
