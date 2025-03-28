import  {  Dispatch, SetStateAction, useState } from 'react'
import { DoctorFilterData } from '../../types';
import Slider from '../slider/Slider';
import Radio from '../radio/Radio';
import SelectableBadge from './SelectableBadge';

interface DoctorListFilterComponentProps {
    selectedFilter: string;
    setSelectedFilter: (x: string) => void;
    filterData: DoctorFilterData;
    setFilterData: Dispatch<SetStateAction<DoctorFilterData>>;
}

const filterItems = [{ label: "Location", value: 'location' }, { label: "Specialization", value: 'specialization' }, { label: "Language", value: 'language' }, { label: "Consultation Type", value: 'consultation' }, { label: "Price Range", value: 'price' }, { label: "Ratings", value: 'rating' }, { label: "Gender", value: 'gender' }, { label: "Experience", value: 'experience' },]

export default function DoctorListFilterComponent({ selectedFilter, setSelectedFilter, filterData, setFilterData }: DoctorListFilterComponentProps) {

    const handleLanguageClick = (language: string) => {
        setFilterData((prev) => {
            const languages = prev.languages;
            return languages.includes(language)
                ? { ...prev, languages: languages.filter((lang) => lang !== language) }
                : { ...prev, languages: [...languages, language] };
        });
    };

    const [searchTerm, setSearchTerm] = useState("");
    const [speciality, setSpeciality] = useState<string[]>(["Orthologist", "Heart Specialist", "Eye Specialist"]);

    const handleSearchSpeciality = () => {
        if (searchTerm.trim() === "") return;

        setSpeciality((prev) => (prev.includes(searchTerm) ? prev : [...prev, searchTerm]));
        setFilterData((prev) => (prev.speciality.includes(searchTerm) ? prev : { ...prev, speciality: [...prev.speciality, searchTerm] }));

        setSearchTerm("");
    };

    const handleSpecializationClick = (specialization: string) => {
        setFilterData((prev) => {
            return prev.speciality?.includes(specialization) ? { ...prev, speciality: prev.speciality.filter((sp) => sp !== specialization) } : { ...prev, speciality: [...prev.speciality, specialization] };
        });
    };

    return (
        <div className="w-[1026px] h-[461px] fixed flex border border-[rgba(217,217,217,0.60)] rounded-[15px] bg-[#f7f8f8] shadow-[0px_0px_35px_0px_rgba(0,0,0,0.15)] z-[100]">
            <div className="w-[233px] py-3.5 flex flex-col gap-2.25 border-r border-r-[rgba(217,217,217,0.60)]">
                {
                    filterItems.map(({ value, label }, idx) => (
                        <p key={'filter' + idx} onClick={() => setSelectedFilter(value)} className={`filter-item ${selectedFilter === value ? 'active' : ''} `}>{label}</p>
                    ))
                }
            </div>
            <div className="w-[calc(100%-233px)] bg-red-60 pl-9.75 pr-11.25 py-12.25">
                {
                    (() => {
                        switch (selectedFilter) {
                            case 'location':
                                return (
                                    <div className='flex flex-col gap-6'>
                                        <p className="text-[#707070] text-xl font-medium leading-[23px] ">Location range in KM</p>
                                        <div className="flex items-center gap-4">
                                            <input type="text" placeholder='Min' name="minLocation" disabled value={filterData.minLocation || ''} onChange={() => { }} className='text-lg font-medium leading-[14px] py-3 px-2.5  outline-accent text-[rgba(217,217,217,0.60)] border border-[#D0D5DD] bg-white rounded-xl' />
                                            <input type="text" placeholder='Max' name="maxLocation" disabled value={filterData.maxLocation || ''} onChange={() => { }} className='text-lg font-medium leading-[14px] py-3 px-2.5  outline-accent text-[rgba(217,217,217,0.60)] border border-[#D0D5DD] bg-white rounded-xl' />
                                        </div>
                                        <div className="w-full flex flex-col gap-3.5 items-end">
                                            <div className="w-full flex flex-col gap-0.75">
                                                <div className="w-full flex items-center justify-between">
                                                    <p className="text-accent leading-[17px]">{filterData.minLocation ?? 5} KM</p>
                                                    <p className="text-accent leading-[17px]">{filterData.maxLocation ?? 50} KM</p>
                                                </div>
                                                <div className="w-full flex flex-col items-center justify-center h-4">
                                                    <Slider min={5} max={50} range={[filterData.minLocation ?? 5, filterData.maxLocation ?? 50]} setRange={newRange => setFilterData(prev => ({ ...prev, minLocation: newRange[0], maxLocation: newRange[1] }))} />
                                                </div>
                                            </div>
                                            <p onClick={() => setFilterData(prev => ({ ...prev, minLocation: null, maxLocation: null }))} className="hover:underline cursor-pointer text-accent text-sm font-medium leading-[20px]">Reset All</p>
                                        </div>
                                    </div>
                                )
                            case 'specialization':
                                return (
                                    <div className='h-full flex flex-col gap-5'>
                                        <div className="flex items-center justify-between">
                                            <p className="text-[#707070] text-xl font-medium leading-[23px]">Specialization</p>
                                            <div className="w-[378px] flex items-center gap-4 py-1.75 px-2.5 border border-[#D0D5DD] rounded-xl">
                                                <input type="text" placeholder="Search specialization..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full text-xl text-[#D0D5DD] outline-none border-none leading-[14px] font-medium border p-2 rounded" />
                                                <p onClick={handleSearchSpeciality} className="hover:underline cursor-pointer text-accent text-sm font-medium leading-[20px]">Search</p>
                                            </div>
                                        </div>
                                        <div className="h-full flex flex-col justify-between">
                                            <div className="max-h-70 overflow-hidden overflow-y-auto flex flex-wrap gap-3.75">
                                                {speciality.map((spec, idx) => (
                                                    <SelectableBadge
                                                        key={spec + idx}
                                                        label={spec}
                                                        handleClick={() => handleSpecializationClick(spec)}
                                                        isActive={filterData.speciality?.includes(spec)}
                                                    />
                                                ))}
                                            </div>
                                            <p onClick={() => { setFilterData((prev) => ({ ...prev, speciality: [] })); setSpeciality(["Orthologist", "Heart Specialist", "Eye Specialist"]) }} className="hover:underline cursor-pointer text-accent text-sm font-medium leading-[20px]">Reset All</p>
                                        </div>
                                    </div>
                                )
                            case 'language':
                                return (
                                    <div className='flex flex-col gap-11'>
                                        <div className="flex items-center justify-between">
                                            <p className="text-[#707070] text-xl font-medium leading-[23px] ">Select Languages</p>
                                            <p onClick={() => setFilterData(prev => ({ ...prev, languages: [] }))} className="hover:underline cursor-pointer text-accent text-sm font-medium leading-[20px]">Reset All</p>
                                        </div>
                                        <div className="flex flex-wrap gap-3.75">
                                            {["Hindi", "English", "Marathi", "Bengali", "Punjabi", "Tamil", "Telugu"].map((lang) => (
                                                <SelectableBadge
                                                    key={lang}
                                                    label={lang}
                                                    handleClick={() => handleLanguageClick(lang)}
                                                    isActive={filterData.languages?.includes(lang)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )
                            case 'consultation':
                                return (
                                    <div className='flex flex-col gap-10.75'>
                                        <p className="text-[#707070] text-xl font-medium leading-[23px] ">Consultation Type</p>
                                        <div className="flex flex-col gap-5.75">
                                            {
                                                ["in-person", "online", "both"].map((type, idx) => (
                                                    <Radio key={type + idx} name={type} value={type} data={filterData.consultationType ?? ''} handleClick={() => setFilterData((prev) => ({ ...prev, consultationType: prev.consultationType === type ? null : type as 'both' }))} />
                                                ))
                                            }
                                        </div>
                                    </div>
                                )
                            case 'price':
                                return (
                                    <div className='flex flex-col gap-6'>
                                        <p className="text-[#707070] text-xl font-medium leading-[23px] ">Price range</p>
                                        <div className="flex items-center gap-4">
                                            <input type="text" placeholder='Min' name="minLocation" disabled value={filterData.minPrice || ''} onChange={() => { }} className='text-lg font-medium leading-[14px] py-3 px-2.5  outline-accent text-[rgba(217,217,217,0.60)] border border-[#D0D5DD] bg-white rounded-xl' />
                                            <input type="text" placeholder='Max' name="maxLocation" disabled value={filterData.maxPrice || ''} onChange={() => { }} className='text-lg font-medium leading-[14px] py-3 px-2.5  outline-accent text-[rgba(217,217,217,0.60)] border border-[#D0D5DD] bg-white rounded-xl' />
                                        </div>
                                        <div className="w-full flex flex-col gap-3.5 items-end">
                                            <div className="w-full flex flex-col gap-0.75">
                                                <div className="w-full flex items-center justify-between">
                                                    <p className="text-accent leading-[17px]">{filterData.minPrice ?? 450} Rs</p>
                                                    <p className="text-accent leading-[17px]">{filterData.maxPrice ?? 2000} Rs</p>
                                                </div>
                                                <div className="w-full flex flex-col items-center justify-center h-4">
                                                    <Slider min={450} max={2000} range={[filterData.minPrice ?? 450, filterData.maxPrice ?? 2000]} setRange={newRange => setFilterData(prev => ({ ...prev, minPrice: newRange[0], maxPrice: newRange[1] }))} />
                                                </div>
                                            </div>
                                            <p onClick={() => setFilterData(prev => ({ ...prev, minPrice: null, maxPrice: null }))} className="hover:underline cursor-pointer text-accent text-sm font-medium leading-[20px]">Reset All</p>
                                        </div>
                                    </div>
                                )
                            case 'rating':
                                return (
                                    <div className='flex flex-col gap-11'>
                                        <div className="flex items-center justify-between">
                                            <p className="text-[#707070] text-xl font-medium leading-[23px] ">Rating</p>
                                            <p onClick={() => setFilterData(prev => ({ ...prev, rating: '' }))} className="hover:underline cursor-pointer text-accent text-sm font-medium leading-[20px]">Reset All</p>
                                        </div>
                                        <div className="flex gap-3.75">
                                            {
                                                [{ label: 'Any', value: '0' }, { label: '2⭐& Above', value: '2' }, { label: '3⭐& Above', value: '3' }, { label: '4⭐& Above', value: '4' }].map(({ label, value }, idx) => (
                                                    <SelectableBadge key={label + idx} label={label} handleClick={() => setFilterData(prev => ({ ...prev, rating: value }))} isActive={filterData.rating === value} />
                                                ))
                                            }
                                        </div>
                                    </div>
                                )
                            case 'gender':
                                return (
                                    <div className='flex flex-col gap-10.75'>
                                        <p className="text-[#707070] text-xl font-medium leading-[23px] ">Gender</p>
                                        <div className="flex flex-col gap-5.75">
                                            {
                                                ["male", "female", "both"].map((gender, idx) => (
                                                    <Radio key={'gender' + gender + idx} name={gender} value={gender} data={filterData.gender ?? ''} handleClick={() => setFilterData((prev) => ({ ...prev, gender: prev.gender === gender ? null : gender as 'both' }))} />
                                                ))
                                            }
                                        </div>
                                    </div>
                                )
                            case 'experience':
                                return (
                                    <div className='flex flex-col gap-6'>
                                        <p className="text-[#707070] text-xl font-medium leading-[23px] ">Experience range</p>
                                        <div className="flex items-center gap-4">
                                            <input type="text" placeholder='Min' name="minLocation" disabled value={filterData.minExperienceRange || ''} onChange={() => { }} className='text-lg font-medium leading-[14px] py-3 px-2.5  outline-accent text-[rgba(217,217,217,0.60)] border border-[#D0D5DD] bg-white rounded-xl' />
                                            <input type="text" placeholder='Max' name="maxLocation" disabled value={filterData.maxExperienceRange || ''} onChange={() => { }} className='text-lg font-medium leading-[14px] py-3 px-2.5  outline-accent text-[rgba(217,217,217,0.60)] border border-[#D0D5DD] bg-white rounded-xl' />
                                        </div>
                                        <div className="w-full flex flex-col gap-3.5 items-end">
                                            <div className="w-full flex flex-col gap-0.75">
                                                <div className="w-full flex items-center justify-between">
                                                    <p className="text-accent leading-[17px]">{filterData.minExperienceRange ?? 0} years</p>
                                                    <p className="text-accent leading-[17px]">{filterData.maxExperienceRange ?? 20} years</p>
                                                </div>
                                                <div className="w-full flex flex-col items-center justify-center h-4">
                                                    <Slider min={0} max={20} range={[filterData.minExperienceRange ?? 0, filterData.maxExperienceRange ?? 20]} setRange={newRange => setFilterData(prev => ({ ...prev, minExperienceRange: newRange[0], maxExperienceRange: newRange[1] }))} />
                                                </div>
                                            </div>
                                            <p onClick={() => setFilterData(prev => ({ ...prev, minExperienceRange: null, maxExperienceRange: null }))} className="hover:underline cursor-pointer text-accent text-sm font-medium leading-[20px]">Reset All</p>
                                        </div>
                                    </div>
                                )
                        }
                    })()
                }
            </div>
        </div>
    )
}

// If Input values to be enabled

// const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     if (!/^\d*$/.test(value)) return;

//     setFilterData((prev) => {
//         if (value === '')
//             return { ...prev, [name]: null };

//         const numValue = parseFloat(value);

//         if (name === "minLocation") {
//             const currentMax = prev.maxLocation ?? 50;
//             if (numValue > currentMax)
//                 return { ...prev, minLocation: currentMax };

//         }

//         if (name === "maxLocation") {
//             const currentMin = prev.minLocation ?? 5;
//             if (numValue < currentMin)
//                 return { ...prev, maxLocation: currentMin };

//         }

//         return { ...prev, [name]: value };
//     });
// };

// const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     let numValue = parseFloat(value);

//     if (isNaN(numValue)) return;

//     setFilterData((prev: DoctorFilterData) => {
//         let newMin = parseFloat(String(prev.minLocation ?? 5));
//         let newMax = parseFloat(String(prev.maxLocation ?? 50));

//         if (name === "minLocation") {
//             newMin = Math.min(Math.max(numValue, 5), newMax);
//         } else if (name === "maxLocation") {
//             newMax = Math.max(Math.min(numValue, 50), newMin);
//         }

//         return { ...prev, minLocation: newMin, maxLocation: newMax, };
//     });
// };