import React from 'react'

const Ubicacion = () => {
  return (
    <div className='container'>
      <h2>Ubicación</h2>
      <div className='ubicacion__map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.0560723528201!2d-75.57319667074098!3d6.24895057605961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44299504791cd5%3A0xb9f74bc5b2564ad3!2sCentro%20De%20Medellin!5e0!3m2!1ses!2sco!4v1679444109868!5m2!1ses!2sco" width="290" height="240" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <p>Cra. 54 #46-55, La Candelaria, Medellín, Antioquia</p>
    </div>
  )
}

export default Ubicacion