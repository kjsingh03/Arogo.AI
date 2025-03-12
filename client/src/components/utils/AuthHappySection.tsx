import { donateHeart } from '../../assets';

const features = [{ description: "Learn to meditate from the world's best teachers with video courses & library of 500+ meditations", }, { description: "Build your meditation habit during live challenges with thousands of other meditators", }, { description: "Fall — and stay — asleep with relaxing Sleep sessions", }, { description: "Listen ad-free to the Ten Percent Happier & More Than a Feeling podcast", },];


export default function AuthHappySection() {
    return (
        <div className="w-full max-w-[948px] h-full flex flex-col items-center justify-center gap-20 px-24 py-16 max-2xl:px-4 mx-auto my-0 rounded-3xl bg-[#fafafa] shadow-[0px_4px_36px_rgba(0,0,0,0.1)]">
            <h2 className="text-2xl font-medium leading-[25.659px] text-center">
                Do what it actually takes to be happier
            </h2>
            <div className="grid relative gap-10 grid-cols-[repeat(2,1fr)] max-md:gap-8 max-sm:gap-10 max-sm:grid-cols-[1fr]">
                {features.map((feature, idx) => (
                    <div key={'heart' + idx} className="w-full flex flex-col items-center gap-2.5 px-5 py-0 text-center max-sm:p-0">
                        <div className="w-14 h-14 relative overflow-hidden">
                            <img src={donateHeart} alt="heart icon" className="size-full" />
                        </div>
                        <p className="w-full text-lg leading-[25.659px]">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
