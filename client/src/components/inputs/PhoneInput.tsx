import { ChangeEvent, useState, InputHTMLAttributes } from "react";
import { pencil } from "../../assets";

interface PhoneInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    value: string;
    updateFormData: (newValue: string) => void;
    error?: string;
    success?: string;
    classes?: string;
    errLabel?: boolean;
    markAsRequired?: boolean;
    pencilEnabled?: boolean;
}

export default function PhoneInput({ name, value, updateFormData, error, success, classes, errLabel = true, markAsRequired = false, pencilEnabled = false, style, ...rest }: PhoneInputProps) {

    const [countryCode, setCountryCode] = useState("+91");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleCountryCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newCode = e.target.value.replace(/\D/g, "");
        const formattedCode = newCode ? `+${newCode}` : "+";
        setCountryCode(formattedCode);
        updateFormData(`${formattedCode}${phoneNumber}`);
    };

    const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newNumber = e.target.value.replace(/\D/g, "");
        setPhoneNumber(newNumber);
        updateFormData(`${countryCode}${newNumber}`);
    };

    return (
        <div className={`${classes} flex flex-col w-full gap-2`}>
            <label className="flex justify-between w-full">
                <div className="relative">
                    <p className="text-xl leading-[25.697px]">Phone Number</p>
                    {markAsRequired && <p className="text-[22px] text-[#EB001B] absolute -top-1.5 -right-2.5">*</p>}
                </div>
                {pencilEnabled && (
                    <div>
                        <img src={pencil} alt="Edit" />
                    </div>
                )}
            </label>

            <div className="flex w-full gap-2">
                <input
                    type="text"
                    value={countryCode}
                    onChange={handleCountryCodeChange}
                    placeholder="+__"
                    maxLength={3}
                    className={`w-max max-w-17.25 text-center text-base leading-5 px-4.25 py-5.25 rounded-[14px] border-[1.25px] bg-[#f3f4f6] 
                            ${error ? "border-[#ff3131]" : "border-gray-300"} focus:outline-none focus:ring-2 
                            ${error ? "focus:ring-[#ff3131]" : "focus:ring-blue-500"}`}
                    style={{ ...style }}
                />

                <input
                    {...rest}
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    placeholder="Enter phone number"
                    maxLength={10}
                    className={`w-full text-base leading-5 px-4 py-5.5 rounded-[14px] border-[1.25px] bg-[#f3f4f6] 
                            ${error ? "border-[#ff3131]" : "border-gray-300"} focus:outline-none focus:ring-2 
                            ${error ? "focus:ring-[#ff3131]" : "focus:ring-blue-500"}`}
                    style={{ ...style }}
                />
            </div>

            <input type="hidden" name={name} value={`${countryCode}${phoneNumber}`} />

            {errLabel && (
                <p className={`w-full text-sm leading-[25.89px] text-start ${error ? "text-[#ff3131]" : success ? "text-[#1bcc00]" : ""} min-h-6.5`}>
                    {error || success}
                </p>
            )}
        </div>
    );
}
