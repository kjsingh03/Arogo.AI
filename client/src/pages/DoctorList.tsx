import { useEffect } from 'react'
import { chevronDown } from '../assets'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { setNearbyDoctor } from '../store'
import { NearbyDoctorCard } from '../components'
import { nearbyDoctorsFetchService } from '../services'

export default function DoctorList() {

  const { doctors } = useSelector((state: RootState) => state.nearbyDoctors)
  const dispatch = useDispatch();

  console.log(doctors)

  const fetchDoctors = async () => {
    try {
      const res = await nearbyDoctorsFetchService()
      dispatch(setNearbyDoctor(res))
    } catch (err: any) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchDoctors()
  }, [])

  return (
    <div className='w-full mx-auto flex flex-col items-center gap-7.5 py-15 px-35 max-2xl:px-8 '>
      <div className="lg:w-[70%] 2xl:w-[740px] h-12 2xl:h-[73px] flex justify-end items-center gap-3.5 border rounded-[61px] border-[#979797] p-1 2xl:p-0.5 ">
        <input type="text" className='w-[43%] 2xl:w-[306px] h-[23px] mx-auto bg-transparent 2xl:text-xl leading-[23px] tracking-[0.4px] font-light outline-none border-none' placeholder='Condition, Doctor, Symptoms..' />
        <div className="w-[1px] h-[60%] bg-[#d9d9d9] "></div>
        <div className="flex items-center gap-3.5 w-max ">
          {/* <div className="w-4.5 h-7 ">
                <img src={locationPin} className='size-full object-contain' alt="" />
              </div> */}
          <input type="text" className='w-[100%] 2xl:w-[218px] h-[23px] bg-transparent 2xl:text-xl leading-[23px] tracking-[0.4px] font-light outline-none border-none' placeholder='City, State, Zip' />
        </div>
        <div className="w-10 h-10 2xl:w-16.25 2xl:h-16.25 hover:text-accent text-white btn btn-primary p-2 2xl:px-4 2xl:py-4.25 rounded-full">
          <svg className='size-full object-cover' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.0703 21.0703L27.9991 27.9991" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="w-full flex items-center justify-end gap-29">
        <div className="flex justify-center items-center gap-15">
          <div className="flex items-center gap-2.5 rounded-[32px] px-4 py-4.25 bg-[#F5F7F9]">
            <p className='text-lg font-light leading-[23px] tracking-[0.36px]'>Gender</p>
            <div className="w-6.25 h-6.25">
              <img src={chevronDown} className='size-full object-cover' alt="chevron" />
            </div>
          </div>
          <div className="flex items-center gap-2.5 rounded-[32px] px-4 py-4.25 bg-[#F5F7F9]">
            <p className='text-lg font-light leading-[23px] tracking-[0.36px]'>Experience</p>
            <div className="w-6.25 h-6.25">
              <img src={chevronDown} className='size-full object-cover' alt="chevron" />
            </div>
          </div>
          <div className="flex items-center gap-2.5 rounded-[32px] px-4 py-4.25 bg-[#F5F7F9]">
            <p className='text-lg font-light leading-[23px] tracking-[0.36px]'>Fees</p>
            <div className="w-6.25 h-6.25">
              <img src={chevronDown} className='size-full object-cover' alt="chevron" />
            </div>
          </div>
          <div className="flex items-center gap-2.5 rounded-[32px] px-4 py-4.25 bg-[#F5F7F9]">
            <p className='text-lg font-light leading-[23px] tracking-[0.36px]'>Availability</p>
            <div className="w-6.25 h-6.25">
              <img src={chevronDown} className='size-full object-cover' alt="chevron" />
            </div>
          </div>
          <div className="flex items-center gap-2.5 rounded-[32px] px-4 py-4.25 bg-[#F5F7F9]">
            <p className='text-lg font-light leading-[23px] tracking-[0.36px]'>Consult type</p>
            <div className="w-6.25 h-6.25">
              <img src={chevronDown} className='size-full object-cover' alt="chevron" />
            </div>
          </div>
        </div>
        <div className="w-[243px] bg-[#fafafa] flex items-center gap-23.5 p-[17px_9px_17px_19px] border-b border-b-[#2E2E2E] ">
          <p className='text-lg font-light leading-[23px] tracking-[0.36px]'>Relevance</p>
          <div className="w-6.25 h-6.25">
            <img src={chevronDown} className='size-full object-cover' alt="chevron" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-10.75 py-10">
        <div className="w-full flex flex-col gap-7">
          <p className='text-[32px] font-semibold leading-[15px]'>33 Gynecologists/Obstetricians available in Ghaziabad</p>
          <p className='text-lg leading-[23px] tracking-[0.36px]'>Book appointments with minimum wait-time & verified doctor details</p>
          <div className="w-full h-0.25 bg-[#d9d9d9]"></div>
        </div>
        <div className="w-full flex flex-col gap-3">
          {
            doctors.map((data,idx)=>(
              <div className="" key={'nearbyDoctor'+idx}>
                <NearbyDoctorCard {...data} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

// import { useRef, useState } from "react";

// const BookAppointment: React.FC = () => {
//   return (
//     <div className="w-full">
//       <div className="flex overflow-hidden flex-col justify-center px-11 py-10 w-full border border-solid bg-stone-50 border-zinc-300 border-opacity-60 rounded-[57px] max-md:px-5 max-md:max-w-full">
//         <div className="flex flex-wrap justify-center items-center w-full max-md:max-w-full">
//           <DoctorProfile />
//           <DoctorStats />
//         </div>
//       </div>

//       <div className="flex flex-wrap gap-10 justify-between items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
//         <DoctorAbout />
//         <AppointmentForm />
//       </div>
//     </div>
//   );
// };

// export default BookAppointment;


// const DoctorProfile: React.FC = () => {
//   return (
//     <div className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-60 max-md:max-w-full">
//       <div className="flex overflow-hidden gap-3 items-center self-stretch my-auto bg-white border border-sky-400 border-solid h-[180px] rounded-[112px] w-[179px]">
//         <img
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f6a42887954e7192825db462709ee04030e3cac394b78ae8e621f293b696006?placeholderIfAbsent=true&apiKey=190219aca3e64c1ea8dc3a75c3aaf0ff"
//           className="object-contain self-stretch my-auto rounded-none aspect-[1.01] w-[180px]"
//           alt="Doctor profile"
//         />
//       </div>
//       <div className="flex flex-col self-stretch my-auto min-w-60 w-[596px] max-md:max-w-full">
//         <div className="w-full max-md:max-w-full">
//           <div className="w-full max-md:max-w-full">
//             <h1 className="text-2xl font-semibold leading-none text-zinc-800 max-md:max-w-full">
//               Dr. Nitasga singh bali
//             </h1>
//             <div className="flex flex-wrap gap-4 items-end mt-8 w-full max-md:max-w-full">
//               <div className="flex flex-col grow shrink text-lg font-semibold leading-none min-w-60 w-[254px]">
//                 <div className="text-neutral-500">Orthopedics</div>
//                 <div className="self-start mt-2 text-center text-sky-400">
//                   9 years - MBBS, MS (Orthopedics)
//                 </div>
//               </div>
//               <div className="flex gap-2 justify-center items-end text-base font-light leading-none text-center text-sky-400 whitespace-nowrap min-w-60">
//                 <div className="overflow-hidden gap-2.5 self-stretch px-8 py-2 border border-sky-400 border-solid rounded-[32px] max-md:px-5">
//                   Online
//                 </div>
//                 <div className="overflow-hidden gap-2.5 self-stretch px-8 py-2 border border-sky-400 border-solid rounded-[32px] max-md:px-5">
//                   In-person
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="mt-6 w-full text-neutral-500 max-md:max-w-full">
//             <div className="text-lg font-semibold leading-none max-md:max-w-full">
//               Bengaluru
//             </div>
//             <div className="flex flex-wrap gap-2 items-center mt-2 w-full text-xl leading-none text-center max-md:max-w-full">
//               <div className="self-stretch my-auto max-md:max-w-full">
//                 Unicorn multi-speciality clinic , Bengaluru -{" "}
//                 <span className="font-semibold text-sky-400">18 km away </span>
//               </div>
//               <img
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/d86ce79dd9676f982c982f5b880a7d4f410c4d0953765376799e259c472680af?placeholderIfAbsent=true&apiKey=190219aca3e64c1ea8dc3a75c3aaf0ff"
//                 className="object-contain shrink-0 self-stretch my-auto aspect-[0.95] w-[19px]"
//                 alt="Location icon"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-2 items-center self-start mt-5 text-base leading-none text-center text-zinc-800">
//           <div className="self-stretch my-auto font-medium">Speaks:</div>
//           <div className="self-stretch my-auto font-light">
//             English, Hindi, Urdu, Punjabi
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const DoctorStats: React.FC = () => {
//   return (
//     <div className="flex flex-wrap grow shrink gap-4 items-center self-stretch px-5 py-5 my-auto rounded-3xl bg-zinc-300 bg-opacity-30 min-h-[143px] min-w-60 text-zinc-800 w-[392px] max-md:max-w-full">
//       <StatCard value="350+" label="Patients" />
//       <StatCard value="15+" label="Exp. years" />
//       <StatCard value="284+" label="Rating" ratingCount="(212)" />
//     </div>
//   );
// };

// interface StatCardProps {
//   value: string;
//   label: string;
//   ratingCount?: string;
// }

// const StatCard: React.FC<StatCardProps> = ({ value, label, ratingCount }) => {
//   // Split the value to handle the "+" separately for styling
//   const [mainValue, suffix] = value.includes('+')
//     ? [value.replace('+', ''), '+']
//     : [value, ''];

//   return (
//     <div className="flex relative flex-col grow shrink justify-center self-stretch my-auto w-28">
//       <div className="flex z-0 w-full rounded-3xl bg-neutral-50 min-h-[103px]" />
//       <div className="flex absolute z-0 flex-col items-center max-w-full bottom-[21px] left-[17px] w-[105px]">
//         <div className="text-5xl font-semibold tracking-tight leading-none max-md:text-4xl">
//           <span className="text-[43px]">{mainValue}</span>
//           {suffix && <span className="text-[35px]">{suffix}</span>}
//         </div>
//         <div className="mt-1 text-base font-medium tracking-wide leading-loose text-center">
//           {label}
//           {ratingCount && <span className="font-light text-neutral-500">{ratingCount}</span>}
//         </div>
//       </div>
//     </div>
//   );
// };

// const tabs = ["About", "Location", "Reviews", "FAQ's"];

// const DoctorAbout: React.FC = () => {
//   const [activeTab, setActiveTab] = useState("About");

//   return (
//     <div className="overflow-hidden pb-56 rounded-xl min-w-60 w-[661px] max-md:pb-24 max-md:max-w-full">
//       <div className="flex flex-col w-full max-md:max-w-full">
//         <div className="flex gap-10 items-start self-start text-xl tracking-wide leading-none text-zinc-800 max-md:max-w-full">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               className={`${
//                 activeTab === tab ? "font-semibold" : "font-normal"
//               } text-center ${activeTab === tab ? "w-[86px]" : ""}`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {activeTab === "About" && (
//           <div className="flex flex-col items-start mt-10 w-full max-md:max-w-full">
//             <AboutSection />
//             <EducationBackground />
//             <BoardCertifications />
//             <EducationTraining />
//             <LanguagesSpoken />
//           </div>
//         )}

//         {activeTab === "Location" && (
//           <div className="mt-10 text-base leading-6 text-neutral-400">
//             Location information will be displayed here.
//           </div>
//         )}

//         {activeTab === "Reviews" && (
//           <div className="mt-10 text-base leading-6 text-neutral-400">
//             Reviews will be displayed here.
//           </div>
//         )}

//         {activeTab === "FAQ's" && (
//           <div className="mt-10 text-base leading-6 text-neutral-400">
//             Frequently asked questions will be displayed here.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const AboutSection: React.FC = () => (
//   <div className="self-stretch w-full max-md:max-w-full">
//     <h2 className="text-xl font-semibold leading-none text-zinc-800 max-md:max-w-full">
//       About Doctor
//     </h2>
//     <p className="mt-4 text-base leading-6 text-neutral-400 max-md:max-w-full">
//       Dr. Maria Waston is the top most Cardiologist specialist in Nanyang
//       Hospotalat London. She is available for private consultation. Dr. Maria
//       Waston is the top most Cardiologist specialist in Nanyang Hospotalat
//       London. She is available for private consultation. Dr. Maria Waston is the
//       top most Cardiologist specialist in Nanyang Hospotalat London. She is
//       available for private consultation. Dr. Maria Waston is the top most
//       Cardiologist specialist in Nanyang Hospotalat London. She is available for
//       private consultation.
//     </p>
//   </div>
// );

// const EducationBackground: React.FC = () => (
//   <div className="mt-6 max-w-full w-[315px]">
//     <h3 className="text-xl font-semibold tracking-wide leading-none text-zinc-800">
//       Education and background
//     </h3>
//     <p className="mt-4 text-base tracking-wide leading-6 text-neutral-400">
//       Specialties
//       <br />
//       Family Physician
//       <br />
//       Primary Care Doctor
//     </p>
//   </div>
// );

// const BoardCertifications: React.FC = () => (
//   <div className="mt-6 max-w-full w-[293px]">
//     <h3 className="text-xl font-semibold tracking-wide leading-none text-zinc-800">
//       Board certifications
//     </h3>
//     <p className="mt-4 text-base tracking-wide leading-none text-neutral-400">
//       American Board of Family Medicine
//     </p>
//   </div>
// );

// const EducationTraining: React.FC = () => (
//   <div className="mt-6 max-w-full text-zinc-800 w-[603px]">
//     <h3 className="text-xl font-semibold tracking-wide leading-none">
//       Education and training
//     </h3>
//     <p className="mt-4 text-base font-light tracking-wide leading-4 max-md:max-w-full">
//       Medical School - Philadelphia College of Osteopathic Medicine, Doctor of
//       Osteopathic Medicine
//       <br />
//       <br />
//       Brown University, Residency in Family Medicine
//     </p>
//   </div>
// );

// const LanguagesSpoken: React.FC = () => (
//   <div className="mt-6 max-w-full text-zinc-800 w-[197px]">
//     <div className="w-full">
//       <h3 className="text-xl font-semibold tracking-wide leading-none">
//         Languages spoken
//       </h3>
//       <div className="flex flex-col justify-center px-5 py-2 mt-4 max-w-full text-base font-light tracking-wide leading-none whitespace-nowrap bg-gray-100 rounded-[38px] w-[139px]">
//         <div className="flex gap-1 items-center w-full">
//           <div className="self-stretch my-auto">English</div>
//           <img
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c833061f635706a11b1d540d0eb78ab815a40bcd43768d89812bdefdd752707?placeholderIfAbsent=true&apiKey=190219aca3e64c1ea8dc3a75c3aaf0ff"
//             className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[2]"
//             alt="English flag"
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// );

// interface PatientTypeSelectorProps {
//   selected: "new" | "returning";
//   onChange: (type: "new" | "returning") => void;
// }

// const PatientTypeSelector: React.FC<PatientTypeSelectorProps> = ({
//   selected,
//   onChange,
// }) => {
//   return (
//     <div className="flex overflow-hidden flex-wrap px-1.5 py-1.5 mt-10 max-w-full text-xl tracking-wide leading-none bg-white border border-solid border-zinc-300 rounded-[49px] w-[580px]">
//       <button
//         className={`flex flex-col grow shrink-0 justify-center px-12 py-5 basis-0 rounded-[57px] w-fit max-md:px-5 transition-colors ${
//           selected === "new"
//             ? "bg-sky-400 text-neutral-50"
//             : "bg-transparent text-zinc-800 hover:bg-gray-100"
//         }`}
//         onClick={() => onChange("new")}
//       >
//         <div className="flex gap-8 justify-center items-center w-full">
//           <img
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/6051c48b730d8e7b81168f7723895e539e5c006259749d1a92a4f1a6a1128af4?placeholderIfAbsent=true&apiKey=190219aca3e64c1ea8dc3a75c3aaf0ff"
//             className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
//             alt="New patient icon"
//           />
//           <span className="self-stretch my-auto">New patient</span>
//         </div>
//       </button>
//       <button
//         className={`grow shrink-0 px-12 py-5 my-auto basis-0 rounded-[57px] w-fit max-md:px-5 transition-colors ${
//           selected === "returning"
//             ? "bg-sky-400 text-neutral-50"
//             : "bg-transparent text-zinc-800 hover:bg-gray-100"
//         }`}
//         onClick={() => onChange("returning")}
//       >
//         Returning patient
//       </button>
//     </div>
//   );
// };


// const AppointmentForm: React.FC = () => {
//   const [symptoms, setSymptoms] = useState("");
//   const [patientType, setPatientType] = useState<"new" | "returning">("new");
//   const [appointmentType, setAppointmentType] = useState<
//     "online" | "in-person"
//   >("online");

//   return (
//     <div className="flex overflow-hidden gap-2.5 justify-center items-center px-6 py-8 rounded-3xl border border-solid bg-stone-50 border-zinc-300 border-opacity-60 min-w-60 w-[929px] max-md:px-5 max-md:max-w-full">
//       <div className="self-stretch my-auto min-w-60 w-[864px]">
//         <div className="flex flex-col w-full max-md:max-w-full">
//           <div className="w-full max-md:max-w-full">
//             <div className="max-w-full text-neutral-500 w-[532px]">
//               <h2 className="text-3xl font-semibold tracking-wider leading-none max-md:max-w-full">
//                 Book an appointment for free
//               </h2>
//               <p className="mt-2 text-lg tracking-wide leading-none max-md:max-w-full">
//                 The office partners with Arogo to schedule appointments
//               </p>
//             </div>

//             <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
//               <div className="w-full max-md:max-w-full">
//                 <h3 className="text-2xl font-semibold tracking-wide leading-none text-neutral-500 max-md:max-w-full">
//                   Describe your symptoms
//                 </h3>
//                 <textarea
//                   className="overflow-hidden gap-2.5 px-6 pt-3.5 pb-24 mt-3 w-full text-lg tracking-wide leading-none bg-white rounded-3xl border border-solid border-zinc-300 border-opacity-60 min-h-[132px] text-zinc-800 placeholder-zinc-300 max-md:px-5 max-md:max-w-full"
//                   placeholder="Eg. having cold...."
//                   value={symptoms}
//                   onChange={(e) => setSymptoms(e.target.value)}
//                 />
//               </div>

//               <PatientTypeSelector
//                 selected={patientType}
//                 onChange={setPatientType}
//               />

//               <FileUpload />

//               <div className="mt-10 max-w-full w-[681px]">
//                 <h3 className="text-2xl font-semibold tracking-wide leading-6 text-neutral-500 max-md:max-w-full">
//                   Available appointments
//                 </h3>

//                 <AppointmentTypeSelector
//                   selected={appointmentType}
//                   onChange={setAppointmentType}
//                 />
//               </div>
//             </div>
//           </div>

//           <AppointmentCalendar />

//           <button className="overflow-hidden px-16 py-7 mt-28 w-full text-2xl font-semibold leading-none text-center whitespace-nowrap border border-sky-400 border-solid bg-neutral-500 rounded-[222px] text-stone-50 max-md:px-5 max-md:mt-10 max-md:max-w-full hover:bg-neutral-600 transition-colors">
//             Continue
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// import React from "react";

// interface AppointmentTypeSelectorProps {
//   selected: "online" | "in-person";
//   onChange: (type: "online" | "in-person") => void;
// }

// const AppointmentTypeSelector: React.FC<AppointmentTypeSelectorProps> = ({
//   selected,
//   onChange,
// }) => {
//   return (
//     <div className="flex overflow-hidden flex-wrap px-1.5 py-1.5 max-w-full text-xl tracking-wide leading-none whitespace-nowrap bg-white border border-solid border-zinc-300 rounded-[49px] w-[580px]">
//       <button
//         className={`flex flex-col grow shrink-0 justify-center px-12 py-5 basis-0 rounded-[57px] w-fit max-md:px-5 transition-colors ${
//           selected === "online"
//             ? "bg-sky-400 text-neutral-50"
//             : "bg-transparent text-zinc-800 hover:bg-gray-100"
//         }`}
//         onClick={() => onChange("online")}
//       >
//         <div className="flex gap-8 justify-center items-center w-full">
//           <img
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef0c87ad6d1498b72a77b081f2e1504ab577b5ad4b9a36dec55f0abea1df398f?placeholderIfAbsent=true&apiKey=190219aca3e64c1ea8dc3a75c3aaf0ff"
//             className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
//             alt="Online appointment icon"
//           />
//           <span className="self-stretch my-auto">Online</span>
//         </div>
//       </button>
//       <button
//         className={`grow shrink-0 px-12 py-5 my-auto basis-0 rounded-[57px] w-fit max-md:px-5 transition-colors ${
//           selected === "in-person"
//             ? "bg-sky-400 text-neutral-50"
//             : "bg-transparent text-zinc-800 hover:bg-gray-100"
//         }`}
//         onClick={() => onChange("in-person")}
//       >
//         In-person
//       </button>
//     </div>
//   );
// };


// const FileUpload: React.FC = () => {
//   const [files, setFiles] = useState<File[]>([]);
//   const [isDragging, setIsDragging] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     setIsDragging(false);
//   };

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     setIsDragging(false);

//     if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
//       const newFiles = Array.from(e.dataTransfer.files);
//       setFiles((prevFiles) => [...prevFiles, ...newFiles]);
//     }
//   };

//   const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       const newFiles = Array.from(e.target.files);
//       setFiles((prevFiles) => [...prevFiles, ...newFiles]);
//     }
//   };

//   const handleClick = () => {
//     fileInputRef.current?.click();
//   };

//   return (
//     <div
//       className={`flex overflow-hidden flex-wrap gap-10 items-center px-16 py-10 mt-10 w-full text-lg tracking-wide leading-none rounded-2xl border border-dashed border-neutral-500 text-neutral-500 max-md:px-5 max-md:max-w-full cursor-pointer ${
//         isDragging ? "bg-gray-100" : ""
//       }`}
//       onClick={handleClick}
//       onDragOver={handleDragOver}
//       onDragLeave={handleDragLeave}
//       onDrop={handleDrop}
//     >
//       <input
//         type="file"
//         ref={fileInputRef}
//         className="hidden"
//         multiple
//         onChange={handleFileInputChange}
//       />
//       <img
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/eac5590aeda01df41fe49ba73ab09d4c81423c9f41c413c8745b844b712bb49f?placeholderIfAbsent=true&apiKey=190219aca3e64c1ea8dc3a75c3aaf0ff"
//         className="object-contain shrink-0 self-stretch my-auto aspect-square w-[60px]"
//         alt="Upload icon"
//       />
//       <div className="self-stretch my-auto min-w-60 w-[322px]">
//         {files.length > 0 ? (
//           <div>
//             <p className="mb-2">Selected files:</p>
//             <ul className="list-disc pl-5">
//               {files.map((file, index) => (
//                 <li key={index} className="truncate">
//                   {file.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ) : (
//           <>
//             <p>Drag and drop files here to upload</p>
//             <p className="mt-4 font-semibold text-center">OR</p>
//             <p className="mt-4 text-center">
//               Upload from{" "}
//               <span className="font-semibold text-sky-400">Arogo</span> Health
//               vault
//             </p>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// interface CalendarDay {
//   day: number;
//   dayName: string;
//   isDisabled: boolean;
//   isSelected: boolean;
// }

// const AppointmentCalendar: React.FC = () => {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const [currentMonth, setCurrentMonth] = useState(0); // January
//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
//   const [selectedDay, setSelectedDay] = useState<number | null>(9); // Default selected day

//   // Generate calendar days for display
//   const generateCalendarDays = (): CalendarDay[] => {
//     const days = [];
//     const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
//     const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//     // Generate some sample days for the calendar
//     for (let i = 1; i <= Math.min(daysInMonth, 15); i++) {
//       const dayOfWeek = new Date(currentYear, currentMonth, i).getDay();
//       days.push({
//         day: i,
//         dayName: dayNames[dayOfWeek],
//         isDisabled: Math.random() > 0.8, // Randomly disable some days
//         isSelected: i === selectedDay,
//       });
//     }

//     return days;
//   };

//   const calendarDays = generateCalendarDays();

//   const handlePrevMonth = () => {
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear(currentYear - 1);
//     } else {
//       setCurrentMonth(currentMonth - 1);
//     }
//     setSelectedDay(null);
//   };

//   const handleNextMonth = () => {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(currentYear + 1);
//     } else {
//       setCurrentMonth(currentMonth + 1);
//     }
//     setSelectedDay(null);
//   };

//   const handleDayClick = (day: number, isDisabled: boolean) => {
//     if (!isDisabled) {
//       setSelectedDay(day);
//     }
//   };

//   return (
//     <div className="self-center mt-28 max-w-full w-[699px] max-md:mt-10">
//       <div className="w-full">
//         <div className="w-full max-md:max-w-full">
//           <div className="flex flex-wrap gap-10 justify-between items-end w-full text-neutral-500">
//             <h3 className="text-3xl font-medium tracking-wide leading-none">
//               Today, Jan {new Date().getDate()}
//             </h3>
//             <div className="text-2xl tracking-wide leading-none whitespace-nowrap w-[168px]">
//               <div className="flex gap-2 items-center">
//                 <button
//                   className="flex shrink-0 self-stretch my-auto h-[27px] w-[27px] items-center justify-center"
//                   onClick={handlePrevMonth}
//                   aria-label="Previous month"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 rotate-180"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 5l7 7-7 7"
//                     />
//                   </svg>
//                 </button>
//                 <div className="self-stretch my-auto">
//                   {months[currentMonth]}
//                 </div>
//                 <button
//                   className="flex shrink-0 self-stretch my-auto h-[27px] w-[27px] items-center justify-center"
//                   onClick={handleNextMonth}
//                   aria-label="Next month"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 5l7 7-7 7"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-4 items-center mt-6 w-full whitespace-nowrap max-md:max-w-full overflow-x-auto pb-4">
//             {calendarDays.map((day, index) => (
//               <button
//                 key={index}
//                 className={`flex flex-col grow shrink self-stretch px-5 py-7 my-auto rounded-3xl border ${
//                   day.isSelected
//                     ? "border-2 border-solid border-zinc-300"
//                     : "border border-solid border-zinc-300 border-opacity-60"
//                 } ${
//                   day.isDisabled
//                     ? "bg-red-200 bg-opacity-20 text-neutral-200 cursor-not-allowed"
//                     : "text-zinc-800 hover:bg-gray-50 cursor-pointer"
//                 } w-[78px]`}
//                 onClick={() => handleDayClick(day.day, day.isDisabled)}
//                 disabled={day.isDisabled}
//               >
//                 <div className="self-center text-2xl font-semibold tracking-wide leading-none">
//                   {day.day}
//                 </div>
//                 <div className="mt-3 text-2xl font-medium tracking-wide leading-none">
//                   {day.dayName}
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export interface Doctor {
//   id: string;
//   name: string;
//   specialization: string;
//   experience: string;
//   qualification: string;
//   location: string;
//   clinic: string;
//   distance: string;
//   languages: string[];
//   appointmentTypes: string[];
//   imageUrl: string;
// }

// export interface DoctorStats {
//   patients: number;
//   experienceYears: number;
//   rating: number;
//   ratingCount: number;
// }

// export interface AppointmentFormData {
//   symptoms: string;
//   patientType: "new" | "returning";
//   files: File[];
//   appointmentType: "online" | "in-person";
//   selectedDate: Date | null;
// }