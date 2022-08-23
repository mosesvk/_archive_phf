import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaInstagram,
  FaLocationArrow,
  FaTwitterSquare,
  FaBars,
  FaUserAlt,
} from 'react-icons/fa';

import { Sidebar } from '../components';

// const [isOpen, setIsOpen] = useState(false);

const Navbar = () => {
  return (
    <>
      <Sidebar />
      <nav className='block px-8 py-4 bg-gray-600 text-white h-24 sticky top-0 z-100 box-content'>
        <div className='flex justify-between items-center h-full xl:px-56 lg:px-32 px-12'>
          <a
            className='text-5xl font-extrabold fontFamily-["mainLogo"] max-w-sm text-center text-slate-50 hover:decoration-0'
            href='/'
          >
            <h1 className='text-4xl md:text-2xl sm:text-lg'>
              POWERHOUSE FITNESS
            </h1>
          </a>
          <div className='nav-info-wrap'>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
