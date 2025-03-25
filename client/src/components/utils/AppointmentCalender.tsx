import { useMemo, useState } from "react";
import { chevronLeft, chevronRight } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setBookAppointmentFormData } from "../../store";

interface AppointmentCalendarProps {
    weekdays?: string[];
    className?: string;
    disableMonthNavigation?: boolean;
}

export default function AppointmentCalendar({ weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], className = "", disableMonthNavigation = false }: AppointmentCalendarProps) {

    const [currentDate, setCurrentDate] = useState(new Date());

    const { formData } = useSelector((state: RootState) => state.bookAppointment);
    const dispatch = useDispatch();

    const onDateSelect = (date: Date) => {
        dispatch(setBookAppointmentFormData({ appointmentDateTime: date.toISOString() }))
    }

    const changeMonth = (offset: number) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
    };

    const { appointmentDateTime } = useMemo(() => {
        return formData
    }, [formData.appointmentDateTime])

    const daysInMonth = useMemo(() => {
        return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    }, [currentDate]);

    const firstDayOfMonth = useMemo(() => {
        return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    }, [currentDate]);

    const calendarDays = useMemo(() => {
        const days = [];

        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-cell" />);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const weekday = weekdays[date.getDay()];
            const appointmentDateTimeObj = appointmentDateTime ? new Date(appointmentDateTime) : null;

            const isSelected = appointmentDateTimeObj instanceof Date &&
                appointmentDateTimeObj.getDate() === day &&
                appointmentDateTimeObj.getMonth() === currentDate.getMonth() &&
                appointmentDateTimeObj.getFullYear() === currentDate.getFullYear();


            days.push(
                <div
                    key={day}
                    className={`w-[97px] h-[104px] flex flex-col items-center justify-center gap-3 py-6.5 px-5.5 text-center rounded-[24px] border 
                        ${isSelected ? "bg-accent text-white" : "hover:bg-gray-100 border-[#D9D9D999]"}`}
                    onClick={() => onDateSelect(date)}
                >
                    <p className="text-[26px] font-semibold leading-[20px] tracking-[0.52px]">{day}</p>
                    <p className="text-[23px] font-medium leading-[20px] tracking-[0.454px]">{weekday}</p>
                </div>
            );
        }

        return days;
    }, [currentDate, appointmentDateTime, daysInMonth, firstDayOfMonth]);

    return (
        <div className={`w-full max-w-[768px] flex flex-col gap-4 ${className}`}>
            <div className="flex items-center justify-between px-2">
                <p className="text-[26px] font-semibold leading-[20px] tracking-[0.52px]">
                    Today, {currentDate.toLocaleString("default", { month: "short", day: "numeric" })}
                </p>
                {!disableMonthNavigation && (
                    <div className="flex items-center gap-2">
                        <button onClick={() => changeMonth(-1)}>
                            <img src={chevronLeft} className="w-[15px] h-[17.8px] object-contain" alt="Previous" />
                        </button>
                        <p className="text-[23px] leading-[30px] tracking-[0.47px]">
                            {currentDate.toLocaleString("default", { month: "long" })}
                        </p>
                        <button onClick={() => changeMonth(1)}>
                            <img src={chevronRight} className="w-[15px] h-[17.8px] object-contain" alt="Next" />
                        </button>
                    </div>
                )}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-4">{calendarDays}</div>
        </div>
    );
}
