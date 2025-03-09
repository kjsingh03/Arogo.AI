import { locationMap, rightArrow } from '../../assets'
import { Appointment } from '../../types'

export default function UpcomingAppointmentCard({ doctor, times, date, mode, queue, handleClick }: Appointment & { handleClick: () => void }) {
    return (
        <div onClick={handleClick} className='w-full xl:h-[183.55px] rounded-[15.2px] p-[12px_10.2px] 2xl:p-[12px_40.2px] flex flex-col xl:flex-row items-center justify-between text-center xl:text-start gap-11 xl:gap-0 bg-white cursor-pointer'>
            <div className="w-[129.44px] h-[131px] overflow-hidden rounded-full ">
                <img src={doctor.img} className='size-full object-cover' alt="doctor" />
            </div>

            <div className="xl:w-[20%] 2xl:w-[27%] h-full flex flex-col justify-between text-[19.55px] font-medium leading-[24.98px] tracking-default py-4">
                <div className="flex flex-col ">
                    <p className='text-[23.894px] tracking-[0.478px] line-clamp-1 '>{doctor.name}</p>
                    <p className='line-clamp-1 '>{doctor.speciality}</p>
                </div>
                <div className=" ">
                    <p>{doctor.clinic}</p>
                    <div className="flex items-center gap-[13.29px] hover:border-b-accent bg-acc border-b-transparent cursor-pointer border-b  ">
                        <p className='text-accent font-light cursor-pointer line-clamp-1 '>{doctor.location}</p>
                        <img src={locationMap} className="xl:w-[28.238px] h-[28.238px] " alt="" />
                    </div>
                </div>
            </div>

            <div className="xl:w-[21%] flex justify-center items-center gap-3.5 text-accent">
                <p className="xl:w-[104.26px] text-center border border-accent rounded-[13px] h-[48.874px] p-[13.17px_21.4px_13.71px_20.9px] ">{times}</p>
                <p className="min-w-38 line-clamp-1 leading- break-words text-center border border-accent rounded-[13px] h-[48.874px] p-[13.17px_21.4px_13.71px_20.9px] ">{date}</p>
            </div>

            <p className="xl:w-[5%] text-center font-medium text-[19.55px] ">{mode}</p>

            <div className="xl:w-[157.483px] h-[159.65px] text-white bg-accent p-[23.896px_29.325px_7.601px_30.41px] rounded-[28.2px] flex flex-col justify-center items-center">
                <p className='text-[19.55px] font-medium leading-[14.754px] tracking-default '>Queue</p>
                <p className='text-[80.37px] font-medium '>{queue}</p>
            </div>

            <div className="flex items-center gap-[9.3px] text-accent border-b border-b-transparent hover:border-b-accent">
                <p className='text-[19.55px] font-medium leading-[14.754px] tracking-default '>View more</p>
                <img src={rightArrow} className='w-[34.75px] h-[34.75px] ' alt="" />
            </div>
        </div>
    )
}
