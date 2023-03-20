import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import ProductItem from './ProductItem'

const ReturnBtn = () => {
    return (
        <NavLink to='/' className='returnBtn'>
            <FaArrowLeft/>
            <p>Volver</p>
        </NavLink>
    )
}

const Desayunos = () => {
    return (
        <div className='container'>
            <ReturnBtn/>
            <h1>Desayunos</h1>
            <ProductItem title='Huevo revuelto' desc='Huevos revueltos con arroz' price='$10.000' />
        </div>
    )
}
const Almuerzos = () => {
    return (
        <div className='container'>
            <ReturnBtn/>
            <h1>Almuerzos</h1>
        </div>
    )
}
const Bebidas = () => {
    return (
        <div className='container'>
            <ReturnBtn/>
            <h1>Bebidas</h1>
        </div>
    )
}

const ProductMenu = (props) => {
  return (
    props.name === 'Desayunos' ? <Desayunos/> : 'none' &&
    props.name === 'Almuerzos' ? <Almuerzos/> : 'none' &&
    props.name === 'Bebidas' ? <Bebidas/> : 'none'
  )
}

export default ProductMenu