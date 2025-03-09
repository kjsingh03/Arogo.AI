import { AppointmentsHero, ConsultAgainHero, HomeFAQ, PhysicalDashboardMainHero, SpecialityHero, StepsHero, WellBeingHero } from '../components';

export default function PhysicalHealthDashboard() {

  return (
    <div className='flex flex-col gap-9 relative'>

      <PhysicalDashboardMainHero/>

      <AppointmentsHero/>

      <ConsultAgainHero/>

      <StepsHero />

      <SpecialityHero/>

      <WellBeingHero />

      <HomeFAQ/>
    </div>
  )
}
