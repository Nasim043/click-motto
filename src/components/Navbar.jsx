import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "explore",
    },
    {
      id: 2,
      link: "Dicover",
    },
    {
      id: 3,
      link: "for Professionals",
    },
  ];
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1440px]">
      <div className="flex justify-between items-center w-full h-20 px-4 top-0 left-0 z-50 lg:px-10">
        <div>
          <h1 className="text-2xl font-bold uppercase text-[#E38214]">
            Click Motto
          </h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-semibold hover:scale-105 duration-200"
            >
              <a href="#">{link}</a>
            </li>
          ))}
          <button
            className="menu font-semibold border-2 rounded border-gray-200 px-1"
            href=""
          >
            Submit Photos
          </button>
          <a href="#" className="menu">
            Login
          </a>
          <button
            className="menu font-semibold border-0 text-white rounded px-2 bg-[#E38214]"
            href=""
          >
            Join Free
          </button>
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul
            data-aos="fade-left"
            data-aos-duration="500"
            className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-96 mt-20 bg-[#111111] text-white z-50"
          >
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-4 text-xl"
              >
                <a onClick={() => setNav(!nav)} href="">
                  {link}
                </a>
              </li>
            ))}
            <button
              className="px-4 cursor-pointer capitalize py-4 text-xl"
              //   className="menu text-primary-50 font-semibold border-2 rounded border-gray-200 px-1"
              href=""
            >
              Submit Photos
            </button>
            <a
              href="#"
              className="px-4 cursor-pointer capitalize py-4 text-xl"
              // className="menu text-primary-50"
            >
              Login
            </a>
            <button
              className="px-4 cursor-pointer capitalize py-4 text-xl"
              //   className="menu text-primary-50 font-semibold border-0 text-white rounded px-2 bg-[#E38214]"
              href=""
            >
              Join Free
            </button>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
