import { ChangeEvent, useEffect, useRef, useState } from "react";
import { donateHeart, googleAuth, logo } from "../assets";

interface FeatureData {
    altText: string;
    description: string;
}

const features: FeatureData[] = [
    {
        altText: "Meditation icon",
        description:
            "Learn to meditate from the world's best teachers with video courses & library of 500+ meditations",
    },
    {
        altText: "Challenge icon",
        description:
            "Build your meditation habit during live challenges with thousands of other meditators",
    },
    {
        altText: "Sleep icon",
        description: "Fall — and stay — asleep with relaxing Sleep sessions",
    },
    {
        altText: "Podcast icon",
        description:
            "Listen ad-free to the Ten Percent Happier & More Than a Feeling podcast",
    },
];

export default function Login() {

    const [email, setEmail] = useState("");
    const [pin, setPin] = useState(["", "", "", "", "", ""]);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePinChange = (newPin: string[]) => {
        setPin(newPin);
    };

    const handleContinue = () => {
        console.log("Signing in with:", { email, pin: pin.join("") });
    };

    const handleGoogleSignIn = () => {
        console.log("Signing in with Google");
    };

    const handleSignUp = () => {
        console.log("Navigating to sign up");
    };

    const handleOtpSignIn = () => {
        console.log("Signing in with OTP");
    };

    return (
        <div className="authbg w-full h-screen overflow-y-auto py-16 pl-30.75 pr-32.5 max-xl:px-10 flex items-center flex-col gap-20">
            <div className="flex flex-col items-center gap-2.5">
                <div className="flex items-center gap-6.25">
                    <div className="w-17.25 h-17.25 overflow-hidden rounded-full">
                        <img src={logo} className="size-full object-cover" alt="logo" />
                    </div>
                    <p className="text-[#FAFAFA] text-4xl font-semibold ">Arogo AI</p>
                </div>
                <p className="text-[#FAFAFA] text-[22px] font-medium ">Your Health, Simplified – Care at Your Fingertips.</p>
            </div>
            <div className="flex max-xl:flex-col gap-8">
                <div className="w-full max-w-[739px] h-131.5 px-23.5 py-16 max-2xl:px-4 mx-auto my-0 rounded-3xl bg-[#fafafa] shadow-[0px_4px_36px_rgba(0,0,0,0.1)] max-md:px-2">
                    <h2 className="mb-10 text-2xl font-medium leading-5 text-center">
                        Do what it actually takes to be happier
                    </h2>
                    <div className="grid relative gap-10 grid-cols-[repeat(2,1fr)] max-md:gap-8 max-sm:gap-10 max-sm:grid-cols-[1fr]">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={`feature-${index}`}
                                altText={feature.altText}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-full xl:max-w-[489px] flex flex-col items-center p-8 rounded-3xl bg-[#fafafa] h-[526px] shadow-[0px_4px_36px_rgba(0,0,0,0.10)]">
                    <h1 className="mb-3 text-3xl font-medium leading-5 max-sm:text-z3xl">
                        Sign In
                    </h1>
                    <p className="mb-7 text-lg leading-5 max-sm:text-base">
                        Your mental health journey starts here.
                    </p>

                    <label className="self-start mb-3 ml-3 text-sm leading-5">
                        Enter Registered email
                    </label>
                    <div className="px-8 py-4 mb-3.5 bg-gray-100 border border-solid border-neutral-200 h-[54px] rounded-[65px] w-[385px] max-md:w-full max-md:max-w-[385px]">
                        <input
                            type="email"
                            placeholder="example@email.com"
                            className="w-full h-full text-base bg-transparent border-none outline-none text-[#fafafa] leading-[20px]0"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>

                    <label className="self-start mb-3 ml-3 text-sm leading-5">
                        Enter 6-digit Security PIN
                    </label>
                    <PinInput onChange={handlePinChange} />

                    <button
                        className="flex items-center justify-center mb-3 text-lg font-medium bg-sky-400 cursor-pointer h-[50px] rounded-[40px] text-[#fafafa] leading-[20px] w-[356px] max-md:w-full max-md:max-w-[385px]"
                        onClick={handleContinue}
                    >
                        Continue
                    </button>

                    <p className="mb-5 text-sm font-medium">
                        Sign In with
                        <span className="text-sky-400 cursor-pointer ml-1" onClick={handleOtpSignIn}>OTP</span>
                    </p>

                    <button className="flex items-center px-14 py-2 mb-3 cursor-pointer bg-[#2a2a2a] h-[50px] rounded-[40px] w-[356px] max-md:w-full max-md:max-w-[385px] max-sm:px-5 max-sm:py-2" onClick={handleGoogleSignIn}                    >
                        <img src={googleAuth} alt="Google" className="h-[34px] w-[34px]" />
                        <span className="text-lg font-medium text-[#fafafa] leading-[20px] max-sm:text-base">
                            Continue with Google
                        </span>
                    </button>

                    <p className="text-base">
                        Don't have an account?
                        <span
                            className="font-semibold text-sky-400 cursor-pointer ml-1"
                            onClick={handleSignUp}
                        >
                            Sign Up
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
};

function FeatureCard({ altText, description }: FeatureData) {
    return (
        <article className="flex flex-col items-center gap-2.5 px-5 py-0 text-center max-sm:p-0">
            <div className="w-14 h-14 relative overflow-hidden">
                <img
                    src={donateHeart}
                    alt={altText}
                    className="size-full"
                />
            </div>
            <p className="text-base leading-5 max-w-[236px] max-sm:max-w-full">
                {description}
            </p>
        </article>
    );
};

interface PinInputProps {
    onChange: (pin: string[]) => void;
}

function PinInput({ onChange }: PinInputProps) {
    const [pin, setPin] = useState<string[]>(Array(6).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, 6);

        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;

        const newPin = [...pin];
        newPin[index] = value.slice(0, 1);
        setPin(newPin);
        onChange(newPin);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !pin[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div className="flex gap-1.5 mb-5 max-md:w-full max-md:max-w-[385px] max-sm:flex-wrap max-sm:gap-2.5 max-sm:justify-center">
            {Array(6)
                .fill(null)
                .map((_, index) => (
                    <div
                        key={`pin-input-${index}`}
                        className="flex justify-center items-center bg-gray-100 rounded-2xl border border-solid border-neutral-200 h-[60px] w-[60px] max-sm:h-[50px] max-sm:w-[50px]"
                    >
                        <input
                            ref={(el) => { inputRefs.current[index] = el }}
                            type="text"
                            maxLength={1}
                            value={pin[index]}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className="w-full h-full text-center text-xl bg-transparent border-none outline-none"
                        />
                    </div>
                ))}
        </div>
    );
};