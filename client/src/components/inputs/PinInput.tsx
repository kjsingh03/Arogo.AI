import { useEffect, useRef } from "react";
import { PinInputProps } from "../../types";

export default function PinInput({ value, onChange, error, success, label, errLabel = true }: PinInputProps) {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, 6);
        inputRefs.current[0]?.focus();
    }, []);

    const handleChange = (index: number, digit: string) => {
        if (!/^\d*$/.test(digit)) return;

        const newPin = value.split("");
        newPin[index] = digit.slice(0, 1);
        const newValue = newPin.join("");
        onChange(newValue);

        if (digit && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !value[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div className="w-full max-w-[496px] flex flex-col gap-3.5">
            <label className="text-xl leading-[25.697px] ">{label}</label>
            <div className="flex flex-col gap-2">
                <div className="flex gap-1.5 mb-2 max-md:w-full max-md:max-w-[385px] max-sm:flex-wrap max-sm:gap-2.5 max-sm:justify-center">
                    {[...Array(6)].map((_, index) => (
                        <div key={`pin-input-${index}`} className={`h-[77.68px] w-[77.68px] flex justify-center items-center rounded-2xl border-[1.3px] bg-[#f3f4f6] ${error ? "border-[#ff3131]" : "border-[#dfdfdf]"}`}>
                            <input
                                ref={(el) => { inputRefs.current[index] = el }}
                                type="text"
                                maxLength={1}
                                value={value[index] || ""} // Controlled input
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className="w-full h-full text-center text-[23.3px] leading-[25.89px] bg-transparent border-none outline-none"
                            />
                        </div>
                    ))}
                </div>

                {errLabel && (
                    <p className={`w-full text-sm leading-[25.89px] text-start ${error ? "text-[#ff3131]" : success ? "text-[#1bcc00]" : ""} min-h-6.5`}>
                        {error || success}
                    </p>
                )}
            </div>
        </div>
    );
}
