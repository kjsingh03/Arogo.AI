interface CustomSelectButtonProps {
    handleClick: () => void;
    label: string;
    isSelected: boolean;
}

export function CustomSelectButton({ handleClick, label, isSelected }: CustomSelectButtonProps) {
    return (
        <button onClick={handleClick} className={`h-[72px] ${isSelected ? 'bg-[#23b2ff]' : ''} py-5.25 px-12.25 rounded-[57px] flex items-center justify-center gap-8`}>
            {isSelected && (
                <div className="w-[30px] h-[30px] text-white">
                    <svg className='size-full object-cover' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 31 30" fill="none">
                        <path d="M5.1875 16.8828L11.75 23.4453L26.75 8.44531" stroke="currentColor" strokeWidth="1.40625" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            )}
            <p className={`text-xl ${isSelected ? 'text-[#f9f9f9]' : ''} leading-[23px] tracking-[0.3px]`}>
                {label}
            </p>
        </button>
    );
}
