import { chevronRight, symptom1, symptom2, symptom3, symptom4 } from '../assets'

const symptoms = [
    { name: "General", img: symptom1 },
    { name: "Depression", img: symptom4 },
    { name: "Depression", img: symptom4 },
    { name: "Depression", img: symptom3 },
    { name: "ADHD & Neurodivergence", img: symptom3 },
    { name: "PTSD & Trauma Therapy", img: symptom2 },
    { name: "Eating Disorders", img: symptom4 },
    { name: "Depression", img: symptom4 },
]

export default function Assessment() {
    return (
        <div className='w-full max-w-[1434px] mx-auto flex flex-col items-center gap-8 py-9 max-2xl:px-8 '>
            <div className="w-full max-w-[836px] flex flex-col text-center">
                <h1 className="text-[42px] font-bold leading-[50px] tracking-[-1px] ">Designed by experts, delivered with care</h1>
                <p className="text-lg leading-[50px] ">Amaha is here to support you with all your mental health needs.</p>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center gap-x-4 gap-y-5">
                {
                    symptoms?.map((stm, idx) => (
                        <AssessmentSymptomCard key={'symptomCard' + idx} {...stm} />
                    ))
                }
            </div>
            <div className="w-full max-w-[586px] flex justify-between items-center ">
                <p className='text-xl font-medium leading-[50.4px] '>Unsure about your symptoms?</p>
                <button className="max-w-[245px] btn btn-secondary px-7.5 py-1.75 text-xl font-medium leading-[50.4px]">Take Assessment</button>
            </div>
        </div>
    )
}

interface AssessmentSymptomCardProps {
    img: string;
    name: string;
}

function AssessmentSymptomCard({ name, img }: AssessmentSymptomCardProps) {
    return (
        <div className='w-full h-[214px] bg-white border-[1.575px] border-[#E2DED9] rounded-[19px] pt-5 px-5 flex flex-col justify-between'>
            <div className="flex items-center justify-between">
                <p className='text-[22px] leading-[22.68px] tracking-[-0.567px] font-medium '>{name}</p>
                <img src={chevronRight} alt="right" />
            </div>
            <div className="flex justify-end">
                <div className="">
                    <img src={img} className='size-full object-cover' alt="symptom image" />
                </div>
            </div>
        </div>
    )
}
