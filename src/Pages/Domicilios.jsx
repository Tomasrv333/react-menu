import React from 'react'

const Domicilios = () => {
  return (
    <div className='container'>
      <h2>Domicilios</h2>
      <p>Envios a todo Medellín de 8am a 8pm</p>
      <div className='info__content'>
        <h3>Costos</h3>
        <div className='price__content'>
          <div className='price__item'>
            <p className='item__text'>Zona centro</p>
            <span className='item__span'>$3.000</span>
          </div>
          <div className='price__item'>
            <p className='item__text'>Otras areas</p>
            <span className='item__span'>$5.000</span>
          </div>
        </div>
      </div>
      <p className=''>Tu orden se demorara de 20 a 40 minutos</p>
      <button className='button--outline'>Pedir Ahora!</button>
    </div>
  )
}

export default Domicilios