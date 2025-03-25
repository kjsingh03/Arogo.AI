import { useState, useMemo } from "react";
import { chevronDown, chevronLeft, chevronRight } from "../../assets";

interface CalenderInputProps {
    selectedDate: Date | null;
    onDateSelect: (date: Date) => void;
    weekdays?: string[];
    className?: string;
    disableMonthNavigation?: boolean;
}

export default function CalenderInput({  selectedDate, onDateSelect, className, disableMonthNavigation = false }: CalenderInputProps) {

    const [showCalendar, setShowCalendar] = useState(false);
    const [currentDate, setCurrentDate,] = useState(new Date());

    const handleDateSelect = (date: Date) => {
        onDateSelect(date);
        setShowCalendar(false);
    }

    const changeMonth = (offset: number) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
    };

    const daysInMonth = useMemo(() => {
        return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    }, [currentDate]);

    const firstDayOfMonth = useMemo(() => {
        return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    }, [currentDate]);

    const calendarDays = useMemo(() => {
        const days = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`calender-input-${i}`} className="calendar-cell" />);
        }
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const isSelected =
                selectedDate &&
                selectedDate.getDate() === day &&
                selectedDate.getMonth() === currentDate.getMonth() &&
                selectedDate.getFullYear() === currentDate.getFullYear();
            days.push(
                <div
                    key={day}
                    className={`w-9 h-[35.2px] flex items-center justify-center rounded-[8px] ${isSelected ? "bg-accent text-white" : ""
                        }`}
                    onClick={() => handleDateSelect(date)}
                >
                    <p className="text-[15px] leading-[24px]">{day}</p>
                </div>
            );
        }
        return days;
    }, [currentDate, selectedDate, daysInMonth, firstDayOfMonth]);

    return (
        <div className="relative w-full flex flex-col items-start gap-2">
            <label className="text-gray-600 text-lg font-medium">DOB</label>
            <div onClick={() => setShowCalendar(true)} className="flex items-center gap-2.5">
                {["DD", "MM", "YYYY"].map((placeholder, index) => (
                    <div key={index} className="relative w-[76px] h-[68px]">
                        <input
                            className="w-full h-full bg-gray-100 rounded-[20px] border border-gray-300 text-center text-lg text-gray-500"
                            placeholder={placeholder}
                            value={
                                selectedDate
                                    ? index === 0
                                        ? selectedDate.getDate().toString().padStart(2, "0")
                                        : index === 1
                                            ? (selectedDate.getMonth() + 1).toString().padStart(2, "0")
                                            : selectedDate.getFullYear()
                                    : ""
                            }
                            readOnly
                        />
                    </div>
                ))}
            </div>
            {showCalendar && (
                // <div className="fixed top-0 w-screen h-screen bg-red-600 left-0 mt-2 z-[2000] bg-whit shadow-lg rounded-lg">
                <div className="absolute bottom-[100%] left-0 mt-2 z-[2000] bg-white shadow-lg rounded-lg">
                    <div className={`w-[252px] flex flex-col gap-3 p-4 rounded-[16px] ${className}`}>
                        {!disableMonthNavigation && (
                            <div className="w-full flex items-center justify-between px-2">
                                <button onClick={() => changeMonth(-1)} className="w-6 h-6 p-1.75">
                                    <img src={chevronLeft} className="size-full" alt="Previous" />
                                </button>
                                <div className="flex items-center gap-0.5">
                                    <p className="text-accent text-[15px] font-semibold leading-[24px]">
                                        {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
                                    </p>
                                    <div className="w-3 h-3">
                                        <img src={chevronDown} className="size-full object-cover" alt="" />
                                    </div>
                                </div>
                                <button onClick={() => changeMonth(1)} className="w-6 h-6 p-1.75">
                                    <img src={chevronRight} className="size-full" alt="Next" />
                                </button>
                            </div>
                        )}
                        <div className="grid grid-cols-7">{calendarDays}</div>
                    </div>
                </div>
            )}
        </div>
    );
}
