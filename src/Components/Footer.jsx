import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div className='footer__content'>
            <p>@ Todos los derechos reservados</p>
            <div className='content__icons'>
                <div className='icon__item'>
                  <FaFacebookSquare/>
                </div>
                <div className='icon__item'>
                  <FaInstagramSquare/>
                </div>
                <div className='icon__item'>
                  <FaPhoneAlt/>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer