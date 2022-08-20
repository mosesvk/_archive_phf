import React from 'react';
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

import Sidebar from '../Sidebar/Sidebar';

const [isOpen, setIsOpen] = useState(false);

const Navbar = () => {
  return (
    <>
      <Sidebar />
      <nav className='block px-8 py-4 bg-gray-600 text-white h-24 sticky top-0 z-100 box-content'>
        <div className='flex justify-between items-center h-full xl:px-56 lg:px-32 px-12'>
          <a className='text-5xl font-extrabold font-["mainLogo"] max-w-sm text-center text-slate-50 hover:decoration-0' href='/'>
            <h1 className='text-4xl md:text-2xl sm:text-lg'>POWERHOUSE FITNESS</h1>
          </a>
          <div className='nav-info-wrap'>
            <div className='nav-social-wrap'>
              <a
                className='social-links phone-size-link nav-map-link'
                href='https://www.google.com/maps/dir//athletic+republic+google+maps/@40.3596245,-111.9002664,11.84z/data=!4m8!4m7!1m0!1m5!1m1!1s0x874d81e6f4f56b71:0x14fb336b3b3a2144!2m2!1d-111.8334535!2d40.3858813'
                target='_blank'
                rel='noreferrer'
              >
                <FaLocationArrow />
                <h3 className=''>Lehi, UT</h3>
              </a>
              {userInfo ? (
                <div className='nav-login-active'>
                  <Link className='nav-user-icon' to='/User'>
                    <FaUserAlt />
                    <p>{userInfo.username}</p>
                  </Link>
                  <h3 onClick={logoutHandler} className='logout'>
                    LOGOUT
                  </h3>
                </div>
              ) : (
                <Link
                  className='social-links phone-size-link login-link'
                  to='/login'
                >
                  LOGIN
                </Link>
              )}
              <a
                href='https://twitter.com/kanuch78'
                target='_blank'
                rel='noreferrer'
                className='social-links social-icons'
              >
                <FaTwitterSquare />
              </a>
              <a
                href='https://www.facebook.com/TuniK78'
                target='_blank'
                rel='noreferrer'
                className='social-links social-icons'
              >
                <FaFacebookSquare />
              </a>
              <a
                href='https://www.instagram.com/t.kanuch78/?hl=en'
                target='_blank'
                rel='noreferrer'
                className='social-links social-icons'
              >
                <FaInstagram />
              </a>
              <a
                href='https://www.youtube.com/watch?app=desktop&v=mSa3CtE7DSE'
                target='_blank'
                rel='noreferrer'
                className='social-links social-icons'
              >
                <FaYoutubeSquare />
              </a>
            </div>
            <div className='nav-links-wrap'>
              <Link className='links' to='/'>
                HOME
              </Link>
              <Link className='links' to='/about'>
                ABOUT
              </Link>
              <Link className='links' to='/contact'>
                CONTACT
              </Link>
              <Link className='links link-box' id='program-box' to='/programs'>
                PROGRAMS
              </Link>
              <Link className='links link-box' id='join-box' to='/register'>
                JOIN
              </Link>
              {/* <Link className="links" to="/register">REGISTER</Link> */}
            </div>
            <div className='hidden xl:flex xl:justify-end xl:text-4xl xl:text-white'>
              <FaBars className='cursor-pointer' onClick={toggle} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
