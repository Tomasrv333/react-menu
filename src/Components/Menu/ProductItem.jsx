import React from 'react'

const ProductItem = (props) => {
  return (
    <div className='product-item'>
        <div className='product-item__img' style={{
          backgroundImage: `url('${props.img}')`
        }}></div>
        <div className='product-item__info'>
            <h3 className='info__title'>{props.title}</h3>
            <p className='info__desc'>{props.desc}</p>
            <span className='info__price'>{props.price}</span>
        </div>
    </div>
  )
}

export default ProductItem