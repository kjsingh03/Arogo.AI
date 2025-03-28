import React, { ChangeEvent, useMemo, useState } from 'react'
import { upcomingDoctor } from '../assets'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Chat } from '../types'
import { useSearchParams } from 'react-router-dom'

export default function Messaging() {

    const [chatSearchQuery, setChatSearchQuery] = useState("")
    const [queries, setQueries] = useSearchParams();

    const { chats } = useSelector((state: RootState) => state.chats);

    const activeChatId = useMemo(() => {
        return queries.get('activeChatId');
    }, [queries])

    const activeChat = useMemo(() => {
        return chats.find(chat => chat.id === activeChatId)
    }, [activeChatId]);

    const handleChatSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setChatSearchQuery(e.target.value)
    }

    return (
        <div className="h-[calc(100vh-94px)] flex gap-18.75 py-15 px-2.25 bg-red-60">
            <div className="w-[536px] flex flex-col gap-8.75 pl-7.25 pr-7.75 pt-8 rounded-[22px] bg-[#f7f8f8] border-[1.33px] border-[#D9D9D999]">
                <div className="flex flex-col gap-4">
                    <div className="flex items-baseline justify-between">
                        <p className="text-[32px] font-semibold leading-[150%] tracking-[-0.96px]">Messaging</p>
                        <div className="flex gap-1.75 items-center">
                            <p className="text-[18.67px] font-medium leading-[32px] ">Physician</p>
                            <div className="w-8 h-8">
                                <svg className='size-full object-cover' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M4 9.33203H28" stroke="#000929" strokeWidth="2" strokeLinecap="round" />
                                    <path opacity="0.34" d="M8 16H24" stroke="#000929" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M13.334 22.668H18.6673" stroke="#000929" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-4.5 py-3.75 px-5.25 rounded-[16px] bg-[#FAFAFA] border-[1.33px] border-[#D9D9D999]">
                        <div className="w-6.5 h-6.5">
                            <svg className='size-full object-cover' xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path d="M12.4577 22.7474C18.1416 22.7474 22.7493 18.1397 22.7493 12.4557C22.7493 6.7718 18.1416 2.16406 12.4577 2.16406C6.77375 2.16406 2.16602 6.7718 2.16602 12.4557C2.16602 18.1397 6.77375 22.7474 12.4577 22.7474Z" stroke="#000929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.4" d="M23.8327 23.8307L21.666 21.6641" stroke="#000929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <input onChange={handleChatSearch} type="text" className='w-full text-[18.67px] text-[#92929D] outline-none border-none' placeholder='Search in dashboard...' />
                    </div>
                </div>
                <div className="overflow-y-auto rounded-tl-xl rounded-tr-xl">
                    {chats.map((chat, idx) => (
                        <ChatItem key={'doctorChat' + idx} chat={chat} handleClick={() => setQueries({ 'activeChatId': chat.id })} />
                    ))}
                </div>
            </div>
            <div className="w-[80%] h-full relative flex flex-col items-center max-w-[1180px] rounded-[40px] bg-[#f7f8f8] border-[1.33px] border-[#D9D9D999]">
                <div className="w-full flex justify-between px-8 py-7.75 rounded-[22px] bg-[#FAFAFA] border-[1.33px] border-[#D9D9D999] shadow-[0px_0px_35px_0px_rgba(0,0,0,0.15)]">
                    <div className="flex items-center gap-4">
                        <div className="w-17.5 h-17.5 overflow-hidden rounded-full">
                            <img src={activeChat?.doctor.profilePicture} className='size-full' alt="Dp" />
                        </div>
                        <div className="flex flex-col gap-1 justify-between">
                            <div className="flex flex-col justify-between gap-[10.6px]">
                                <p className="w-40 text-[22px] text-[#000929] font-semibold leading-[150%] tracking-[-0.44px] ">{activeChat?.doctor.displayName}</p>
                                <div className="flex items-center gap-[10.6px]">
                                    <div className="w-6 h-6 flex justify-center items-center">
                                        <div className="bg-[#33B843] rounded-full p-1.5" />
                                    </div>
                                    <p className="text-[#BABABA] font-medium tracking-[-0.32px]">Online</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-accent rounded-[31px] px-4.25 py-1.5 border border-[#D9D9D999] tracking-[-0.16px] ">{activeChat?.doctor.specialty}</p>
                    </div>
                    <div className="flex items-center gap-8">
                        <button className="w-max btn btn-primary font-normal text-base tracking-[-0.16px] px-4.25 py-1.5">Book an appointment</button>
                        <div className="w-10 h-8">
                            <svg className='size-full object-cover' xmlns="http://www.w3.org/2000/svg" width="40" height="33" viewBox="0 0 40 33" fill="none">
                                <path d="M20.884 27.7268H10.3507C5.08398 27.7268 3.33398 24.9268 3.33398 22.1134V10.8868C3.33398 6.67344 5.08398 5.27344 10.3507 5.27344H20.884C26.1507 5.27344 27.9007 6.67344 27.9007 10.8868V22.1134C27.9007 26.3268 26.134 27.7268 20.884 27.7268Z" stroke="#000929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path opacity="0.4" d="M32.5298 23.3002L27.8965 20.7002V12.2868L32.5298 9.68684C34.7965 8.42018 36.6632 9.19351 36.6632 11.4202V21.5802C36.6632 23.8068 34.7965 24.5802 32.5298 23.3002Z" stroke="#000929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path opacity="0.4" d="M19.166 15.168C20.5467 15.168 21.666 14.2725 21.666 13.168C21.666 12.0634 20.5467 11.168 19.166 11.168C17.7853 11.168 16.666 12.0634 16.666 13.168C16.666 14.2725 17.7853 15.168 19.166 15.168Z" stroke="#000929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="w-8 h-8">
                            <svg className='size-full object-cover' xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                <path d="M29.2927 24.9413C29.2927 25.4213 29.186 25.9146 28.9593 26.3946C28.7327 26.8746 28.4394 27.328 28.0527 27.7546C27.3994 28.4746 26.6793 28.9946 25.866 29.328C25.066 29.6613 24.1994 29.8346 23.266 29.8346C21.906 29.8346 20.4527 29.5146 18.9193 28.8613C17.386 28.208 15.8527 27.328 14.3327 26.2213C12.7993 25.1013 11.346 23.8613 9.95935 22.488C8.58602 21.1013 7.34602 19.648 6.23935 18.128C5.14602 16.608 4.26602 15.088 3.62602 13.5813C2.98602 12.0613 2.66602 10.608 2.66602 9.2213C2.66602 8.31464 2.82602 7.44797 3.14602 6.64797C3.46602 5.83464 3.97268 5.08797 4.67935 4.4213C5.53268 3.5813 6.46602 3.16797 7.45268 3.16797C7.82602 3.16797 8.19935 3.24797 8.53268 3.40797C8.87935 3.56797 9.18602 3.80797 9.42602 4.15464L12.5193 8.51464C12.7593 8.84797 12.9327 9.15464 13.0527 9.44797C13.1727 9.72797 13.2393 10.008 13.2393 10.2613C13.2393 10.5813 13.146 10.9013 12.9593 11.208C12.786 11.5146 12.5327 11.8346 12.2127 12.1546L11.1993 13.208C11.0527 13.3546 10.986 13.528 10.986 13.7413C10.986 13.848 10.9993 13.9413 11.026 14.048C11.066 14.1546 11.106 14.2346 11.1327 14.3146C11.3727 14.7546 11.786 15.328 12.3727 16.0213C12.9727 16.7146 13.6127 17.4213 14.306 18.128C15.026 18.8346 15.7193 19.488 16.426 20.088C17.1193 20.6746 17.6927 21.0746 18.146 21.3146C18.2127 21.3413 18.2927 21.3813 18.386 21.4213C18.4927 21.4613 18.5993 21.4746 18.7193 21.4746C18.946 21.4746 19.1193 21.3946 19.266 21.248L20.2793 20.248C20.6127 19.9146 20.9327 19.6613 21.2393 19.5013C21.546 19.3146 21.8527 19.2213 22.186 19.2213C22.4393 19.2213 22.706 19.2746 22.9993 19.3946C23.2927 19.5146 23.5994 19.688 23.9327 19.9146L28.346 23.048C28.6927 23.288 28.9327 23.568 29.0793 23.9013C29.2127 24.2346 29.2927 24.568 29.2927 24.9413Z" stroke="#000929" stroke-width="2" stroke-miterlimit="10" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full bg-red-600">hi</div>
                <div className="absolute bottom-0 w-full min-h-[106px] max-h-[150px] overflow-y-auto flex items-center gap-8 px-5 py-[13.33px] rounded-[22px] bg-[#FAFAFA] border-[1.33px] border-[#D9D9D999] shadow-[0px_0px_35px_0px_rgba(0,0,0,0.15)]">
                    <div className="w-8 h-8">
                        <svg className='size-full object-cover' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M16.2659 15.7336L14.3858 17.6136C13.3458 18.6536 13.3458 20.347 14.3858 21.387C15.4258 22.427 17.1192 22.427 18.1592 21.387L21.1192 18.427C23.1992 16.347 23.1992 12.9736 21.1192 10.8803C19.0392 8.80031 15.6658 8.80031 13.5725 10.8803L10.3459 14.107C8.55919 15.8936 8.55919 18.787 10.3459 20.5736" stroke="#2E3B5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.9993 29.3346C23.3631 29.3346 29.3327 23.3651 29.3327 16.0013C29.3327 8.63751 23.3631 2.66797 15.9993 2.66797C8.63555 2.66797 2.66602 8.63751 2.66602 16.0013C2.66602 23.3651 8.63555 29.3346 15.9993 29.3346Z" stroke="#2E3B5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="w-full max-w-[1056px] flex items-center gap-8">
                        <textarea
                            className="w-full h-full max-h-[123.33px] no-scrollbar overflow-y-auto outline-none text-[#92929D] text-[18.67px] px-8.75 py-6.25 rounded-[53px] border border-[#D9D9D999] resize-none"
                            placeholder="Type your message"
                            rows={1}
                            style={{ resize: "none" }}
                            onChange={(e) => {
                                e.currentTarget.style.height = `${Math.min(e.currentTarget.scrollHeight, 124)}px`;
                            }}
                        />
                        <div className="bg-accent text-white py-3.25 px-6.75 rounded-[55px]">
                            <svg className='size-full object-cover' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                                <path d="M16 22C17.5908 21.9983 19.116 21.3657 20.2408 20.2408C21.3657 19.116 21.9983 17.5908 22 16V8C22 6.4087 21.3679 4.88258 20.2426 3.75736C19.1174 2.63214 17.5913 2 16 2C14.4087 2 12.8826 2.63214 11.7574 3.75736C10.6321 4.88258 10 6.4087 10 8V16C10.0017 17.5908 10.6343 19.116 11.7592 20.2408C12.884 21.3657 14.4092 21.9983 16 22ZM12 8C12 6.93913 12.4214 5.92172 13.1716 5.17157C13.9217 4.42143 14.9391 4 16 4C17.0609 4 18.0783 4.42143 18.8284 5.17157C19.5786 5.92172 20 6.93913 20 8V16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20C14.9391 20 13.9217 19.5786 13.1716 18.8284C12.4214 18.0783 12 17.0609 12 16V8ZM17 25.95V30C17 30.2652 16.8946 30.5196 16.7071 30.7071C16.5196 30.8946 16.2652 31 16 31C15.7348 31 15.4804 30.8946 15.2929 30.7071C15.1054 30.5196 15 30.2652 15 30V25.95C12.5346 25.6991 10.2497 24.543 8.5873 22.7051C6.9249 20.8672 6.00305 18.4782 6 16C6 15.7348 6.10536 15.4804 6.29289 15.2929C6.48043 15.1054 6.73478 15 7 15C7.26522 15 7.51957 15.1054 7.70711 15.2929C7.89464 15.4804 8 15.7348 8 16C8 18.1217 8.84285 20.1566 10.3431 21.6569C11.8434 23.1571 13.8783 24 16 24C18.1217 24 20.1566 23.1571 21.6569 21.6569C23.1571 20.1566 24 18.1217 24 16C24 15.7348 24.1054 15.4804 24.2929 15.2929C24.4804 15.1054 24.7348 15 25 15C25.2652 15 25.5196 15.1054 25.7071 15.2929C25.8946 15.4804 26 15.7348 26 16C25.997 18.4782 25.0751 20.8672 23.4127 22.7051C21.7503 24.543 19.4654 25.6991 17 25.95Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

interface ChatItemProps {
    chat: Chat;
    handleClick: () => void;
}

export function ChatItem({ chat, handleClick }: ChatItemProps) {

    const [queries, setQueries] = useSearchParams();

    const activeChatId = useMemo(() => {
        return queries.get('activeChatId');
    }, [queries])

    const isActive = useMemo(() => {
        return activeChatId === chat.id;
    }, [activeChatId])

    console.log(activeChatId)

    return (
        <div onClick={handleClick} className={`w-full h-25.5 flex items-center gap-4 px-6.75 py-3.25 border-b ${isActive ? "bg-[#62C8FF33] border-b-accent" : "border-b[#707070]"} `}>
            <div className="w-17.5 h-17.5 overflow-hidden rounded-full">
                <img src={chat.doctor.profilePicture} className='size-full' alt="Dp" />
            </div>
            <div className="w-[85%] max-w-[336px] h-15.75 flex flex-col gap-1 justify-between">
                <div className="flex items-center justify-between">
                    <p className="text-xl text-[#000929] font-medium leading-[150%] tracking-[-0.4px] ">{chat.doctor.displayName}</p>
                    <p className="text-lg text-[#707070] font-semibold tracking-[-0.18px] ">{chat.doctor.specialty}</p>
                </div>
                <div className="flex items-center gap-7.25">
                    <p className="max-w-[279px] text-lg line-clamp-1 text-[#707070] tracking-[-0.36px] ">{chat.messages.filter((msg) => msg.type === "text")[chat.messages.filter((msg) => msg.type === "text").length - 1]?.content}</p>
                </div>
            </div>
        </div>
    )
}