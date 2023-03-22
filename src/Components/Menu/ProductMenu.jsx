import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import ProductItem from './ProductItem'

const ReturnBtn = () => {
    return (
        <NavLink to='/' className='returnBtn'>
            <FaArrowLeft/>
            <p className='returnBtn__text'>Volver</p>
        </NavLink>
    )
}

const Desayunos = () => {
    return (
        <div className='container'>
            <ReturnBtn/>
            <h1>Desayunos</h1>
            <ProductItem title='Huevos revueltos' desc='Huevos revueltos con arroz' price='$10.000' img='https://cdn6.recetasdeescandalo.com/wp-content/uploads/2014/08/huevos-revueltos.jpg' />
            <ProductItem title='Calentado' desc='Arroz, huevo y frijoles revueltos' price='$10.000' img='https://cdn.inoutdelivery.com/hornitos.inoutdelivery.com/lg/1622572449648-CALENTADO%20ANTIOQUE%C3%91O.jpg' />
            <ProductItem title='Arepa con quesito' desc='Arepa con quesito campesino' price='$10.000' img='https://sanchopaisa.com/wp-content/uploads/2020/09/arepa-blanca.jpg' />
            <ProductItem title='Arepa con hogao' desc='Arepa con hogado hecho de tomate y cebolla' price='$10.000' img='https://pbs.twimg.com/media/EZdMMDcXQAAmqql.jpg' />
            <ProductItem title='Migado' desc='Pan y galletas remojadas en chocolate' price='$7.000' img='data:image/jpeg;base64,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' />
        </div>
    )
}
const Almuerzos = () => {
    return (
        <div className='container'>
            <ReturnBtn/>
            <h1>Almuerzos</h1>
            <ProductItem title='Bandeja paisa' desc='Plato tipico colombiano con carne, arroz, huevo, chicharron, aguacate y tajadas de maduro' price='$16.000' img='https://cdn.colombia.com/gastronomia/2011/08/02/bandeja-paisa-1616.gif' />
            <ProductItem title='Mondongo' desc='Delicioso mondongo colombiano' price='$12.000' img='https://images.aws.nestle.recipes/original/ecbd41cfa335aaf5f2fd95cca26d04ce_mondongo.jpeg' />
            <ProductItem title='Sudado' desc='Carne, papa y yuca cocinada' price='$9.000' img='https://vivirenelpoblado.com/wp-content/uploads/2020/07/sudado-comida-coombiana.jpg' />
            <ProductItem title='Sancocho' desc='Caldo con carne, papa y mazorca' price='$9.000' img='https://www.comedera.com/wp-content/uploads/2021/09/sancocho-colombiano.jpg' />
            <ProductItem title='Corrientazo' desc='Tipico almuerzo colombiano' price='$11.000' img='https://images.canal1.com.co/uploads/2018/01/Corrientazo.jpg' />
            <ProductItem title='Ejecutivo' desc='Carne o Pollo, Arroz, Ensalada, Papas y sopa del dia' price='$15.000' img='https://zonacaptiva.com/wp-content/uploads/2022/07/Diseno-sin-titulo-2022-07-14T121021.096.jpg' />
        </div>
    )
}
const Bebidas = () => {
    return (
        <div className='container'>
            <ReturnBtn/>
            <h1>Bebidas</h1>
            <ProductItem title='Jugos Naturales' desc='Limonada Natural, Jugos en agua y leche' price='$5.000' img='https://k-listo.com/wp-content/uploads/2020/04/JUGOS_NATURALES.jpg' />
            <ProductItem title='Gaseosas' desc='Gaseosas de la marca Postobon' price='$4.000' img='https://mf.b37mrtl.ru/actualidad/public_images/2016.02/article/56afe82bc46188be6a8b4606.jpg' />
            <ProductItem title='Milo' desc='Milo frio o caliente' price='$3.000' img='https://sanchopaisa.com/wp-content/uploads/2020/08/milo-caliente.png' />
            <ProductItem title='Chocolate' desc='Chocolate caliente' price='$3.000' img='data:image/jpeg;base64,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' />
            <ProductItem title='Avena' desc='Avena fresa fria o caliente' price='$3.000' img='https://d36fw6y2wq3bat.cloudfront.net/recipes/bebida-de-avena/900/bebida-de-avena_version_1652869120.jpg' />
            <ProductItem title='Cervezas' desc='Cerveza Aguila, Pilsen, Andina, Corona' price='$4.000' img='https://pidomibat.co/uploads/subgroup/f4060be9105942d1af05e19e40991116/cervezas.jpg' />
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