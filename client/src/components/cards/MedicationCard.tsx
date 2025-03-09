import { bellz, bin, pencil } from '../../assets';
import { Medication } from '../../types';

export default function MedicationCard({ name, times, timeSlot, handleClick }: Medication & { handleClick: () => void }) {

  const getColor = (status: string) => {
    return status === "Missed" ? '#2E2E2E' : status === "Taken" ? '#00CA4E' : '#FFA929' // Allowed status : Missed, Taken, or Upcoming
  }

  return (
    <div className='w-full h-69.5 py-5.75 px-3.75 flex flex-col gap-7 rounded-[15.2px] bg-[#fafafa] '>
      <div className="flex items-center justify-between border-b border-b-accent pb-5.25">
        <p className='w-[350px] h-6.75 line-clamp-1 pl-5.5 2xl:text-[19.55px] font-semibold tracking-default '>{name} {times ? '(' + times + ')' : ''}</p>
        <div className="flex items-center gap-3 justify-between">
          <img src={pencil} className='w-[23.89px] h-[23.89px] object-cover cursor-pointer' alt="" />
          <img src={bin} className='w-[23.89px] h-[23.89px] object-cover cursor-pointer' alt="" />
        </div>
      </div>

      <div className="flex items-center gap-2.75">
        {
          timeSlot?.map((slot, idx) => (
            <div key={name + idx} style={{ color: getColor(slot.status) }} className="flex flex-col items-center ">
              <div style={{ borderColor: getColor(slot.status) }} className={`border border- p-[16.293px_12.404px_14.582px_17.378px] rounded-[13px] text-[19.55px] font-medium leading-[17.16px] tracking-default `}>
                <p>{slot.time}</p>
              </div>
              <p className='text-[13px] leading-[32.37px]'>{slot.status}</p>
            </div>
          ))
        }
      </div>

      <div className="w-full flex items-center justify-end gap-7.25">
        <div className="w-[48.87px] h-[48.87px] p-[7.6px_6.5px_6.5px_7.6px] rounded-full bg-[#FF9D15] cursor-pointer">
          <img src={bellz} className='size-full object-cover' alt="Notification reminder" />
        </div>
        <button onClick={handleClick} className='p-[16.292px_15.814px_14.582px_15.206px] text-[19.55px] btn btn-primary'>View more</button>
      </div>
    </div>
  )
}
