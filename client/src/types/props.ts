export interface DoctorCardProps {
    img: string;
    name: string;
    clinic: string;
    experience: number;
    specialization: string;
    rate: string;
    id: string;
}

export interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

export interface StepItemProps {
    number: number;
    title: string;
    description: string;
    rightDivider?: boolean;
    leftDivider?: boolean;
}

export interface FeatureItemProps {
    icon: string;
    title: string;
    description: string;

}

export interface StatisticItemProps {
    value: string;
    label: string;
}

export interface SpecialityItemProps{
    img:string;
    title:string;
}

export interface PinInputProps {
    onChange: (pin: string) => void;
    value:string;
    label: string;
    error?: string;
    success?: string;
    errLabel?: boolean;
}


export interface CustomInputProps {
    name: string;
    classes?: string;
    label?: string;
    type?: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    success?: string;
    rest?: any;
    errLabel?: boolean
}