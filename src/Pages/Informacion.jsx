import React from 'react'
import bgPlatos from '../Assets/InfoImg/bg-platos.jpg'
import Footer from '../Components/Footer'

const Informacion = () => {
  return (
    <div className='container'>
      <h2>Información</h2>
      <p>¡Bienvenido al delicioso mundo de La Cocina Colombiana! Aquí, cada bocado es una muestra del esfuerzo y dedicación de las personas detrás de cada plato. Nuestro restaurante es un homenaje a la riqueza de la gastronomía colombiana, y nuestro objetivo es llevar a cada mesa el auténtico sabor de nuestras tradiciones culinarias.
      <div className='info__img' style={{
        backgroundImage: `url('${bgPlatos}')`
      }}></div>
      <p>Al entrar, te transportarás a un ambiente acogedor y vibrante, decorado con colores vivos y artesanías típicas de nuestro país. El aroma de nuestras comidas te invitará a tomar asiento y dejarte llevar por una experiencia gastronómica única.</p>
      <p>Nuestro menú está lleno de platos tradicionales como el ajiaco, el sancocho, el arroz con pollo y la bandeja paisa. Todos nuestros ingredientes son frescos y cuidadosamente seleccionados para asegurar la mejor calidad en cada plato.</p>
      <p>Pero lo que realmente hace especial a La Cocina Colombiana es el amor y dedicación que ponemos en cada preparación. Cada plato es cocinado con pasión y compromiso para asegurarnos de que cada bocado sea una muestra del sabor auténtico de Colombia.</p>
      <p>Así que ven y déjate seducir por la calidez de nuestro restaurante y el sabor único de nuestras comidas. En La Cocina Colombiana, te esperamos con los brazos abiertos y un plato de delicioso sabor.</p></p>
    </div>
  )
}

export default Informacion