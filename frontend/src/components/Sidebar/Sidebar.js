import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  FaTimes,
  FaFacebookSquare,
  FaYoutubeSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import { SidebarContainer } from './SidebarContainer';
import { logout } from '../../store/actions/userActions';

import './Sidebar.scss';

const Sidebar = (props) => {
  const { isOpen, toggle } = props;
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
      <div className='icon-wrap'>
        <FaTimes onClick={toggle} />
      </div>
      <div className='sidebar-header'>
        <h1 className='sidebar-nav-logo'>POWERHOUSE FITNESS</h1>
      </div>
      <div className='sidebar-wrap'>
        <div className='sidebar-menu'>
          {userInfo ? (
            <>
              <h3 onClick={logoutHandler} className='sidebar-link'>
                LOGOUT
              </h3>
            </>
          ) : (
            <>
              <Link
                className='sidebar-link sidebar-join'
                to='/register'
                onClick={toggle}
              >
                JOIN
              </Link>
              <Link className='sidebar-link' to='/login' onClick={toggle}>
                LOGIN
              </Link>
            </>
          )}
          <Link className='sidebar-link' to='/' onClick={toggle}>
            HOME
          </Link>
          <Link className='sidebar-link' to='/about' onClick={toggle}>
            ABOUT
          </Link>
          <Link className='sidebar-link' to='/contact' onClick={toggle}>
            CONTACT
          </Link>
          <Link className='sidebar-link' to='/programs' onClick={toggle}>
            PROGRAMS
          </Link>
        </div>
      </div>
      <div className='sidebar-footer'>
        <a
          href='https://twitter.com/kanuch78'
          target='_blank'
          rel='noreferrer'
          className='social-sidebar-links'
        >
          <FaTwitterSquare />
        </a>
        <a
          href='https://www.facebook.com/TuniK78'
          target='_blank'
          rel='noreferrer'
          className='social-sidebar-links'
        >
          <FaFacebookSquare />
        </a>
        <a
          href='https://www.instagram.com/t.kanuch78/?hl=en'
          target='_blank'
          rel='noreferrer'
          className='social-sidebar-links'
        >
          <FaInstagram />
        </a>
        <a
          href='https://www.youtube.com/watch?app=desktop&v=mSa3CtE7DSE'
          target='_blank'
          rel='noreferrer'
          className='social-sidebar-links'
        >
          <FaYoutubeSquare />
        </a>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
