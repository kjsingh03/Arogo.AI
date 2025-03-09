import MedicationCard from '../../cards/MedicationCard'
import UpcomingAppointmentCard from '../../cards/UpcomingAppointmentCard'
import UpcomingAppointmentModal from '../../modals/UpcomingAppointmentModal';
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Appointment, Medication } from '../../../types';
import MedicationReminderModal from '../../modals/MedicationReminderModal';
import { useMemo } from 'react';

export default function AppointmentsHero() {

  const { upcomingAppointmentList, medicationList }: { upcomingAppointmentList: Appointment[], medicationList: Medication[] } = useSelector((state: RootState) => state.data);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const searchParamsObj = useMemo(() => {
    return {
      appointmentModal: searchParams.get("appointmentModal"),
      appointmentId: searchParams.get("appointmentId"),
      medicationModal: searchParams.get("medicationModal"),
      medicationId: searchParams.get("medicationId"),
    };
  }, [searchParams]);
  
  const { appointmentModal, appointmentId, medicationModal, medicationId } = searchParamsObj;
  
  const selectedAppointment = upcomingAppointmentList.find((appointment) => appointment.id === appointmentId);
  const selectedMedication = medicationList.find((med) => med.id === medicationId);


  const handleAppointmentCardClick = (id: string) => {
    navigate(`?appointmentModal=1&appointmentId=${id}`);
  };

  const handleMedicationCardClick = (id: string) => {
    navigate(`?medicationModal=1&medicationId=${id}`);
  };

  const closeModal = () => {
    navigate("?");
  };

  return (
    <>
      {appointmentModal === "1" && selectedAppointment && (
        <UpcomingAppointmentModal closeModal={closeModal} />
      )}

      {medicationModal === "1" && selectedMedication && (
        <MedicationReminderModal closeModal={closeModal} />
      )}

      <div className='w-[95%] 3xl:w-[85.417%] min-h-[923.17px] mx-auto p-[83.59px_28px] 3xl:p-[113.59px_75px] rounded-[61px] bg-[#f7f8f8] flex flex-col gap-20 '>

        <div className="flex flex-col gap-6">

          <div className=''>
            <p className='text-[34.755px] font-semibold leading-[32.273px] '>Upcoming appointments</p>
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-1 gap-6.25 place-items-center">
            {
              upcomingAppointmentList?.map((data: Appointment, idx) => (
                <UpcomingAppointmentCard key={'upcomingAppointmentCard' + idx} {...data} handleClick={() => handleAppointmentCardClick(data.id)} />
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
                <MedicationCard key={'medicationCard' + idx} handleClick={()=>handleMedicationCardClick(data.id)} {...data} />
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

    </>
  )
}
