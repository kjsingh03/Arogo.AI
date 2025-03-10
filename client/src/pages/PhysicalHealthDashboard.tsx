import { AppointmentsHero, ConsultAgainHero, HomeFAQ, PhysicalDashboardMainHero, SpecialityHero, StepsHero, WellBeingHero } from '../components';

export default function PhysicalHealthDashboard() {

  return (
    <div className='flex flex-col gap-9 relative pt-8.75'>

      <PhysicalDashboardMainHero />

      <AppointmentsHero />

      <div className="py-20">
        <ConsultAgainHero />
      </div>

      <StepsHero />

      <SpecialityHero />

      <WellBeingHero />

      <HomeFAQ />
    </div>
  )
}
