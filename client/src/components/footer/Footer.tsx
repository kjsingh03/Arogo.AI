import { Link } from "react-router-dom";
import { facebook, instagram, linkedin, logo, twitter, youtube } from "../../assets";

function Footer() {
  return (
    <footer className="w-full py-3">
      <div className="flex items-center justify-between px-5 xl:px-35">
        <div className="flex gap-4 items-center">
          <img src={logo} className="h-[49px] rounded-[39.392px] w-[49px]" alt="Logo" />
          <p className="w-27.25 h-6.5 text-lg font-medium">Arogo AI</p>
        </div>
        <div className="flex gap-12 justify-end max-sm:hidden">
          <Link to="/" className="text-xl cursor-pointer">
            Home
          </Link>
          <Link to="/" className="text-xl cursor-pointer">
            Service
          </Link>
          <Link to="/" className="text-xl cursor-pointer">
            Blogs
          </Link>
          <Link to="/" className="text-xl cursor-pointer">
            About
          </Link>
          <Link to="/" className="text-xl cursor-pointer">
            Contact
          </Link>
        </div>
      </div>

      <hr className="mx-0 my-5 h-px bg-[#2e2e2e]" />

      <div className="flex justify-between items-center px-5 xl:px-35">
        <p className="text-lg line-clamp-1">
          All rights reserved ® arogo.com | Terms and conditions apply!
        </p>
        <div className="flex gap-6 max-sm:justify-center">
          <Link to="/">
            <img src={facebook} alt="" />
          </Link>
          <Link to="/">
            <img src={instagram} alt="" />
          </Link>
          <Link to="/">
            <img src={youtube} alt="" />
          </Link>
          <Link to="/">
            <img src={linkedin} alt="" />
          </Link>
          <Link to="/">
            <img src={twitter} alt="" />
          </Link>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
