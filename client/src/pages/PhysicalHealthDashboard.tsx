import { useEffect } from 'react';
import { AppointmentsHero, ConsultAgainHero, HomeFAQ, PhysicalDashboardMainHero, SpecialityHero, StepsHero, WellBeingHero } from '../components';

export default function PhysicalHealthDashboard() {

  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }, []);

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
