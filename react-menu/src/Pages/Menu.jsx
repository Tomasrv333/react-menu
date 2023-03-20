import React from 'react'
import { NavLink } from 'react-router-dom'
import CardMenu from '../Components/CardMenu'

const Menu = () => {
  return (
    <div className='container'>
      <h2>Carta del Restaurante</h2>
      <NavLink to='/desayunos'>
        <CardMenu name='Desayunos'/>
      </NavLink>
      <NavLink to='/almuerzos'>
        <CardMenu name='Almuerzos'/>
      </NavLink>
      <NavLink to='/bebidas'>
        <CardMenu name='Bebidas'/>
      </NavLink>
    </div>
  )
}

export default Menu