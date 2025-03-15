import { linkShareIcon, logo, mailShareIcon, messageShareIcon, sharePersonIcon, telegramShareIcon, whatsappShareIcon } from "../../assets";

const shareList = [{ name: "Nadia Lauren", img: sharePersonIcon, desc: "Is there anything I can help? Just ...Is there anything I can help? Just ...", Speciality: "Psychologist", }, { name: "Nadia Lauren", img: sharePersonIcon, desc: "Is there anything I can help? Just ...Is there anything I can help? Just ...", Speciality: "Psychologist", }, { name: "Nadia Lauren", img: sharePersonIcon, desc: "Is there anything I can help? Just ...Is there anything I can help? Just ...", Speciality: "Psychologist", }, { name: "Nadia Lauren", img: sharePersonIcon, desc: "Is there anything I can help? Just ...Is there anything I can help? Just ...", Speciality: "Psychologist", }, { name: "Nadia Lauren", img: sharePersonIcon, desc: "Is there anything I can help? Just ...Is there anything I can help? Just ...", Speciality: "Psychologist", }, { name: "Nadia Lauren", img: sharePersonIcon, desc: "Is there anything I can help? Just ...Is there anything I can help? Just ...", Speciality: "Psychologist", }, { name: "Nadia Lauren", img: sharePersonIcon, desc: "Is there anything I can help? Just ...Is there anything I can help? Just ...", Speciality: "Psychologist", },
];

export default function AIInsightModal({ closeModal, }: { closeModal: () => void; }) {
  return (
    <div
      onClick={closeModal}
      className="w-screen h-screen bg-[rgba(107,107,107,0.50)] fixed top-0 left-0 z-[1000] flex justify-center items-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[1034px] h-[80vh] max-2xl:h-[90vh] overflow-y-auto thin-scrollbar bg-[#fafafa] flex flex-col items-center gap-9 p-7 rounded-[27.1px] max-sm:p-2.5 "
      >
        <div className="w-full relative flex justify-center">
          <p className="text-[32px] font-semibold leading-[15.8px] ">
            Share Records
          </p>
          <div className="absolute -top-5 right-0 w-14.5 h-14.5">
            <img src={logo} className="size-full object-cover" alt="" />
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-6">
          <div className="w-full h-0.25 bg-[rgba(217,217,217,0.60)]"></div>
          <div className="w-full flex items-center justify-between">
            <div className="w-[480px] h-[62px] flex items-center gap-11.25 px-5 rounded-[59px] border-[1.33px] bg-[#fafafa] border-[rgba(217,217,217,0.60)] ">
              <div className="w-7.25 h-7.25">
                <svg className="text-black size-full object-cover" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1378_11324)">
                    <path d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.0703 21.0703L27.9991 27.9991" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>

              </div>
              <input type="text" className="w-full outline-none border-none text-lg" placeholder="Search contacts" />
            </div>
            <div className="flex gap-3.75">
              <button className="btn btn-light">Cancel</button>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2.5">
            {shareList.map((data) => (
              <div className="w-full flex items-center justify-between py-2.5 px-6.5 rounded-[26px]">
                <div className="flex items-center gap-4">
                  <div className="w-[58.66px] h-[58.66px] ">
                    <img
                      src={data.img}
                      className="size-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="max-w-[300px] flex flex-col gap-1.5">
                    <p className="text-xl font-semibold tracking-[-0.1px] leading-[150%]">
                      {data.name}
                    </p>
                    <p className="text-lg font-normal line-clamp-1 tracking-[-0.36px]">
                      {data.desc}
                    </p>
                  </div>
                </div>
                <p className="text-accent text-lg tracking-[-0.36px] leading-[150%]">
                  {data.Speciality}
                </p>
                <div className="w-[33px] h-[33px] rounded-lg flex items-center justify-center bg-[#fafafa] border border-[rgba(217,217,217,0.60)]">
                  <svg className="size-full text-accent object-cover" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="CheckCircle" clip-path="url(#clip0_900_7985)">
                      <path id="Vector" d="M11 17L14 20L21 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                  <input type="checkbox" name="sharechecklist" id="sharechecklist" className="hidden" />
                </div>
              </div>
            ))}
          </div>
          <button className="w-[298px] btn btn-primary mt-2.5">Send</button>
          <div className="w-full h-0.25 bg-[rgba(217,217,217,0.60)]"></div>
          <div className="flex flex-col gap-10 py-4">
            <p className="text-[26px] font-semibold leading-[15.8px]">Share via External Apps</p>
            <div className="flex justify-center gap-18 items-center">
              <div className="flex flex-col gap-1.5 items-center">
                <div className="w-[110px] h-[110px]">
                  <img src={telegramShareIcon} className="size-full object-cover" alt="" />
                </div>
                <p className="text-[22px] font-medium">Telegram</p>
              </div>
              <div className="flex flex-col gap-1.5 items-center">
                <div className="w-[110px] h-[110px]">
                  <img src={whatsappShareIcon} className="size-full object-cover" alt="" />
                </div>
                <p className="text-[22px] font-medium">Whatsapp</p>
              </div>
              <div className="flex flex-col gap-1.5 items-center">
                <div className="w-[110px] h-[110px]">
                  <img src={linkShareIcon} className="size-full object-cover" alt="" />
                </div>
                <p className="text-[22px] font-medium">Copy Link</p>
              </div>
              <div className="flex flex-col gap-1.5 items-center">
                <div className="w-[110px] h-[110px]">
                  <img src={messageShareIcon} className="size-full object-cover" alt="" />
                </div>
                <p className="text-[22px] font-medium">Messages</p>
              </div>
              <div className="flex flex-col gap-1.5 items-center">
                <div className="w-[110px] h-[110px]">
                  <img src={mailShareIcon} className="size-full object-cover" alt="" />
                </div>
                <p className="text-[22px] font-medium">Email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export interface ShareCardProps {
//   img: string;
//   name: string;
//   desc: string;
//   speciality: string;
// }

// function ShareCard({ img, name, desc, speciality }: ShareCardProps) {

//   return (
//       <>

//       </>
//   )
// }
