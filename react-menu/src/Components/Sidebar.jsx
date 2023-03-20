import React from 'react'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaChevronLeft, FaMapMarkedAlt, FaShoppingCart, FaInfoCircle, FaPhoneAlt, FaShoppingBag } from "react-icons/fa";

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
          <FaBars onClick={toggle}/>
          <p>Santo Comer</p>
        </div>
        <div style={{ width: isOpen ? "220px" : "0px" }} className='sidebar__side-section'>
          <div className='sidebar__side-header'>
            <FaChevronLeft onClick={toggle}/>
          </div>
          {
            menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className='sidebar__link'>
                <div className='link__icon'>{item.icon}</div>
                <div className='link__text'>{item.name}</div>
              </NavLink>
            ))
          }
        </div>
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar