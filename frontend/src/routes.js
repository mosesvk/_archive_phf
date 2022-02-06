import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/home'
import About from './components/About/about'
import Programs from './components/Programs/programs'
import Contact from './components/Contact/contact'
import Register from './components/Register/register'
import User from './components/User/User'
import Login from './components/Login/Login'

export default (
  <Routes>
    <Route exact path="/"   element={<Home />} />
    <Route path="/about"    element={<About />} />
    <Route path="/programs" element={<Programs />} />
    <Route path="/contact"  element={<Contact />} />
    <Route path="/user"     element={<User />}  />
    <Route path="/register" element={<Register />} />
    <Route path="/login"    element={<Login />} />
  </Routes>
)