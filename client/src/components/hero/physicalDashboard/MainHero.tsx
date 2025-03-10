import { Link } from 'react-router-dom';
import { doctor1, doctor2, doctor3, doctor4, doctor5, doctor6, doctor7, doctorBg, doctorFg, locationPin } from '../../../assets'
import IconList from '../../utils/IconList';

const doctorsList = [doctor1, doctor2, doctor3, doctor4, doctor5, doctor6, doctor7,];

export default function PhysicalDashboardMainHero() {
  return (
    <main className='physicalDashboardBg w-[95%] 3xl:w-[85.417%] min-h-[881px] mx-auto flex flex-col gap-9.5 py-8.25 px-7 rounded-[33px] bg-[#F5F7F9] '>
      <div className="w-full flex flex-col items-center justify-center gap-12 xl:h-[653px] xl:flex-row xl:items-start xl:justify-between xl:gap-0 ">
        <div className="w-full xl:max-w-[859px] 2xl:h-[407px] mt-[73px] ml-[0px] 3xl:ml-[55px] flex flex-col gap-7 ">
          <div style={{ background: 'rgba(255, 255, 255, 0.00)', boxShadow: '0px 0px 25.2px 0px rgba(30,162,233,0.14)' }} className="w-[377px] h-[47px] flex items-center gap-5.25 border border-[#FFFFFF01] rounded-[83.6px] p-[6px_18px] ">
            <p className='text-accent text-lg '>General Health</p>
            <Link to="/mental">
              <p className='hover:text-accent text-sm cursor-pointer '>Navigate to mental Health</p>
            </Link>
          </div>

          <div className="h-[223px] flex flex-col justify-between ">
            <p className='max-w-[667px] text-[68px] 2xl:text-[72px] leading-[76px] text-secondary-text '>No More Stupid <span className='font-bold '>Care Intelligence .</span></p>
            <p className='text-lg font-light '>Tools for patients to track symptoms, medications, and appointments, promoting self-management and engagement.</p>
          </div>

          <div className="lg:w-[70%] 2xl:w-[740px] h-12 2xl:h-[73px] flex justify-end items-center gap-3.5 border rounded-[61px] border-[#979797] p-1 2xl:p-0.5 mt-4 ">
            <input type="text" className='w-[43%] 2xl:w-[306px] h-[23px] bg-transparent 2xl:text-xl leading-[23px] tracking-[0.4px] font-light outline-none border-none' placeholder='Condition, Doctor, Symptoms..' />
            <div className="w-[1px] h-[60%] bg-[#d9d9d9] "></div>
            <div className="flex items-center gap-3.5 w-max ">
              <div className="w-4.5 h-7 ">
                <img src={locationPin} className='size-full object-contain' alt="" />
              </div>
              <input type="text" className='w-[100%] 2xl:w-[218px] h-[23px] bg-transparent 2xl:text-xl leading-[23px] tracking-[0.4px] font-light outline-none border-none' placeholder='Block a sector A2, No' />
            </div>
            <div className="w-10 h-10 2xl:w-16.25 2xl:h-16.25 hover:text-accent text-white btn btn-primary p-2 2xl:px-4 2xl:py-4.25 rounded-full">
              <svg className='size-full object-cover' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.0703 21.0703L27.9991 27.9991" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-[413.6px] h-[549.1px] relative bg-red-60 flex justify-center ">
          <div className="w-[393.84px] h-full z-20">
            <img src={doctorFg} className='size-full object-cover' alt="Doctor" />
          </div>

          <div className="w-full h-[480.68px] absolute bottom-0 z-0 ">
            <img src={doctorBg} className='size-full object-cover ' alt="Doctor" />
          </div>

          <div className="w-[140.2px] h-[50.9px] bg-white flex items-center justify-center absolute top-[132.45px] right-0 border-[#ECECEC] border-[3.51px] rounded-[10.5px] ">
            <div className="flex items-end justify-center gap-1 ">
              <span className='text-accent text-[20.175px] font-bold '>24/7</span>
              <p className='text-[13.15px] text-black font-medium '>Service</p>
            </div>
          </div>

          <div className="w-[140.2px] h-[50.9px] bg-white absolute bottom-[66px] -left-20 border-[#ECECEC] border-[3.51px] rounded-[10.5px] ">
            <div className="flex flex-col items-center justify-between gap-3.5 ">
              <p className='text-[10.5px] text-black w-[91px] '>Our Professionals</p>
              <div className="w-[109.64px] flex items-center justify-between relative ">
                {doctorsList?.map((doc, idx) => (
                  <div key={'doc' + idx} className="h-[23.68px] w-[23.68px] rounded-full overflow-hidden absolute" style={{ left: `${idx * 12.5}px`, zIndex: doctorsList.length + idx, }}>
                    <img src={doc} alt="doctor img" className="size-full object-cover" />
                  </div>
                ))}
                <div className="h-[23.68px] w-[23.68px] rounded-full overflow-hidden absolute bg-accent flex justify-center items-center" style={{ left: `${7 * 12.5}px`, zIndex: doctorsList.length + 7, }}>
                  <p className='text-white text-[8.77px] font-medium '>30+</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <IconList/>
    </main>
  )
}
