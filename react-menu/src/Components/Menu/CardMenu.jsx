import React from 'react'
import bgDesayuno from '../../Assets/bg-des.jpg'
import bgAlmuerzo from '../..//Assets/bg-alm.jpg'
import bgBebidas from '../../Assets/bg-beb.jpg'

const CardMenu = (props) => {
  return (
    <div className='card-menu__container'>
      <div className='card-menu__img' style={{
        backgroundImage: props.name === 'Desayunos' ? `url('${bgDesayuno}')` : 'none' && 
        props.name === 'Almuerzos' ? `url('${bgAlmuerzo}')` : 'none' && 
        props.name === 'Bebidas' ? `url('${bgBebidas}')` : 'none'
      }}>
      </div>
      <div className='card-menu__text'>
        <h3>{props.name}</h3>
      </div>
    </div>
    
  )
}

export default CardMenu