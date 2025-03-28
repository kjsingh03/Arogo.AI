interface RadioProps {
    name: string;
    data: string;
    value: string;
    handleClick: () => void;
}

export default function Radio({ name, data, value, handleClick }: RadioProps) {
    return (
        <div className="flex items-center gap-3.5">
            <label htmlFor="genderFilter1" className="flex items-center gap-3.5 cursor-pointer" onClick={handleClick}>
                <div className={`w-7.25 h-7.25 rounded-[8.7px] border-[1.45px] border-[#D0D5DD] `}>
                    {
                        data === value && (
                            <svg className='size-full object-cover text-accent' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Vector" d="M11 17L14 20L21 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )
                    }
                </div>
                <p className="text-[#4B4B4B] text-xl font-medium leading-[23px] capitalize">{value}</p>
            </label>
            <input type="radio" id="genderFilter1" name={name} value={value} hidden checked={data === value} readOnly />
        </div>
    )
}
