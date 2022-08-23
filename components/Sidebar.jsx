import React from 'react'
import { Link } from 'react-router-dom';
import {
  FaTimes,
  FaFacebookSquare,
  FaYoutubeSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside isOpen={isOpen} toggle={toggle}>
          <div className='icon-wrap'>
        <FaTimes onClick={toggle} />
      </div>
      <div className='sidebar-header'>
        <h1 className='sidebar-nav-logo'>POWERHOUSE FITNESS</h1>
      </div>
    </aside>  )
}

export default Sidebar