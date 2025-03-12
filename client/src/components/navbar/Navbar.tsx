import { logo, user } from '../../assets'
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {

  const { pathname } = useLocation();

  const activeLink = (str: string) => pathname.split("/")[1] === str;

  return (
    <nav className='w-full h-23.5 fixed mx-auto px-7.5 pt-[15px flex gap-10 items-center justify-end bg-white z-[100]'>
      <div className="w-full flex justify-between items-center p-[17px_19px] ">

        <Link to="/">
          <div className="w-[158.8px] flex gap-4 items-center ">
            <div className="w-11 h-11 overflow-hidden">
              <img src={logo} className='size-full object-cover' alt="" />
            </div>
            <div className="w-[99px] font-semibold text-[22.89px">
              <p>Arogo AI</p>
            </div>
          </div>
        </Link>

        <div className="flex justify-center gap-9">
          <ul className="hidden xl:flex justify-end items-center gap-9">
            <li>
              <Link className={`nav-item ${activeLink('messages') ? 'active' : ''}`} to="/messages">Messages</Link>
            </li>
            <li>
              <Link className={`nav-item ${activeLink('physical') ? 'active' : ''}`} to="/physical">Physical health</Link>
            </li>
            <li>
              <Link className={`nav-item ${activeLink('mental') ? 'active' : ''}`} to="/mental">Mental health</Link>
            </li>
            <li>
              <Link className={`nav-item ${activeLink('appointments') ? 'active' : ''}`} to="/appointments">Appointments</Link>
            </li>
          </ul>
          <div className="flex gap-5 items-center ">
            <div className="w-15 h-15 btn btn-primary text-white hover:text-accent rounded-[35px] p-3.5">
              <svg className='size-full object-cover' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 24C12 25.0609 12.4214 26.0783 13.1716 26.8284C13.9217 27.5786 14.9391 28 16 28C17.0609 28 18.0783 27.5786 18.8284 26.8284C19.5786 26.0783 20 25.0609 20 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23 3C24.9311 4.23215 26.4973 5.9585 27.5362 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.46289 8C5.50185 5.9585 7.06809 4.23215 8.99914 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.99984 14C6.99984 11.6131 7.94806 9.32387 9.63588 7.63604C11.3237 5.94821 13.6129 5 15.9998 5C18.3868 5 20.676 5.94821 22.3638 7.63604C24.0516 9.32387 24.9998 11.6131 24.9998 14C24.9998 18.4775 26.0373 21.075 26.8623 22.5C26.95 22.6518 26.9962 22.8239 26.9963 22.9991C26.9965 23.1744 26.9506 23.3466 26.8632 23.4985C26.7759 23.6504 26.6501 23.7767 26.4986 23.8647C26.3471 23.9527 26.1751 23.9994 25.9998 24H5.99984C5.82482 23.9989 5.65314 23.952 5.50195 23.8638C5.35077 23.7756 5.22539 23.6492 5.13833 23.4974C5.05127 23.3456 5.00559 23.1735 5.00586 22.9985C5.00613 22.8235 5.05233 22.6516 5.13984 22.5C5.96359 21.075 6.99984 18.4763 6.99984 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex items-center bg-accent rounded-[35px] min-w-[139px pl-1.5 pr-4.5">
              <div className="w-15 h-15 overflow-hidden p-2.5">
                <img src={user} className='size-full object-cover' alt="User dp" />
              </div>
              <div className="text-white">
                <p>Mayank</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}
