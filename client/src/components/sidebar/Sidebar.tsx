import { Link, useLocation } from "react-router-dom";
import { logo } from "../../assets";

export default function Sidebar() {

    const { pathname } = useLocation();

    const activeLink = (str: string) => pathname.split("/")[2] === str;

    return (
        <nav className="w-[106px] h-screen fixed top-0 left-0 flex flex-col gap-32 max-2xl:gap-15 py-5.5 bg-[#f7f8f8] shadow-[0px_4px_29.7px_0px_rgba(0,0,0,0.05)] z-[100]">
            <div className="w-[51px] h-[51px] mx-5.5">
                <img src={logo} className="size-full object-cover" alt="logo" />
            </div>
            <ul className="max-w-[101px] flex flex-col gap-11.5 max-2xl:gap-7 list-none text-center ">
                <li>
                    <Link className={`side-nav-item ${activeLink('mental-health') ? 'active' : ''}`} to="/service/mental-health" >
                        <div className="w-8 h-8">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1825_11333)">
                                    <path d="M11 17C11.9889 17 12.9556 17.2932 13.7779 17.8427C14.6001 18.3921 15.241 19.173 15.6194 20.0866C15.9978 21.0002 16.0969 22.0055 15.9039 22.9755C15.711 23.9454 15.2348 24.8363 14.5355 25.5355C13.8363 26.2348 12.9454 26.711 11.9755 26.9039C11.0055 27.0969 10.0002 26.9978 9.08658 26.6194C8.17295 26.241 7.39206 25.6001 6.84265 24.7779C6.29324 23.9556 6 22.9889 6 22V21.1588" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21 17C20.0111 17 19.0444 17.2932 18.2222 17.8427C17.3999 18.3921 16.759 19.173 16.3806 20.0866C16.0022 21.0002 15.9031 22.0055 16.0961 22.9755C16.289 23.9454 16.7652 24.8363 17.4645 25.5355C18.1637 26.2348 19.0546 26.711 20.0246 26.9039C20.9945 27.0969 21.9998 26.9978 22.9134 26.6194C23.8271 26.241 24.6079 25.6001 25.1574 24.7779C25.7068 23.9556 26 22.9889 26 22V21.1588" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.00148 21.5H8.00148C6.58516 21.5013 5.21404 21.0015 4.13078 20.089C3.04752 19.1766 2.32195 17.9104 2.08249 16.5145C1.84302 15.1185 2.10509 13.6829 2.82233 12.4616C3.53956 11.2403 4.66571 10.3121 6.00148 9.84125V9C6.00148 7.67392 6.52827 6.40215 7.46595 5.46447C8.40363 4.52678 9.6754 4 11.0015 4C12.3276 4 13.5993 4.52678 14.537 5.46447C15.4747 6.40215 16.0015 7.67392 16.0015 9V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M23 21.5H24C25.4163 21.5013 26.7874 21.0015 27.8707 20.089C28.954 19.1766 29.6795 17.9104 29.919 16.5145C30.1585 15.1185 29.8964 13.6829 29.1792 12.4616C28.4619 11.2403 27.3358 10.3121 26 9.84125V9C26 7.67392 25.4732 6.40215 24.5355 5.46447C23.5979 4.52678 22.3261 4 21 4C19.6739 4 18.4021 4.52678 17.4645 5.46447C16.5268 6.40215 16 7.67392 16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M25 14H24.5C23.5717 14 22.6815 13.6313 22.0251 12.9749C21.3687 12.3185 21 11.4283 21 10.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 14H7.5C8.42826 14 9.3185 13.6313 9.97487 12.9749C10.6313 12.3185 11 11.4283 11 10.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1825_11333">
                                        <rect width="32" height="32" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <p className="text-sm font-medium leading-[13px] tracking-[0.28px]">Mental Health</p>
                    </Link>
                </li>
                <li>
                    <Link className={`side-nav-item ${activeLink('medicine-alert') ? 'active' : ''}`} to="/service/medicine-alert" >
                        <div className="w-8 h-8">
                            <svg width="33" height="32" className="size-full object-cover" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.8431 5.65691L6.15582 18.3442C3.94692 20.5531 3.94692 24.1344 6.15582 26.3433L6.15671 26.3442C8.36561 28.5531 11.9469 28.5531 14.1559 26.3442L26.8431 13.6569C29.052 11.448 29.052 7.8667 26.8431 5.6578L26.8422 5.65691C24.6333 3.44801 21.052 3.44801 18.8431 5.65691Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.5 12L20.5 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20.5 14L23.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="text-sm font-medium leading-[13px] tracking-[0.28px]">Medicine alert</p>
                    </Link>
                </li>
                <li>
                    <Link className={`side-nav-item ${activeLink('health-vault') ? 'active' : ''}`} to="/service/health-vault" >
                        <div className="w-8 h-8">
                            <svg width="33" height="32" className="size-full object-cover" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 26V8C4.5 7.73478 4.60536 7.48043 4.79289 7.29289C4.98043 7.10536 5.23478 7 5.5 7H12.1663C12.3826 7 12.5932 7.07018 12.7662 7.2L16.5 10H25.5C25.7652 10 26.0196 10.1054 26.2071 10.2929C26.3946 10.4804 26.5 10.7348 26.5 11V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4.5 26L8.2725 14.6838C8.33888 14.4846 8.46623 14.3114 8.63651 14.1887C8.80678 14.066 9.01136 14 9.22125 14H29.5C29.6585 14 29.8147 14.0376 29.9557 14.1098C30.0968 14.182 30.2186 14.2867 30.3113 14.4153C30.404 14.5438 30.4647 14.6925 30.4886 14.8492C30.5125 15.0058 30.4989 15.1659 30.4487 15.3162L26.8862 26H4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="text-sm font-medium leading-[13px] tracking-[0.28px]">Health vault</p>
                    </Link>
                </li>
                <li>
                    <Link className={`side-nav-item ${activeLink('book-test') ? 'active' : ''}`} to="/service/book-test" >
                        <div className="w-8 h-8">
                            <svg width="33" height="32" className="size-full object-cover" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.5 3L29.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.5 6L26.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18 7.5L6.7925 18.7075C6.60532 18.8949 6.50012 19.1489 6.5 19.4137V26H13.0863C13.3511 25.9999 13.6051 25.8947 13.7925 25.7075L25 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.75 12.75L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.75 15.75L13 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21.5 11L26.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.5 26L3.5 29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="text-sm font-medium leading-[13px] tracking-[0.28px]">Book test</p>
                    </Link>
                </li>
                <li>
                    <Link className={`side-nav-item ${activeLink('consult-online') ? 'active' : ''}`} to="/service/consult-online" >
                        <div className="w-8 h-8">
                            <svg width="33" height="32" className="size-full object-cover" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Group 1000001311">
                                    <path id="Vector" d="M24.5 8H4.5C3.94772 8 3.5 8.44772 3.5 9V23C3.5 23.5523 3.94772 24 4.5 24H24.5C25.0523 24 25.5 23.5523 25.5 23V9C25.5 8.44772 25.0523 8 24.5 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path id="Vector_2" d="M25.5 14L31.5 10V22L25.5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </svg>
                        </div>
                        <p className="text-sm font-medium leading-[13px] tracking-[0.28px]">Consult online</p>
                    </Link>
                </li>
                <li>
                    <Link className={`side-nav-item ${activeLink('arogo-card') ? 'active' : ''}`} to="/service/arogo-card" >
                        <div className="w-8 h-8">
                            <svg width="33" height="32" className="size-full object-cover" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.5 6H5.5C4.94772 6 4.5 6.44772 4.5 7V25C4.5 25.5523 4.94772 26 5.5 26H27.5C28.0523 26 28.5 25.5523 28.5 25V7C28.5 6.44772 28.0523 6 27.5 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19.5 14H24.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19.5 18H24.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.5 18C14.1569 18 15.5 16.6569 15.5 15C15.5 13.3431 14.1569 12 12.5 12C10.8431 12 9.5 13.3431 9.5 15C9.5 16.6569 10.8431 18 12.5 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.5 21C8.94375 19.275 10.6363 18 12.5 18C14.3637 18 16.0575 19.2737 16.5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="text-sm font-medium leading-[13px] tracking-[0.28px]">Arogo card</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
