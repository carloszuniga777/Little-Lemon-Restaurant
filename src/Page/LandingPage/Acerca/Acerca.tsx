import chef from '../../../assets/chef.jpg'
import restaurant from '../../../assets/restaurant.jpg'

import './Acerca.css'

export const Acerca = () => {
  return (
    <section className="acerca" id='acerca'>
        <article className="contenedor-acerca">
            <div className="contenedor-acerca-titulo-descripcion">
                <h2>Little Lemon</h2>
                <p>Nuestro restaurante es la combinación perfecta de sabores excepcionales, ambiente acogedor y servicio impecable. Cada plato está elaborado con ingredientes frescos y un toque de creatividad que lo hace único. Aquí, cada visita se convierte en una experiencia memorable que te invita a volver una y otra vez. ¡Descubre por qué somos la mejor opción para disfrutar de la buena comida!</p>
            </div>
            <figure className="contenedor-acerca-imagen">
                <img src={chef} alt="Chef" className="image image-top"/>
                <img src={restaurant} alt="Restaurant" className="image image-bottom"/>
            </figure>
        </article>
    </section>
  )
}
