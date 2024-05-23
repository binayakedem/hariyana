import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { MdOutlineClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [activeMe, setActiveMe] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const [isOpens, setIsOpens] = useState(false);
  const handleMouseEnters = () => {
    setIsOpens(true);
  };
  const handleMouseLeaves = () => {
    setIsOpens(false);
  };
  return (
    <div className='w-[100vw] h-auto '>
      <nav className="p-2 px-24 fixed top-0 right-0 left-0 bg-white shadow md:flex md:items-center md:justify-between z-50">
        <div className="flex justify-between items-center ">
          <span className="text-2xl font-[Poppins] cursor-pointer">
            <img className="h-24 inline"
              src={logo} />
            {/* kantipur ride */}
          </span>
          <span className="text-3xl cursor-pointer mx-2 md:hidden block">
            {
              !activeMe ? <IoMenu onClick={() => setActiveMe(!activeMe)} /> : <MdOutlineClose onClick={() => setActiveMe(!activeMe)} />
            }
          </span>
        </div>
        <ul className={` md:flex md:items-center md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100  ${activeMe ? 'top-[90px] ' : 'top-[-400px]'} transition-all ease-in duration-500`}>
          <li className="mx-4 my-6 md:my-0">
            <Link to="/" className="text-xl font-semibold hover:text-green-600 duration-500">HOME</Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <div className="relative h-6" onMouseEnter={handleMouseEnter} >
              <button
                className="text-xl font-bold text-gray-800 hover:text-green-600 rounded-md focus:outline-none"
              >
                About
              </button>
              {isOpen && (
                <div className="absolute z-10 right-0 mt-2 w-48 bg-white rounded-md shadow-lg" onMouseLeave={handleMouseLeave}>
                  <Link
                    to="/about-us"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/team"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link to="/service" className="text-xl font-semibold hover:text-green-600 duration-500">SERVICES</Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link to="/project" className="text-xl font-semibold hover:text-green-600 duration-500">PROJECT</Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <div className="relative h-6" onMouseEnter={handleMouseEnters} >
              <button
                className="text-xl font-semibold text-gray-800 hover:text-green-600 rounded-md focus:outline-none"
              >
                Media
              </button>
              {isOpens && (
                <div className="absolute z-10 right-0 mt-2 w-48 bg-white rounded-md shadow-lg" onMouseLeave={handleMouseLeaves}>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Latest Blog
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Gallary
                  </Link>
                </div>
              )}
            </div>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link to="/contact" className="text-xl font-semibold hover:text-green-600 duration-500">CONTACT</Link>
          </li>
          <button className="bg-green-600 text-white font-[Poppins] duration-500 font-bold text-lg px-6 py-2 mx-4 hover:bg-green-500 rounded ">
            Take Action
          </button>
        </ul>
      </nav>

    </div>
  )
}

export default Navbar