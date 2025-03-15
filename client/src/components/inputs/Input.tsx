import { InputHTMLAttributes } from "react";
import { greenTick, pencil, redCross } from "../../assets";
import { CustomInputProps } from "../../types";

export default function Input({ name, label, type = "text", value, placeholder, onChange, error, success, classes, errLabel = true, markAsRequired = false, pencilEnabled = false, style,...rest }: CustomInputProps & InputHTMLAttributes<HTMLInputElement>) {

    return (
        <div className={`${classes} flex flex-col w-full gap-3.5`}>
            {
                label &&
                <label htmlFor={name} className="flex justify-between w-full ">
                    <div className="relative">
                        <p className="text-xl leading-[25.697px]">{label}</p>
                        <p className="text-[22px] text-[#EB001B] absolute -top-1.5 -right-2.5">*</p>
                    </div>
                    {
                        pencilEnabled &&
                        <div className="">
                            <img src={pencil} alt="" />
                        </div>
                    }
                </label>
            }
            <div className="relative w-full">
                <input {...rest} id={name} name={name} type={type} value={value} placeholder={placeholder} onChange={onChange}
                    className={`w-full text-base leading-5 pl-7.5 pr-12 py-5.5 rounded-[83.5px] border-[1.25px]
                         ${error ? "border-[#ff3131]" : "border-gray-300"}
                          focus:outline-none focus:ring-2
                           ${error ? "focus:ring-[#ff3131]" : "focus:ring-blue-500"}`} style={{...style}}  />

                {error && (
                    <img src={redCross} className="absolute right-3 top-5" />
                )}

                {success && (
                    <div className="bg-white">
                        <img src={greenTick} className="absolute right-3 top-5" />
                    </div>
                )}
            </div>

            {
                errLabel &&
                <p className={`w-full text-sm leading-[25.89px] text-start ${error ? 'text-[#ff3131] font-normal' : success ? 'text-[#1bcc00] font-light' : ''} min-h-6.5 `}>{error || success}</p>
            }
        </div>
    );
};
