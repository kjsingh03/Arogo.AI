import React from 'react'
import { locationPin, upcomingDoctor } from '../assets'
import { useSearchParams } from 'react-router-dom'

const doctor = {
  "id": 1,
  "userId": 4,
  "displayName": "Dr. John Smith",
  "profilePicture": "https://example.com/profile.jpg",
  "specialty": "Cardiology",
  "expertiseAreas": [
    "Heart Disease",
    "Hypertension"
  ],
  "clinicName": "Heart Care Clinic",
  "education": "MD, Harvard Medical School",
  "credentials": "FACC, Board Certified",
  "yearsOfExperience": 15,
  "medicalRegistrationNumber": "MED12345",
  "languagesSpoken": [
    "English",
    "Spanish"
  ],
  "providesOnlineConsultation": true,
  "bio": "Experienced cardiologist with 15 years of practice",
  "createdAt": "2025-03-17T14:39:07.039Z",
  "updatedAt": "2025-03-17T14:39:07.039Z",
  "doctor": {
    "email": "clusterider@gmail.com",
    "isVerified": true
  },
  "email": "clusterider@gmail.com",
  "isVerified": true,
  "score": 75
}

export default function BookAppointment() {

  const [pageParams, setPageParams] = useSearchParams();

  console.log(pageParams)

  const sectionQuery = pageParams.get("section")

  console.log(sectionQuery)

  const switchSection = (sec: string) => {
    setPageParams({ "section": sec })
  }

  return (
    <div className='w-full mx-auto flex flex-col items-center gap-12 py-10.5 px-35 max-2xl:px-8 '>
      <div className="w-full flex items-center justify-between py-9.5 px-10.75  ">
        <div className="w-full max-w-[815px flex items-center gap-10">
          <div className="w-44.75 h-44.75 rounded-full overflow-hidden">
            <img src={upcomingDoctor} className='size-full object-cover' alt="" />
          </div>
          <div className="flex flex-col gap-6 bg-red-60">
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
                        <path d="M10.5018 10.6267C11.8819 10.6267 13.0007 9.50791 13.0007 8.12781C13.0007 6.7477 11.8819 5.62891 10.5018 5.62891C9.12173 5.62891 8.00293 6.7477 8.00293 8.12781C8.00293 9.50791 9.12173 10.6267 10.5018 10.6267Z" stroke="#23B2FF" stroke-width="0.937088" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.7484 8.13007C16.7484 13.7526 10.5012 18.1257 10.5012 18.1257C10.5012 18.1257 4.25391 13.7526 4.25391 8.13007C4.25391 6.47319 4.9121 4.88418 6.08368 3.71259C7.25527 2.541 8.84429 1.88281 10.5012 1.88281C12.158 1.88281 13.747 2.541 14.9186 3.71259C16.0902 4.88418 16.7484 6.47319 16.7484 8.13007Z" stroke="#23B2FF" stroke-width="0.937088" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-medium leading-[14px] "><span className='font-light'>Speaks: </span>{doctor.languagesSpoken.join(", ")}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 px-4.5 py-5 rounded-[27px] bg-[rgba(217,217,217,0.32)]">
          <div className="w-35 h-25.5 flex flex-col justify-center items-center rounded-[20px] bg-[#fafafa]">
            <p className='text-[43.3px] font-semibold leading-[46.29px] tracking-[-0.176px] '>{doctor.score} <span className="text-[35.2px] ">+</span></p>
            <p className='text-[16.2px] font-medium leading-[12px] tracking-[0.325px] '>Patients</p>
          </div>
          <div className="w-35 h-25.5 flex flex-col justify-center items-center rounded-[20px] bg-[#fafafa]">
            <p className='text-[43.3px] font-semibold leading-[46.29px] tracking-[-0.176px] '>{doctor.yearsOfExperience} <span className="text-[35.2px] ">+</span></p>
            <p className='text-[16.2px] font-medium leading-[12px] tracking-[0.325px] '>Exp. years</p>
          </div>
          <div className="w-35 h-25.5 flex flex-col justify-center items-center rounded-[20px] bg-[#fafafa]">
            <p className='text-[43.3px] font-semibold leading-[46.29px] tracking-[-0.176px] '>{doctor.score} <span className="text-[35.2px] ">+</span></p>
            <p className='text-[16.2px] font-medium leading-[12px] tracking-[0.325px] '>Rating <span className='font-light text-[#707070]'>({doctor.score})</span></p>
          </div>
        </div>
      </div>

      <div className="w-full flex gap-12.5">
        <div className="w-full max-w-[629px] flex flex-col gap-10 ">
          <div className="flex gap-12 border-b border-b-transparent">
            <p onClick={() => switchSection("about")} className={`w-[86px] text-center text-xl leading-[21px] tracking-[0.4px] border-b-2 cursor-pointer ${sectionQuery === "about" || !sectionQuery ? 'font-bold border-b-accent' : 'font-medium border-b-transparent'}`}>About</p>
            <p onClick={() => switchSection("location")} className={`w-[89px] text-center text-xl leading-[21px] tracking-[0.4px] border-b-2 cursor-pointer ${sectionQuery === "location" ? 'font-bold border-b-accent' : 'font-medium border-b-transparent'}`}>Location</p>
            <p onClick={() => switchSection("review")} className={`w-[83px] text-center text-xl leading-[21px] tracking-[0.4px] border-b-2 cursor-pointer ${sectionQuery === "review" ? 'font-bold border-b-accent' : 'font-medium border-b-transparent'}`}>Reviews</p>
            <p onClick={() => switchSection("faq")} className={`w-[56px] text-center text-xl leading-[21px] tracking-[0.4px] border-b-2 cursor-pointer ${sectionQuery === "faq" ? 'font-bold border-b-accent' : 'font-medium border-b-transparent'}`}>FAQ's</p>
          </div>
          <div className="w-full flex flex-col gap-6">
            <div className="w-full flex flex-col gap-4">
              <p className="text-xl font-semibold leading-[21px]">About Doctor</p>
              <p className="text-[#707070] leading-[22px]">{doctor.bio}</p>
            </div>
            <div className="w-full flex flex-col gap-4">
              <p className="text-xl font-semibold leading-[21px]">Education and background</p>
              <p className="text-[#707070] leading-[22px]">{doctor.expertiseAreas.join(", ")}</p>
            </div>
            <div className="w-full flex flex-col gap-4">
              <p className="text-xl font-semibold leading-[21px]">Board certifications</p>
              <p className="text-[#707070] leading-[22px]"></p>
            </div>
            <div className="w-full flex flex-col gap-4">
              <p className="text-xl font-semibold leading-[21px]">Education and training</p>
              <p className="text-[#707070] leading-[22px]">{doctor.education}</p>
            </div>
            <div className="w-full flex flex-col gap-4">
              <p className="text-xl font-semibold leading-[21px]">Languages spoken</p>
              <p className="text-[#707070] leading-[22px]">{doctor.languagesSpoken.join(", ")}</p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[929px] px-6 py-8 flex flex-col items-center gap-2.5 bg-[#F7F8F8] rounded-[28px] border border-[rgba(217, 217, 217, 0.60)]">
          <p className="">left</p>
        </div>
      </div>
    </div>
  )
}
