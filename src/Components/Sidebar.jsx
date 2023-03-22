import React from 'react'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { FaFacebookSquare, FaInstagramSquare, FaBars, FaChevronLeft, FaMapMarkedAlt, FaShoppingCart, FaInfoCircle, FaPhoneAlt, FaShoppingBag } from "react-icons/fa";
import Footer from './Footer';

const Sidebar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen)
  const menuItem = [
    {
      path:"/",
      name:"Menu",
      icon:<FaShoppingCart/>,
    },
    {
      path:"/ubicacion",
      name:"Ubicación",
      icon:<FaMapMarkedAlt/>,
    },
    {
      path:"/domicilios",
      name:"Domicilios",
      icon:<FaShoppingBag/>,
    },
    {
      path:"/informacion",
      name:"Información",
      icon:<FaInfoCircle/>,
    },
    {
      path:"/contacto",
      name:"Contacto",
      icon:<FaPhoneAlt/>,
    },
  ]
  
  return (
    <div className='sidebar-container'>
      <div className='sidebar'>
        <div className='sidebar__top-section'>
          <div className='top-section__title'>
            <FaBars onClick={toggle}/>
            <p>Santo Comer</p>
          </div>
          <div className='top-section__icons'>
            <div className='icon__btn'>
              <FaFacebookSquare/>
            </div>
            <div className='icon__btn'>
              <FaInstagramSquare/>
            </div>
          </div>
        </div>
        <div style={{ width: isOpen ? "220px" : "0px" }} className='sidebar__side-section'>
          <div className='sidebar__side-header'>
            <FaChevronLeft onClick={toggle}/>
          </div>
          {
            menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className='sidebar__link' onClick={toggle}>
                <div className='link__icon'>{item.icon}</div>
                <div className='link__text'>{item.name}</div>
              </NavLink>
            ))
          }
        </div>
      </div>
      <main>
          {children}
          <Footer/>
      </main>
    </div>
  )
}

export default Sidebar