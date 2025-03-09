import { AppointmentsHero, ConsultAgainHero, HomeFAQ, PhysicalDashboardMainHero, SpecialityHero, StepsHero, WellBeingHero } from '../components';

export default function Home() {

  return (
    <div className='flex flex-col gap-9 '>

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
