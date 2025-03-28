import { Dispatch, SetStateAction } from 'react'

interface SelectableBadgeProps {
  label: string;
  isActive: boolean;
  handleClick: Dispatch<SetStateAction<string>> | any;
}

export default function SelectableBadge({ label, isActive, handleClick }: SelectableBadgeProps) {
  return (
    <p onClick={handleClick} className={`h-14.25 text-lg font-light leading-[23px] tracking-[0.36px] w-max py-4.25 px-4 border rounded-[32px] ${isActive ? 'bg-[#23B2FF33] border-accent text-accent shadow-[0px_0px_27.3px_0px_rgba(35,178,255,0.25)]' : ''} border-[#D9D9D999]`}>
      {label}
    </p>
  )
}
