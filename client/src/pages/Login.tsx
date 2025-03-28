import { ChangeEvent, useEffect, useState } from "react";
import { googleAuth, logo } from "../assets";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Input, PinInput } from "../components";
import { validateEmail, validateOtp, validateSecurityPin } from "../validations";
import { LoginUserFormData } from "../types";
import { authLoginUser, authVerifyOTP } from "../services";

export default function Login() {

    const [formData, setFormData] = useState<LoginUserFormData>({ securityPin: "", email: "", otp: "" });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [success, setSuccess] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const step = searchParams.get("step") || "1";

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        if (errors[e.target.name]) {
            setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
        }
    };

    const updateStep = (newStep: string) => setSearchParams({ step: newStep });

    const handleGoogleSignIn = () => {
        console.log("Signing up with Google");
        navigate("/physical");
    };

    const handleSendOtp = async () => {
        const emailError = validateEmail(formData.email);
        const pinError = validateSecurityPin(formData.securityPin);
        if (emailError || pinError) {
            setErrors({ email: emailError, securityPin: pinError });
            return;
        }

        setErrors({});
        setLoading(!loading);

        try {
            const res = await authLoginUser(formData.email, formData.securityPin);
            console.log(res)
            if (res.status === 'success') {
                updateStep("2");
                setSuccess({ email: 'Verify your email by entering the 6-digit OTP sent to your inbox' })
            }
        } catch (error: any) {
            console.log(error)
            setErrors({ email: error.message, securityPin: error.message });
        } finally {
            setLoading(!loading);
        }
    };

    const handleVerifyOtp = async () => {
        const emailError = validateEmail(formData.email);
        const otpError = validateOtp(formData.otp);
        if (emailError || otpError) {
            setErrors({ email: emailError, otp: otpError });
            return;
        }

        setErrors({});
        setLoading(!loading)

        try {
            const res = await authVerifyOTP(formData.email, formData.otp);
            if (res.status === 'success') {
                console.log(res)
                localStorage.setItem('credentials', JSON.stringify(res.user))
                setSuccess({ securityPin: 'User logged in successfully' })
                setTimeout(() => navigate("/physical"), 1200)
            }
        } catch (error: any) {
            console.log(error)
            setErrors({ otp: error.message });
        } finally {
            setLoading(!loading)
        }
    };

    // console.log(formData)
    // console.log(errors)

    useEffect(() => {
        navigate("/login")
    }, [])

    return (
        <div className="authbg w-full h-screen overflow-y-auto py-16 pl-30.75 pr-32.5 max-xl:px-10 flex items-center flex-col gap-20">
            <div className="flex flex-col items-center gap-2.5">
                <Link to="/">
                    <div className="flex items-center gap-6.25">
                        <div className="w-17.25 h-17.25 overflow-hidden rounded-full">
                            <img src={logo} className="size-full object-cover" alt="logo" />
                        </div>
                        <p className="text-[#FAFAFA] text-4xl font-semibold ">Arogo AI</p>
                    </div>
                </Link>
                <p className="text-[#FAFAFA] text-[22px] font-medium ">Your Health, Simplified - Care at Your Fingertips.</p>
            </div>
            <div className="w-full h-[547px] flex justify-center max-xl:flex-col gap-8">
                {/* <AuthHappySection /> */}
                <div className="w-full xl:max-w-[628px] min-h-full px-16.5 pt-6 rounded-[28.2px] bg-[#fafafa] shadow-[0px_4px_36px_rgba(0,0,0,0.10)]">
                    <div className="w-full h-full flex flex-col items-center justify-around">
                        <div className="w-full h-ful flex flex-col items-center gap-5.5 justify-between">
                            <div className="flex flex-col items-center text-center gap-3.5">
                                <h1 className="text-[42px] font-medium leading-[25.659px] max-sm:text-3xl">Sign In</h1>
                                <p className="text-[22px] leading-[25.659px] max-sm:text-base">Your mental health journey starts here.</p>
                            </div>

                            <div className="w-full flex flex-col items-center gap-3.5">
                                <Input name="email" placeholder="Enter your email" label="Enter Registered email" onChange={handleChange} value={formData.email} error={errors.email} success={success.email} />
                                {
                                    step === "2" &&
                                    <>
                                        <PinInput value={formData.securityPin} label="Security Pin" onChange={(newSecurityPin: string) => { setFormData({ ...formData, securityPin: newSecurityPin }); setErrors({}) }} error={errors.securityPin} />
                                        <PinInput value={formData.otp} label="OTP" onChange={(newotp: string) => { setFormData({ ...formData, otp: newotp }); setErrors({}) }} error={errors.otp} />
                                    </>
                                }
                            </div>

                        </div>
                        <div className="w-full max-w-[496px] py-2 flex flex-col gap-3 items-center text-center">
                            <button onClick={() => step !== "2" ? handleSendOtp() : handleVerifyOtp()} className="h-16 btn btn-primary">
                                <p className="text-[22px] leading-[25.6px]">Continue</p>
                            </button>
                            <p className="text-[22px] leading-[25.6px]">or</p>
                            <button onClick={handleGoogleSignIn} className="btn btn-dark flex gap-6.5 items-center justify-center">
                                <img src={googleAuth} className="w-[43.6px] h-[43.6px]" alt="google icon" />
                                <p className="text-[22px] leading-[25.6px] font-medium">Continue with Google</p>
                            </button>
                            <Link to="/signup">
                                <p className="text-xl leading-[25.6px]">
                                    Don't have an account? <span className="font-semibold text-accent cursor-pointer hover:underline">Sign Up</span>
                                </p>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
};