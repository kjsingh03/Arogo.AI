import { useEffect, useRef, useState } from "react";

interface SliderProps {
    range: [number, number];
    setRange: (newRange: [number, number]) => void;
    min: number;
    max: number;
}

export default function Slider({ range, setRange, min, max }: SliderProps) {
    const [isDragging, setIsDragging] = useState<number | null>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (index: number) => {
        setIsDragging(index);
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (isDragging === null || !trackRef.current) return;

        const trackRect = trackRef.current.getBoundingClientRect();
        const percentage = Math.min(Math.max((event.clientX - trackRect.left) / trackRect.width, 0), 1);
        const value = Math.round(min + percentage * (max - min));

        const newRange = [...range] as [number, number];
        
        newRange[isDragging] = value;

        if (isDragging === 0) {
            newRange[0] = Math.min(value, newRange[1]);
        } else {
            newRange[1] = Math.max(value, newRange[0]);
        }

        setRange(newRange);
    };

    const handleMouseUp = () => {
        setIsDragging(null);
    };

    useEffect(() => {
        if (isDragging !== null) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [isDragging]);

    return (
        <div className="relative w-full h-2" ref={trackRef}>
            <div className="absolute w-full h-full bg-[#D0D5DD] rounded-full" />
            <div
                className="absolute h-full bg-accent rounded-full"
                style={{ 
                    left: `${((range[0] - min) / (max - min)) * 100}%`, 
                    width: `${((range[1] - range[0]) / (max - min)) * 100}%` 
                }}
            />
            <button
                className="absolute w-5 h-5 -mt-1.5 -ml-2.5 rounded-full bg-white border-2 border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                style={{ left: `${((range[0] - min) / (max - min)) * 100}%` }}
                onMouseDown={() => handleMouseDown(0)}
            />
            <button
                className="absolute w-5 h-5 -mt-1.5 -ml-2.5 rounded-full bg-white border-2 border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                style={{ left: `${((range[1] - min) / (max - min)) * 100}%` }}
                onMouseDown={() => handleMouseDown(1)}
            />
        </div>
    );
}