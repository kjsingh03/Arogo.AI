import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { setNearbyDoctor } from '../store'
import { DoctorListFilterComponent, NearbyDoctorCard, SelectableBadge } from '../components'
import { nearbyDoctorsFetchService } from '../services'
import { DoctorFilterData } from '../types'
import { chevronDown } from '../assets'

export default function DoctorList() {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("location");
  const [filterData, setFilterData] = useState<DoctorFilterData>({ minLocation: null, maxLocation: null, speciality: [], languages: [], consultationType: null, minPrice: null, maxPrice: null, rating: '', gender: null, minExperienceRange: null, maxExperienceRange: null, });

  const modalRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  console.log(filterData)

  const { doctors } = useSelector((state: RootState) => state.nearbyDoctors);
  const dispatch = useDispatch();

  const fetchDoctors = async () => {
    try {
      const res = await nearbyDoctorsFetchService();
      dispatch(setNearbyDoctor(res));
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowFilterModal(false);
      }
    };

    if (showFilterModal) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showFilterModal]);

  return (
    <div className='w-full mx-auto flex flex-col items-center gap-7.5 py-15 px-35 max-2xl:px-8'>
      <div className="lg:w-[70%] 2xl:w-[740px] h-12 2xl:h-[73px] flex justify-end items-center gap-3.5 border rounded-[61px] border-[#979797] p-1 2xl:p-0.5">
        <input type="text" className='w-[43%] 2xl:w-[306px] h-[23px] mx-auto bg-transparent 2xl:text-xl leading-[23px] tracking-[0.4px] font-light outline-none border-none' placeholder='Condition, Doctor, Symptoms..' />
        <div className="w-[1px] h-[60%] bg-[#d9d9d9]"></div>
        <div className="flex items-center gap-3.5 w-max">
          <input type="text" className='w-[100%] 2xl:w-[218px] h-[23px] bg-transparent 2xl:text-xl leading-[23px] tracking-[0.4px] font-light outline-none border-none' placeholder='City, State, Zip' />
        </div>
      </div>

      <div className="w-full flex items-center justify-between">
        <div className="relative">
          <p ref={buttonRef} onClick={() => setShowFilterModal((prev) => !prev)} className="w-[134px] text-center py-4.25 px-3.75 rounded-[32px] text-white text-lg leading-[23px] tracking-[0.4px] font-medium bg-accent cursor-pointer"          >
            Filters
          </p>

          {showFilterModal && (
            <div ref={modalRef} className="mt-2"            >
              <DoctorListFilterComponent selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} filterData={filterData} setFilterData={setFilterData} />
            </div>
          )}
        </div>
        <div className="flex items-center justify-end gap-12.5">
          <div className="flex justify-center items-center gap-6">
            <SelectableBadge label='Online Consultation' isActive={filterData.consultationType === 'online'} handleClick={() => setFilterData(prev => ({ ...prev, consultationType: prev.consultationType === 'online' ? 'both' : 'online' }))} />
            <SelectableBadge label='In-Person Consultation' isActive={filterData.consultationType === 'in-person'} handleClick={() => setFilterData(prev => ({ ...prev, consultationType: prev.consultationType === 'in-person' ? 'both' : 'in-person' }))} />
            <SelectableBadge label='Rated 4 stars & above' isActive={filterData.rating === '4'} handleClick={() => setFilterData(prev => ({ ...prev, rating: prev.rating === '4' ? '' : '4' }))} />
            <SelectableBadge label='Nearest' isActive={filterData.maxLocation === 5} handleClick={() => setFilterData(prev => ({ ...prev, maxLocation: prev.maxLocation === 5 ? null : 5 }))} />
          </div>
          <div className="w-[243px] bg-[#fafafa] flex items-center justify-between gap-23.5 p-[17px_9px_17px_19px] border-b border-b-[#2E2E2E] ">
            <p className='text-lg font-light leading-[23px] tracking-[0.36px]'>Sort</p>
            <div className="w-6.25 h-6.25">
              <img src={chevronDown} className='size-full object-cover' alt="chevron" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-10.75 py-10">
        <div className="w-full flex flex-col gap-7">
          <p className='text-[32px] font-semibold leading-[15px]'>33 Gynecologists/Obstetricians available in Ghaziabad</p>
          <p className='text-lg leading-[23px] tracking-[0.36px]'>Book appointments with minimum wait-time & verified doctor details</p>
          <div className="w-full h-0.25 bg-[#d9d9d9]"></div>
        </div>
        <div className="w-full flex flex-col gap-3">
          {doctors?.map((data, idx) => (
            <NearbyDoctorCard key={'nearbyDoctor' + idx} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
}
