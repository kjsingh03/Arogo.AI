import { bandaid, bird, bluedot, blueRightArrow, bookDoctor, dermat, eyedoc, gynaec, stethoscope, upi } from '../../../assets'
import { SpecialityItemProps } from '../../../types/props'

const specialityItems: SpecialityItemProps[] = [{ img: bandaid, title: 'Primary care ' }, { img: stethoscope, title: 'Dentist' }, { img: gynaec, title: 'OB-GYN ' }, { img: dermat, title: 'Dermatologist ' }, { img: eyedoc, title: 'Eye Doctor ' },]

export default function SpecialityHero() {
    return (
        <div className="w-full max-w-[1675px] min-h-[1375px] mx-auto flex flex-col items-center py-6 gap-20 xl:gap-50">
            <div className="flex flex-col items-center">
                <h3 className='text-[#606060] text-[52px] leading-[92px] font-bold h-24.5 uppercase '>Top-searched specialties</h3>
                <p className='max-w-[1335px] text-[22px] leading-[42px] tracking-[-0.14px] text-center px-21.5'>Our small business texting platform services a wide range of industries. We offer tools so you can tailor your messages directly to your target audience.</p>
            </div>
            <div className="w-full min-h-[560px] flex max-xl:flex-col justify-between">
                <div className="w-full max-w-[864px] max-xl:mx-auto relative flex flex-col items-center ">
                    <div className="w-39 h-38 overflow-hidden">
                        <img src={bird} className="w-full h-full object-cover" alt="Bird" />
                    </div>
                    <h4 className='text-[#606060] text-[52px] leading-[81px] font-bold h-24.5 '>Primary care</h4>
                    <p className='text-[22.42px] leading-[39.24px] tracking-[-0.56px] text-center px-28'>Need to make a primary care doctor appointment this week? Use Zocdoc to find doctors near you who take your insurance. It’s simple, secure and free.</p>
                    <div className='text-[#606060] text-[25.23px] font-bold leading-[39.24px] tracking-[-0.56px] flex items-center gap-3.5 my-6 text-center border-b-3 border-b-accent hover:border-b-transparent cursor-pointer '>
                        <p className='px-4'>Book the best Doctors near me</p>
                        <div className="flex items-center gap-1">
                            <img src={bluedot} alt="" />
                            <img src={blueRightArrow} alt="" />
                        </div>
                    </div>
                    <img src={bookDoctor} className='max-xl:hidden absolute -bottom-[8%] -right-30' alt="book doctor image" />
                    <img src={upi} className='max-xl:hidden absolute -bottom-[20%] right-30' alt="payment image" />
                </div>
                <div className="w-full max-w-[574px] max-xl:mx-auto min-h-[738px] flex flex-col gap-20">
                    <div className="w-full flex flex-col">
                        {
                            specialityItems?.map((data, idx) => (
                                <SpecialityItem key={'specialityItem' + idx} {...data} />
                            ))
                        }
                    </div>
                    <div className="w-full h-[98px] rounded-[57.5px] border border-[#d9d9d9] flex items-center justify-end p-[1.4px] ">
                        <input type="text" placeholder='Consult a doctor now' className='text-[28px] leading-[32px] tracking-[0.561px] outline-none border-none mx-auto ' />
                        <svg className='btn btn-primary rounded-full' xmlns="http://www.w3.org/2000/svg" width="89" height="90" viewBox="0 0 89 90" fill="none">
                            <path d="M47.5977 56.0703L58.6361 45.0319L47.5977 33.9934" stroke="currentColor" stroke-width="4.13942" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M31.0391 45.0312L44.8371 45.0312L58.6352 45.0312" stroke="currentColor" stroke-width="4.13942" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

function SpecialityItem({ img, title }: SpecialityItemProps) {
    return (
        <div className='w-full h-[112px] p-[31.54px_119.146px_33.036px_44.854px] flex items-center gap-15 border-b-[1.4px] border-b-[rgba(0,0,0,0.20)] cursor-pointer hover:border-b-[1.8px] hover:border-b-accent '>
            <img src={img} className='w-12.25 h-11.75 object-center' alt="" />
            <p className='text-[28px] leading-[32.23px] tracking-[0.561px] font-medium '>{title}</p>
        </div>
    )
}