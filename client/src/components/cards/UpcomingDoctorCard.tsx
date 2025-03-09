import { DoctorCardProps } from "../../types/props";

function DoctorCard({ img, name, clinic, experience, specialization, rate }: DoctorCardProps) {
    return (
        <div className="w-[719px] h-[364px] p-6 bg-white rounded-2xl max-md:p-5 max-md:w-full max-md:h-auto">
            <div className="relative flex gap-4">
                <div className="overflow-hidden relative rounded-3xl h-[254px] w-[218px] max-sm:w-full max-sm:h-[200px]">
                    <img src={img} className="object-cover bg-white size-full" alt="Doctor profile" />
                </div>
                <div className="flex flex-col gap-12 leading-[14px]">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-2xl font-medium">{name}</h2>
                        <div className="flex flex-col gap-1.75">
                        <p>{clinic}</p>
                        <p className="text-lg font-light">{experience}</p>
                        </div>
                    </div>
                    <p className="font-medium">{specialization}</p>
                </div>
                <button className="absolute w-8 h-8 right-[30px] top-[25px] max-sm:right-[15px] max-sm:top-[15px]">
                    <svg className="text-white hover:text-red-500 cursor-pointer stroke-[1.5px] hover:stroke-0" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 28C16 28 3 21 3 12.75C3 10.9598 3.71116 9.2429 4.97703 7.97703C6.2429 6.71116 7.95979 6 9.75 6C12.5738 6 14.9925 7.53875 16 10C17.0075 7.53875 19.4262 6 22.25 6C24.0402 6 25.7571 6.71116 27.023 7.97703C28.2888 9.2429 29 10.9598 29 12.75C29 21 16 28 16 28Z" stroke="#707070" fill="currentColor" />
                    </svg>
                </button>
            </div>
            <div className="flex items-center justify-between">
                <button className="flex items-center justify-center text-base font-medium bg-yellow-400 cursor-pointer h-[31px] rounded-[35px] w-[107px] max-sm:w-full">
                    Rate now
                </button>
                <div className="flex items-center justify-between gap-4.75 relative">
                    <div className="absolute text-sm -top-6 right-0 ">
                        <span>Starts @</span>
                        <span className="font-semibold">{rate}</span>
                    </div>
                    <button className="text-xl font-medium border border-solid cursor-pointer border-[#2e2e2e] h-[49px] rounded-[35px] w-[183px] max-sm:w-full">
                        View more
                    </button>
                    <button className="text-xl btn btn-primary h-[49px] rounded-[35px] w-[183px] max-sm:w-full">
                        Re-book
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DoctorCard;