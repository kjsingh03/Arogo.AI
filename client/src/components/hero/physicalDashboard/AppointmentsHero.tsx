import MedicationCard from '../../cards/MedicationCard'
import { doctor1, upcomingDoctor } from '../../../assets'
import UpcomingAppointmentCard from '../../cards/UpcomingAppointmentCard'
import { MedicationCardProps, UpcomingAppointmentCardProps } from '../../../types/props';

const medicationList: MedicationCardProps[] = [{ name: 'Paroxetine 20 mg', times: 'Twice daily', timeSlot: [{ time: '10:00AM', status: 'Missed' }, { time: '10:00PM', status: 'Upcoming' }] }, { name: 'Paroxetine 50 mg', timeSlot: [{ time: '10:00PM', status: 'Upcoming' }] }, { name: 'Paroxetine 20 mg', times: 'Twice daily', timeSlot: [{ time: '01:00PM', status: 'Taken' }, { time: '10:00PM', status: 'Upcoming' }] }, { name: 'Paroxetine 50 mg', times: 'Thrice daily', timeSlot: [{ time: '10:00AM', status: 'Missed' }, { time: '01:00PM', status: 'Taken' }, { time: '10:00PM', status: 'Upcoming' }] }];

const upcomingAppointmentList: UpcomingAppointmentCardProps[] = [{ img: upcomingDoctor, name: "Dr. Maria Waston", speciality: "Multi-speciality", clinic: "Health Clinic name", location: "632 Broadway, New York, NY 10012", times: "12:00AM", date: "9 January", mode: "Online", queue: "23", id: "id1" }, { img: doctor1, name: "Dr. M. W.", speciality: "Orthologist", clinic: "Clinic name", location: "New Jersey, NY 10012,", times: "7:00PM", date: "29 March", mode: "Offine", queue: "1", id: "id2" }];

export default function AppointmentsHero() {
  return (
    <div className='w-[95%] 3xl:w-[85.417%] min-h-[923.17px] mx-auto p-[83.59px_28px] 3xl:p-[113.59px_75px] rounded-[61px] bg-[#f7f8f8] flex flex-col gap-20 '>

      <div className="flex flex-col gap-6">

        <div className=''>
          <p className='text-[34.755px] font-semibold leading-[32.273px] '>Upcoming appointments</p>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-1 gap-6.25 place-items-center">
          {
            upcomingAppointmentList?.map((data, idx) => (
              <UpcomingAppointmentCard key={'upcomingAppointmentCard' + idx} {...data} />
            ))
          }
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className='flex items-center justify-between '>
          <p className='text-[34.755px] font-semibold leading-[32.273px] '>Medication Reminders</p>
          <button className='btn btn-primary p-[9.773px_19.609px_9.756px_21.722px]'>Add new</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6.25 place-items-center">
          {
            medicationList?.map((data, idx) => (
              <MedicationCard key={'medicationCard' + idx} {...data} />
            ))
          }
          <div className='w-full h-69.5 flex items-center justify-center rounded-[15.2px] bg-[#FAFAFA]  ' >
            <div className="group w-[155.31px] btn btn-secondary p-[6.517px_18.437px_6.497px_19.55px] rounded-[26.1px] flex items-center gap-[5.4px]">
              <svg viewBox="0 0 13 13" fill="none" className="w-[23.89px] h-[21.72px] object-contain p-1 fill-accent group-hover:fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.2291 7.49712H6.90068V12.8733H5.34757V7.49712H0.0430931V6.06348H5.34757V0.687319H6.90068V6.06348H12.2291V7.49712Z" fill="currentColor" />
              </svg>
              <p className="w-22">Add new</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
