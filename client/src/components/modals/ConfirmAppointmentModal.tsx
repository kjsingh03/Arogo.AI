import { ChangeEvent, useState } from 'react'
import { expert1 } from '../../assets';
import Input from '../inputs/Input';
import PhoneInput from '../inputs/PhoneInput';
import CalenderInput from '../inputs/CalenderInput';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setBookAppointmentFormData } from '../../store';
import { useNavigate } from 'react-router-dom';
import { validateBookingAppointmentForm } from '../../validations';

interface ConfirmAppointmentModalProps {
    closeModal: () => void;
}

const availTimes = ["11:00AM", "12:00PM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM", "6:00PM", "7:00PM", "8:00PM", "9:00PM", "10:00PM"]

export default function ConfirmAppointmentModal({ closeModal }: ConfirmAppointmentModalProps) {

    const [errors, setErrors] = useState({})

    const { formData, doctor } = useSelector((state: RootState) => state.bookAppointment);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(setBookAppointmentFormData({ ...formData, [e.target.name]: e.target.value }))

    const handlePayment = () => {
        const errors = validateBookingAppointmentForm(formData);
        if (Object.keys(errors).length > 0) {
            setErrors(errors)
            return;
        }
        navigate("/payment")
    }

    return (
        <div onClick={closeModal} className="w-screen h-screen bg-[rgba(107,107,107,0.50)] fixed top-0 left-0 z-[1000] flex justify-center items-center ">
            <div onClick={(e) => e.stopPropagation()} className="w-full max-w-[80%] h-[95vh] max-2xl:h-[95vh] overflow-y-auto thin-scrollbar bg-[#fafafa] flex flex-col items-center gap-17.5 py-9 px-10.75 rounded-[22px] max-sm:p-2.5 ">
                <div className="flex flex-col gap-19.25">
                    <div className="flex flex-col items-center gap-18">
                        <p className="text-[32px] font-semibold leading-[20px]">Confirm Appointment</p>
                        <div className="w-full flex items-center gap-18">
                            <div className="w-44.75 h-44.75 rounded-full overflow-hidden">
                                <img src={expert1} className="size-full object-cover object-top" alt="" />
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-7.75">
                                    <p className="text-2xl font-semibold leading-[14px]">
                                        {doctor?.displayName}
                                    </p>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-lg font-semibold leading-[14px]">
                                            {doctor?.specialty}
                                        </p>
                                        <p className="text-accent text-lg font-semibold leading-[14px]">
                                            {doctor?.bio}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4.5">
                                    <div className="flex flex-col gap-2 ">
                                        <p className="txext-xl font-semibold leading-[14px]">{"Banglore"}</p>
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
                    </div>
                    <div className="flex flex-col gap-16.75">
                        <div className="w-full flex flex-col gap-8 ">
                            <div className="w-full flex flex-col gap-4 ">
                                <p className="text-[26px] font-semibold leading-[23px] tracking-[0.52px]">Scheduling details</p>
                                <textarea name="symptoms" disabled value={formData.symptoms} className="h-[144px] border border-[#2E2E2E] px-6.25 py-3.75 outline-none rounded-lg " placeholder='Symptoms' />
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-8">
                                    <p className="text-[26px] font-semibold leading-[23px] tracking-[0.52px]">Date</p>
                                    <p className="leading-[23px] tracking-[0.32px]">Click to <span onClick={closeModal} className="text-accent active:underline">change date</span></p>
                                </div>
                                <div className="w-full flex flex-col gap-4">
                                    <p className="text-[22px] font-medium leading-[23px] tracking-[0.43px]">Visit Hour</p>
                                    <div className="flex flex-col gap-2">
                                        <div className="w-full grid grid-cols-7 gap-4">
                                            {
                                                availTimes?.map((data, idx) => (
                                                    <div onClick={() => dispatch(setBookAppointmentFormData({ visitHour: data }))} key={'availTime' + idx} className={`px-5.5 py-4.5 rounded-[15px] ${formData.visitHour === data ? 'text-white bg-accent' : ""} text-lg font-medium leading-[18px] border border-[#D9D9D999]`}>{data}</div>
                                                ))
                                            }
                                        </div>
                                        <p className="text-[#707070] leading-[23px] tracking-[0.32px]">Click a time to book </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-15.25">
                            <div className="flex flex-col gap-6.25">
                                <p className="text-[26px] font-semibold leading-[23px] tracking-[0.52px]">Personal details <span className="text-[#D9D9D999] text-lg font-light">(you can edit the details)</span></p>
                                <div className="flex items-center gap-9.5">
                                    <Input name='firstName' label='First Name' placeholder='Eg. Will' value={formData.firstName} onChange={handleChange} errLabel={false} />
                                    <Input name='lastName' label='Last Name' placeholder='Eg. Will' value={formData.lastName} onChange={handleChange} errLabel={false} />
                                </div>
                                <div className="w-[50%]">
                                    <PhoneInput name="phoneNumber" value={formData.phoneNumber} updateFormData={(str) => dispatch(setBookAppointmentFormData({ phoneNumber: str }))} errLabel={false} />
                                </div>
                                <div className="w-full flex items-center justify-between">

                                    <div className="w-[50%]">
                                        <CalenderInput
                                            selectedDate={formData.dob ? new Date(formData.dob) : null}
                                            onDateSelect={(date) => dispatch(setBookAppointmentFormData({ dob: date.toISOString() }))}
                                        />
                                    </div>

                                    <div className="w-[50%] flex flex-col justify-start text-start gap-3.5">
                                        <p className="text-xl leading-[25.697px]">Biological Sex</p>
                                        <div className="flex gap-2">
                                            {["male", "female", "prefer not to say"].map((g) => (
                                                <label key={g} className={`w-auto px-7.5 h-[46.5px] flex items-center justify-center rounded-[31.3px] text-center border capitalize ${formData.gender === g ? "text-white bg-accent" : "border-[#dfdfdf]"} cursor-pointer`}>
                                                    <input type="radio" name="gender" value={g} onChange={handleChange} checked={formData.gender === g} className="hidden" />{g}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {
                                    Object.keys(errors).length>0 &&
                                    <p className={`w-full text-sm leading-[25.89px] text-start text-[#ff3131]  min-h-6.5 `}>{Object.values(errors)[0] as string}</p>
                                }
                            </div>
                            <div className="w-full flex items-center justify-center">
                                <div className="w-full max-w-[629px] flex flex-col items-center gap-6">
                                    <p className="text-accent font-medium leading-[23px] tracking-[0.4px]">Pay on consultation confirm appointment</p>
                                    <button onClick={handlePayment} className='btn btn-primary py-5'>Proceed to payment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}