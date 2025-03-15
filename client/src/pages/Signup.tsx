import { ChangeEvent, useEffect, useState } from "react";
import { googleAuth, logo } from "../assets";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { AuthHappySection, Input, PinInput } from "../components";
import { validateConfirmSecurityPin, validateEmail, validateOtp, validatePhoneNumber, validateProfileCompletion } from "../validations";
import { RegisterUserFormData } from "../types";
import { authRegisterUser, authRequestOTP, authVerifyOTP } from "../services";

export default function Signup() {

    const [formData, setFormData] = useState<RegisterUserFormData>({ firstName: "", lastName: "", gender: "", securityPin: "", email: "", otp: "", dateOfBirth: "", phoneNumber: "", dobDay: "", dobMonth: "", dobYear: "", confirmSecurityPin: "", mobileotp: "" });
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
        if (emailError) {
            setErrors({ email: emailError });
            return;
        }

        setErrors({});
        setLoading(!loading);

        try {
            const res = await authRequestOTP(formData.email);
            console.log(res)
            if (res.status === 'success') {
                updateStep("3");
                setSuccess({ otp: 'Verify your email by entering the 6-digit OTP sent to your inbox' })
            }
        } catch (error: any) {
            console.log(error)
            setErrors({ email: error.message });
        } finally {
            setLoading(!loading);
        }
    };

    const handleVerifyOtp = async () => {
        const otpError = validateOtp(formData.otp);
        if (otpError) {
            setErrors({ otp: otpError });
            return;
        }

        setErrors({});
        setLoading(!loading)

        try {
            const res = await authVerifyOTP(formData.email, formData.otp);
            if (res.status === 'success') {
                updateStep("6");
            }
        } catch (error: any) {
            console.log(error)
            setErrors({ otp: error.message });
        } finally {
            setLoading(!loading)
        }
    };

    const handleResendOTP = async () => {

        setLoading(!loading)

        try {
            const res = await authRequestOTP(formData.email);
            if (res.status === 'success') {
                setErrors({ otp: '' });
                setSuccess({ otp: 'OTP resend successfully' })
                console.log(res)
            }
        } catch (error: any) {
            console.log(error)
            setSuccess({})
            setErrors({ otp: error.message });
        } finally {
            setLoading(!loading)
        }
    };

    const handlePhoneSendOtp = async () => {
        const phoneError = validatePhoneNumber(formData.phoneNumber);
        if (phoneError) {
            setErrors({ phoneNumber: phoneError });
            return;
        }

        setErrors({});

        try {
            // const res = await axios.post(`${SERVER_URL}/api/auth/request-otp`, { email })

            // console.log(res)
            updateStep("6");

        } catch (err: any) {
            err instanceof Error ? console.log(err) : console.log('Internal Error')
        }
    };

    const handlePhoneVerifyOtp = () => {
        const otpError = validateOtp(formData.mobileotp);
        if (otpError) {
            setErrors({ mobileotp: otpError });
            return;
        }

        setErrors({});

        updateStep("6");
    };

    const handleProfileCompletion = () => {
        const profileErrors = validateProfileCompletion(formData);
        if (Object.keys(profileErrors).length > 0) {
            setErrors(profileErrors);
            return;
        }

        setErrors({})

        setFormData({ ...formData, dateOfBirth: `${formData.dobYear.padStart(4, "20")}-${formData.dobMonth.padStart(2, "0")}-${formData.dobDay.padStart(2, "0")}` })

        updateStep("7");
    };

    const handlePinSetup = async () => {
        const pinErrors = validateConfirmSecurityPin(formData.securityPin, formData.confirmSecurityPin);
        if (Object.keys(pinErrors).length > 0) {
            setErrors({ ...pinErrors });
            return;
        }

        setErrors({});
        setLoading(!loading)

        try {
            const res = await authRegisterUser(formData);
            if (res.status === 'success') {
                console.log(res)
                setSuccess({ securityPin: 'Profile Created successfully, Now please Login' })
                setTimeout(() => navigate("/login"), 1200)
            }
        } catch (error: any) {
            setErrors({ securityPin: error.message });
        } finally {
            setLoading(!loading)
        }
    };

    // console.log(formData)
    // console.log(errors)

    useEffect(() => {
        navigate("/signup")
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
            <div className="w-full h-[676px] flex max-xl:flex-col gap-8">
                <AuthHappySection />
                <div className="w-full xl:max-w-[628px] min-h-full px-13.5 pt-15.5 rounded-[28.2px] bg-[#fafafa] shadow-[0px_4px_36px_rgba(0,0,0,0.10)]">
                    {step === "1" && (
                        <div className="w-full h-full flex flex-col items-center justify-between">
                            <div className="w-full h-full flex flex-col items-center gap-24.5">
                                <div className="flex flex-col items-center text-center gap-3.5">
                                    <h1 className="text-[42px] font-medium leading-[25.659px] max-sm:text-3xl">Create an account</h1>
                                    <p className="text-[22px] leading-[25.659px] max-sm:text-base">Your mental health journey starts here.</p>
                                </div>

                                <div className="w-full max-w-[456px] flex flex-col gap-3 items-center text-center">
                                    <button onClick={handleGoogleSignIn} className="btn btn-dark flex gap-6.5 items-center justify-center">
                                        <img src={googleAuth} className="w-[43.6px] h-[43.6px]" alt="google icon" />
                                        <p className="text-[22px] leading-[25.6px] font-medium">Continue with Google</p>
                                    </button>
                                    <p className="text-[22px] leading-[25.6px]">OR</p>
                                    <button onClick={() => updateStep("2")} className="h-16 btn btn-light">
                                        <p className="text-[22px] leading-[25.6px]">Create with Email</p>
                                    </button>
                                    <Link to="/login">
                                        <p className="text-xl leading-[25.6px]">
                                            Already have an account? <span className="font-semibold text-accent cursor-pointer hover:underline">Sign In</span>
                                        </p>
                                    </Link>
                                </div>
                            </div>

                            <div className="w-full h-84.6px text-center py-10.5 border-t border-t-[#00000040]">
                                <p className="text-lg leading-[25.6px]">By signing up, you agree to our Terms of Service</p>
                            </div>
                        </div>
                    )}

                    {step === "2" && (
                        <div className="w-full h-full flex flex-col items-center justify-between">
                            <div className="w-full h-full flex flex-col items-center gap-17.5">
                                <div className="flex flex-col items-center text-center gap-3.5">
                                    <h1 className="text-[42px] font-medium leading-[25.659px] max-sm:text-3xl">Create an account</h1>
                                    <p className="text-[22px] leading-[25.659px] max-sm:text-base">Your mental health journey starts here.</p>
                                </div>
                                <Input name="email" label="Enter E-mail Address" value={formData.email} onChange={handleChange} placeholder="Enter your email" error={errors.email} />
                                <button className="w-[458px] h-16 rounded-[52px] btn btn-primary" onClick={handleSendOtp}>Send OTP</button>
                            </div>
                            <div className="w-full h-84.6px text-center py-10.5 border-t border-t-[#00000040]">
                                <p className="text-lg leading-[25.6px]">Email already registered. <Link to="/login"><span className="font-semibold text-accent cursor-pointer hover:underline">Sign In</span></Link> instead</p>
                            </div>
                        </div>
                    )}

                    {step === "3" && (
                        <div className="w-full h-full pb-15.5 flex flex-col items-center justify-between">
                            <div className="flex flex-col gap-16.5">
                                <div className="flex flex-col items-center text-center gap-3.5">
                                    <h1 className="text-[42px] font-medium leading-[25.659px] max-sm:text-3xl">Create an account</h1>
                                    <p className="text-[22px] leading-[25.659px] max-sm:text-base">Your mental health journey starts here.</p>
                                </div>
                                <PinInput value={formData.otp} label="Enter OTP" onChange={(newOTP) => { setFormData({ ...formData, otp: newOTP }); setErrors({}) }} success={success.otp} error={errors.otp} />
                                {
                                    errors.otp === 'Invalid or expired OTP' &&
                                    <p onClick={handleResendOTP} className="text-accent text-end text-lg leading-[25.89px] font-light hover:underline cursor-pointer h-6">Resend OTP</p>
                                }
                            </div>
                            <button onClick={handleVerifyOtp} className="w-[458px] h-16 rounded-[52px] btn btn-primary">Continue</button>
                        </div>

                    )}

                    {step === "4" && (
                        <div className="w-full h-full flex flex-col items-center justify-between">
                            <div className="w-full h-full flex flex-col items-center gap-17.5">
                                <div className="flex flex-col items-center text-center gap-3.5">
                                    <h1 className="text-[42px] font-medium leading-[25.659px] max-sm:text-3xl">Create an account</h1>
                                    <p className="text-[22px] leading-[25.659px] max-sm:text-base">Your mental health journey starts here.</p>
                                </div>
                                <Input name="phoneNumber" label="Enter Mobile number" value={formData.phoneNumber} onChange={handleChange}
                                    placeholder="Enter your mobile number" error={errors.phoneNumber}
                                />
                                <button className="w-[458px] h-16 rounded-[52px] btn btn-primary" onClick={handlePhoneSendOtp}>Send OTP</button>
                            </div>
                            <div className="w-full h-84.6px text-center py-10.5 border-t border-t-[#00000040]">
                                <p className="text-lg leading-[25.6px]">Email already registered. <Link to="/login"><span className="font-semibold text-accent cursor-pointer hover:underline">Sign In</span></Link> instead</p>
                            </div>
                        </div>
                    )}

                    {step === "5" && (
                        <div className="w-full h-full pb-15.5 flex flex-col items-center justify-between">
                            <div className="flex flex-col gap-16.5">
                                <div className="flex flex-col items-center text-center gap-3.5">
                                    <h1 className="text-[42px] font-medium leading-[25.659px] max-sm:text-3xl">Create an account</h1>
                                    <p className="text-[22px] leading-[25.659px] max-sm:text-base">Your mental health journey starts here.</p>
                                </div>
                                <PinInput value={formData.mobileotp} label="Enter OTP" onChange={(newOTP) => { setFormData({ ...formData, mobileotp: newOTP }) }} success="Verify your mobile by entering the 6-digit OTP" error={errors.mobileotp} />
                            </div>
                            <button onClick={handlePhoneVerifyOtp} className="w-[458px] h-16 rounded-[52px] btn btn-primary">Continue</button>
                        </div>
                    )}

                    {step === "6" && (
                        <div className="w-full h-full flex flex-col items-center justify-between px-10">
                            <div className="flex flex-col items-center text-center gap-8">
                                <div className="flex flex-col items-center text-center gap-3.5">
                                    <h1 className="text-3xl font-medium leading-5 max-sm:text-z3xl">Complete your profile</h1>
                                    <p className="text-lg leading-5 max-sm:text-base">We need the details of the main person responsible for this account.</p>
                                </div>
                                <div className="flex flex-col gap-3.5">
                                    <div className="flex items-center gap-2">
                                        <Input name="firstName" onChange={handleChange} value={formData.firstName} placeholder="First Name" error={errors.firstName} />
                                        <Input name="lastName" onChange={handleChange} value={formData.lastName} placeholder="Last Name" error={errors.lastName} />
                                    </div>
                                    <div className="w-full flex flex-col justify-start text-start gap-3.5">
                                        <p className="text-lg leading-5 max-sm:text-base">Age</p>
                                        <div className="flex gap-2">
                                            <input type="text" name="dobDay" maxLength={2} onChange={handleChange} value={formData.dobDay} placeholder="DD" className="max-w-[82.5px] h-[46.5px] rounded-[31.3px] text-center border border-[#dfdfdf] text-[17.2px] leading-[21.6px] px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                            <input type="text" name="dobMonth" maxLength={2} onChange={handleChange} value={formData.dobMonth} placeholder="MM" className="max-w-[82.5px] h-[46.5px] rounded-[31.3px] text-center border border-[#dfdfdf] text-[17.2px] leading-[21.6px] px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                            <input type="text" name="dobYear" maxLength={4} onChange={handleChange} value={formData.dobYear} placeholder="YYYY" className="max-w-[82.5px] h-[46.5px] rounded-[31.3px] text-center border border-[#dfdfdf] text-[17.2px] leading-[21.6px] px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                        <p className="text-[#ff3131] min-h-6">{errors.dateOfBirth}</p>
                                    </div>
                                    <div className="w-full flex flex-col justify-start text-start gap-3.5">
                                        <p className="text-lg leading-5 max-sm:text-base">Biological Sex</p>
                                        <div className="flex gap-2">
                                            {["Male", "Female", "Prefer not to say"].map((g) => (
                                                <label key={g} className={`w-auto px-7.5 h-[46.5px] flex items-center justify-center rounded-[31.3px] text-center border ${formData.gender === g ? "border-blue-500 bg-blue-100" : "border-[#dfdfdf]"} cursor-pointer`}>
                                                    <input type="radio" name="gender" value={g} onChange={handleChange} checked={formData.gender === g} className="hidden" />{g}
                                                </label>
                                            ))}
                                        </div>

                                        <p className="text-[#ff3131] min-h-6">{errors.gender}</p>
                                    </div>
                                    <button className="btn btn-primary max-w-[384px] w-full px-6 py-4 text-center rounded-[44px] text-[19.44px] leading-[21.6px] " onClick={handleProfileCompletion}>Set up a pin</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === "7" && (
                        <div className="w-full h-full flex flex-col items-center justify-between">
                            <div className="w-full h-full pb-15.5 flex flex-col items-center justify-between">
                                <div className="flex flex-col gap-16.5">
                                    <div className="flex flex-col items-center text-center gap-3.5">
                                        <h1 className="text-[42px] font-medium leading-[25.659px] max-sm:text-3xl">Set up Security Pin</h1>
                                    </div>
                                    <div className="flex flex-col gap-6">
                                        <PinInput value={formData.securityPin} label="Enter 6-digit Security PIN" onChange={(newSecurityPin) => { setFormData({ ...formData, securityPin: newSecurityPin }) }} errLabel={false} />
                                        <PinInput value={formData.confirmSecurityPin} label="Re-enter PIN" onChange={(newSecurityPin) => { setFormData({ ...formData, confirmSecurityPin: newSecurityPin }) }} errLabel={false} />
                                        <p className={` ${(errors.securityPin || errors.confirmSecurityPin) ? "text-[#ff3131]" : success.securityPin ? "text-[#1bcc00]" : ""} min-h-6`}>{errors.securityPin || errors.confirmSecurityPin || success.securityPin}</p>
                                    </div>
                                </div>
                                <button onClick={handlePinSetup} className="w-[458px] h-16 rounded-[52px] btn btn-primary">Continue</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};