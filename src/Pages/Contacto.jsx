import React from 'react'
import { FaEnvelope, FaFacebookSquare, FaInstagramSquare, FaPhoneAlt,  } from "react-icons/fa";

const Contacto = () => {
  return (
    <div className='container'>
      <h2>Contacto</h2>
      <p>Puedes comunicarte con nosotros a traves de nuestros diferentes canales de atención.</p>
      <div className='contacto__info'>
        <div className='info__title'>
          <p className='title'>Correo</p>
          <FaEnvelope/>
        </div>
        <p>ressantocomer@gmail.com</p>
        <div className='info__title'>
          <p className='title'>Telefono</p>
          <FaPhoneAlt/>
        </div>
        <p>3137513826</p>
      </div>
      <div className='contacto__icons'>
        <h3>Nuestras redes</h3>
        <div className='icons__item'>
          <div className='item__content'>
            <FaFacebookSquare/>
          </div>
          <div className='item__content'>
            <FaInstagramSquare/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto