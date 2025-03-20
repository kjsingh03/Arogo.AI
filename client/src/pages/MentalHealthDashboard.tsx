import { useEffect, useState } from 'react';
import { expert1, expert2, expert3, expert4, expert5, expert6, macbook, mindspace1, mindspace2, mindspace3, mindspace4, mindspace5, mindspace6, nothingPhone } from '../assets';
import { AppointmentsHero, ConsultAgainHero, HomeFAQ, IconList } from '../components';

const carousels = [
  { img: nothingPhone, title: 'AI Mental Health Assistant', desc: 'Explore 1,000+ guided meditations for feeling more relaxed — ad-free and always there. Try one for yourself.', id: 'Moodmate' },
  { img: macbook, title: 'Self assessment test', desc: 'test', id: 'Self Assesment' },
  { img: nothingPhone, title: 'Mindset', desc: 'mindset', id: 'Mindspace' },
];

const experts = [
  { img: expert1, name: 'Dr. Jon Kole', desc: 'Board-Certified Adult and Child Psychiatrist and Medical Director' },
  { img: expert2, name: 'Eve Lewis', desc: 'Meditation and Mindfulness Teacher, Director of Teaching' },
  { img: expert3, name: 'Kessonga Giscombe', desc: 'Meditation and Mindfulness Teacher' },
  { img: expert4, name: 'Rosie Acosta', desc: 'Meditation and Mindfulness Teacher' },
  { img: expert5, name: 'Arturo Morales', desc: 'Licensed Marriage and Family Therapist' },
  { img: expert6, name: 'Dr. Neeru Bakshi', desc: 'Board-Certified Psychiatrist and Mental Health Advocate' },
]

const mindspaces = [
  { img: mindspace1, name: 'Branding', title: 'What is the branding, and what we need it?', desc: 'On the other hand, we denounce with righteous indignation and…' },
  { img: mindspace2, name: 'tiktok', title: 'What is the branding, and what we need it?', desc: 'On the other hand, we denounce with righteous indignation and…' },
  { img: mindspace3, name: 'LOGO DESIGN', title: 'What is the branding, and what we need it?', desc: 'On the other hand, we denounce with righteous indignation and…' },
  { img: mindspace4, name: 'fb', title: 'What is the branding, and what we need it?', desc: 'On the other hand, we denounce with righteous indignation and…' },
  { img: mindspace5, name: 'AI', title: 'What is the branding, and what we need it?', desc: 'On the other hand, we denounce with righteous indignation and…' },
  { img: mindspace6, name: 'nft', title: 'What is the branding, and what we need it?', desc: 'On the other hand, we denounce with righteous indignation and…' },
]

export default function MentalHealthDashboard() {
  const [selectedCarousel, setSelectedCarousel] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    setSelectedCarousel((prev) => {
      if (direction === 'left') {
        return prev === 0 ? carousels.length - 1 : prev - 1;
      } else {
        return prev === carousels.length - 1 ? 0 : prev + 1;
      }
    });
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setSelectedCarousel(prev => {
        return prev == carousels.length - 1 ? 0 : prev + 1
      })
    }, 1200);

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='flex flex-col gap-18 relative pt-9'>
      <main className="w-full flex flex-col gap-7 py-4">
        <div className="mentalDashboardBg w-full h-[576px] flex flex-col gap-10 px-[218px] max-2xl:px-[80px] py-21 ">
          <div className="flex flex-col gap-2.75">
            <h2 className='max-w-[774px] text-[#fafafa] text-[54px] font-bold leading-16 tracking-[-1.92px] '>
              Your well-being matters. Take a moment for yourself
            </h2>
            <p className='max-w-[612px] text-xl text-[#fafafa] leading-[27px] '>
              Feel like your best self with meditations, stress-relieving exercises, sleep resources, and beyond.
            </p>
          </div>
          <button className="btn btn-primary w-max rounded-[32px] text-xl font-bold leading-[28.8px] tracking-[-0.72px] p-[18px_62px_17.8px_56px] ">
            Consult now
          </button>
        </div>

        <div className="w-[95%] mx-auto px-7">
          <IconList />
        </div>
      </main>

      <AppointmentsHero />
      <ConsultAgainHero />

      <div className="flex flex-col items-center gap-7 py-13 px-8 2xl:px-35.5 ">
        <p className='w-full max-w-[750px] h-[176px] flex items-center text-center text-[52px] font-bold leading-[58px] tracking-[-2.33px] '>
          The mental health app for every moment
        </p>

        <div className="w-full flex justify-center items-center gap-15.5">
          {carousels?.map((carousel, index) => (
            <div onClick={() => setSelectedCarousel(index)} key={'carousel' + index} className={`w-full max-w-[334px] flex items-center px-3.5 py-4 rounded-[29.2px] 
              ${selectedCarousel !== index ? 'bg-[#ffffff]' : 'bg-[#2d2c2b]'}`}>
              <span className='w-[14.6px] h-[14.6px] bg-white rounded-full overflow-hidden '></span>
              <p className={`w-full h-[27.8px] flex flex-col items-center justify-center text-center text-[22px] font-medium tracking-[-0.657px] 
                ${selectedCarousel !== index ? 'text-black' : 'text-white'}`}>
                {carousel?.id}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full max-w-[1635px] 2xl:max-h-[718px] rounded-2xl overflow-hidden mx-auto bg-[#3486ff] pt-24 max-2xl:pb-24">
          <div className="h-full flex max-2xl:flex-col justify-center max-2xl:items-center gap-12 2xl:gap-45">
            <div className="2xl:w-[458px] h-60 2xl:h-[648px] overflow-hidden relative ">
              <img src={carousels[selectedCarousel]?.img} className='size-full object-contain' alt="" />
            </div>
            <div className="w-154 flex flex-col max-2xl:items-center max-2xl:text-center gap-10">
              <p className='w-full 2xl:max-w-[616px] h-40 flex items-center text-[65.86px] text-white font-bold leading-[75px] tracking-[-2px]'>
                {carousels[selectedCarousel]?.title}
              </p>
              <p className='w-full 2xl:max-w-[477px] h-23.5 flex items-center text-xl text-white leading-[32.846px]'>
                {carousels[selectedCarousel]?.desc}
              </p>
              <button className="w-[172.2px] p-[15.937px_31.387px_14.476px_31.628px] text-xl rounded-[39px] font-semibold leading-[26.2px] tracking-[-0.657px] btn btn-tertiary">
                Check Out
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end items-center gap-[14.5px]">
          <p className="text-lg font-semibold">{selectedCarousel + 1}/{carousels.length}</p>

          <div onClick={() => scroll('left')} className="group cursor-pointer w-15.75 h-15.75 py-5 flex items-center justify-center rounded-full bg-[#f9f4f2] overflow-hidden">
            <svg className='w-full h-full text-[#cccac9] group-hover:text-[#44423f]' width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.9066 22.2335L1.11009 12.4374C0.849432 12.1752 0.703125 11.8205 0.703125 11.4508C0.703125 11.081 0.849432 10.7263 1.11009 10.4641L10.9066 0.667969L12.8799 2.6412L4.07704 11.4438L12.8799 20.2463L10.9066 22.2335Z" fill="currentColor" />
            </svg>
          </div>

          <div onClick={() => scroll('right')} className="group cursor-pointer w-15.75 h-15.75 py-5 flex items-center justify-center rounded-full bg-[#f9f4f2] overflow-hidden">
            <svg className='w-full h-full text-[#cccac9] group-hover:text-[#44423f]' width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.82682 22.2319L0.853516 20.2447L9.65639 11.4421L0.853516 2.63957L2.82682 0.652344L12.6233 10.4485C12.884 10.7107 13.0303 11.0654 13.0303 11.4351C13.0303 11.8048 12.884 12.1595 12.6233 12.4217L2.82682 22.2319Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-full max-xl:px-8 py-32 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <p className='w-full max-w-[1200px] text-center flex flex-col items-center text-[52px] font-bold leading-[64.16px] tracking-[-2px] '>Designed by experts, delivered with care</p>
          <p className='w-full max-w-[940px] text-center flex flex-col items-center text-[20px] leading-[30px] '>From guided meditations to one-on-one coaching, our team of clinical experts and trained coaches work together to bring you science-backed care.</p>
        </div>
        <button className='max-w-[142px] btn btn-primary p-[21.486px_50.475px_20.68px_48.483px] rounded-[32.1px] text-[20px] font-bold leading-[21.6px] tracking-[-0.541px] '>Talk</button>
        <div className="w-full flex gap-6 overflow-x-auto no-scrollbar">
          {
            experts?.map((data, idx) => (
              <div key={'expert' + idx} className="">
                <div className="w-[318px] h-[436px] flex flex-col justify-end items-center gap-3 relative ">
                  <img src={data.img} className='absolute top-0 left-0 size-full object-cover' alt="" />
                  <div className="h-[92px] flex flex-col items-center gap-3 text-center z-10">
                    <p className='text-[28.8px] font-bold underline leading-[38.5px] tracking-[-0.962px] text-white '>{data?.name}</p>
                    <p className='text-[12.4px] underline leading-[12px] text-white '>{data?.desc}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="w-full max-w-[1480px] mx-auto flex flex-col items-center gap-15.5 py-9 max-2xl:px-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className='w-full max-w-[640px] text-[52px] font-bold leading-[64.16px] tracking-[-2px] '>MindSpace</p>
          <p className='w-full max-w-[657px] px-32 text-[20px] leading-[30px] '>We <span className='text-accent'>Understand</span> Your Needs Because… We Have been There</p>
        </div>
        <div className="grid max-xl:grid-cols-1 grid-cols-2 gap-10">
          {
            mindspaces?.map((data, idx) => (
              <div key={'mindspace' + idx} className="w-full max-w-[720px] max-2xl:h-55 h-[275px] flex items-center gap-7 ">
                <div className="w-[290px] h-full overflow-hidden rounded-[20.8px]  ">
                  <img src={data?.img} className='size-full object-cover' alt="mindspace image" />
                </div>
                <div className="w-full max-w-[375px] flex flex-col gap-4">
                  <p className="text-accent text-[18.2px] font-semibold tracking-[3.9px] uppercase ">{data.name}</p>
                  <p className="text-[31.12px] font-bold leading-normal ">{data.title}</p>
                  <p className="text-[#abbab2] text-[20.79px] leading-[31.185px] ">{data.desc}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <HomeFAQ />
    </div>
  );
}
