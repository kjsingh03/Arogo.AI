

import { flask, lock, mentalDoctorGroup, target, vcDoctor, videoPlayer } from "../../../assets";
import { FeatureItemProps, StatisticItemProps } from "../../../types/props";

export default function WellBeingHero() {
    const statistics = [
        { value: "8-10", label: "participants" },
        { value: "6-12", label: "Professionals" },
        { value: "1", label: "Assessment" },
        { value: "23 Min", label: "video session per week" },
    ];

    const features = [
        { icon: lock, title: "Data Security", description: "haben oberste Priorität" },
        { icon: target, title: "Quick Start", description: "noch in derselben Woche starten" },
        { icon: flask, title: "Scientific", description: "fundiert" },
    ];

    return (
        <div className="w-full max-w-[1453px] mx-auto flex flex-col items-center px-16 lg:px-20 py-20 rounded-[84px] bg-[rgba(177,228,255,0.15)] gap-10">
            <img src={mentalDoctorGroup} alt="Arogo AI Logo" className="object-contain max-w-full aspect-[3.44] w-[172px]" />
            <h2 className="text-5xl font-semibold tracking-tight leading-none text-center">
                How Arogo AI Supports Your Mental Well-Being
            </h2>
            <p className="text-lg tracking-normal leading-6 text-center max-md:max-w-full">
                At Arogo AI, we understand that mental health is a journey best taken together. Our digital group sessions connect you with like-minded individuals facing similar challenges. Guided by experienced psychologists, these sessions provide fresh perspectives on your situation, helping you manage current struggles and build resilience for the future.
            </p>
            <div className="flex py-5 gap-5 justify-between items-start max-w-full text-center w-[861px] max-md:mt-10">
                {statistics.map((stat, index) => (
                    <StatisticItem key={index} {...stat} />
                ))}
            </div>
            <div className="flex gap-5 w-full max-w-[1138px] max-lg:flex-col">
                <div className="w-[65%] max-lg:w-full bg-[#fafafa] rounded-2xl flex flex-col gap-11 py-7 xl:px-7">
                    <div className="flex gap-1.5 text-sm leading-loose">
                        <p className="text-[14.35px] font-semibold px-2 py-2 bg-lime-50 rounded">Geleitete Sitzung</p>
                        <p className="text-[14.35px] font-semibold px-4 py-2 whitespace-nowrap bg-lime-50 rounded">Gruppensitzung</p>
                    </div>
                    <h3 className="text-2xl tracking-tight leading-7">
                        Weekly alternation of guided group sessions and sessions with your group only
                    </h3>
                    <p className="text-[18.38px] leading-6 max-md:max-w-full">
                        At Arogo AI, we understand that mental health is a journey best taken together. Our digital group sessions connect you with like-minded individuals facing similar challenges. Guided by experienced psychologists, these sessions provide fresh perspectives on your situation, helping you manage current struggles and build resilience for the future.
                    </p>
                    <button className="w-max px-14 py-5 btn btn-primary rounded-[51px]  max-md:px-5">
                        Start your assessment now
                    </button>
                </div>
                <div className="w-93.5 h-111 max-lg:w-full max-lg:h-151 flex flex-col justify-end items-center relative overflow-hidden rounded-xl">
                    <img src={vcDoctor} alt="doctor" className="size-full object-cover absolute" />
                    <div className="flex items-center gap-2.75 py-5.75 px-7">
                        <img src={videoPlayer} alt="play icon" className="object-contain shrink-0 aspect-square w-[50px] relative z-10" />
                        <p className="relative z-10 text-white text-xl font-semibold tracking-normal leading-5">
                            Psychologist video call in video
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 max-w-full font-medium tracking-normal text-center w-[642px]">
                <button className="w-full max-w-[418px] px-15 py-6 text-xl btn btn-primary rounded-[51px] max-md:px-5">
                    Free individual consultation
                </button>
                <button style={{ borderColor: 'rgb(10, 10, 15, 0.20)' }} className="w-full max-w-[214px] px-16 py-6 text-xl leading-none text-black whitespace-nowrap border border-solid border-[#2e2e2e] border-opacity-20 rounded-[51px] max-md:px-5">
                    View
                </button>
            </div>
            <div className="flex flex-wrap gap-5 justify-between max-w-full text-[#545457] w-[880px]">
                {features.map((feature, index) => (
                    <FeatureItem key={index} {...feature} />
                ))}
            </div>
        </div>
    );
}

function StatisticItem({ value, label }: StatisticItemProps) {
    return (
        <div className="w-[25%] flex flex-col gap-2 text-center">
            <div className={`text-4xl h-12 font-semibold whitespace-nowrap tracking-tight leading-none ${value === "1" || value === "23 Min" ? "text-5xl" : ""}`}>
                {value}
            </div>
            <div className={`text-sm tracking-normal text-[#545457]`}>
                {label}
            </div>
        </div>
    );
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
    return (
        <div className="flex gap-2 items-start">
            <img src={icon} alt={`${title} icon`} className="object-contain w-[50px] h-[50px] p-1 " />
            <div className="flex flex-col justify-end h-full">
                <h3 className={`text-lg font-semibold tracking-normal `}>{title}</h3>
                <p className="text-[10px]">{description}</p>
            </div>
        </div>
    );
}
