import { StepItemProps } from "../../../types/props";

export default function StepsHero() {
    const steps: StepItemProps[] = [
        {
            number: 1,
            title: "Search",
            description: "No credit card is needed. Get access to all 30+ advanced features that makes Texting Base so great.",
            rightDivider: true
        },
        {
            number: 2,
            title: "Select",
            description: "Work one-on-one with your Customer Success Manager to make sure you know everything about Texting Base.",
            leftDivider: true,
            rightDivider: true
        },
        {
            number: 3,
            title: "Schedule",
            description: "Send SMS texts messages and MMS pictures messages for free. Sit back and easily track your performance.",
            leftDivider: true
        },
    ];

    return (
        <section className="px-0 py-27 w-full min-h-150.25 bg-accent">
            <div className="max-w-[1120px] px-5 mx-auto text-center">
                <h2 className="mb-5 text-5xl font-bold tracking-tighter text-white uppercase leading-[58px] max-sm:text-4xl max-sm:leading-10">
                    Steps to connect with a doc
                </h2>
                <p className="mx-auto mt-0 mb-20 text-lg tracking-normal leading-7 text-white max-w-[796px] max-sm:mb-12 max-sm:text-base max-sm:leading-6">
                    You keep doing what you do best. Texting Base will take care of your
                    business text messaging needs to help your business grow.
                </p>
                <div className="flex gap-5 justify-between max-md:flex-col max-md:gap-10 max-md:items-center">
                    {
                        steps.map((step, index) => (
                            <StepItem key={index} {...step} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

function StepItem({ number, title, description, rightDivider = false, leftDivider = false, }: StepItemProps) {
    return (
        <article className="flex flex-col flex-1 items-center md:w-86.5 z-0">
            <div className="mb-4.5 relative z-10 bg-red-80 w-full flex justify-center">
                {leftDivider && (
                    <div className="absolute top-[50%] -left-[9px] -z-10 border-b border-dashed border-b-cyan-300 w-[150px] max-md:hidden" />
                )}
                <div className="text-lg z-10 font-bold text-white bg-accent rounded-full border border-white border-solid h-[65px] w-[65px] flex items-center justify-center">
                    {number}
                </div>
                {rightDivider && (
                    <div className="absolute top-[50%] -right-[9px] -z-10 border-b border-dashed border-b-cyan-300 w-[150px] max-md:hidden" />
                )}
            </div>
            <div className="w-full ">
                <h3 className="mb-2.75 text-2xl font-bold tracking-normal leading-7 text-white max-sm:text-xl">
                    {title}
                </h3>
                <p className="text-base -tracking-default leading-6 text-white max-sm:text-sm max-sm:leading-6">
                    {description}
                </p>
            </div>
        </article>
    );
};