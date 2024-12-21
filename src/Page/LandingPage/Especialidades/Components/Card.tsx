import iconBicicleta from '../../../../assets/Icon-1.jpg';
import './Card.css'

interface PropsCard {
    img: string;
    alt: string;
    title: string;
    precio: string;
    descripcion: string;
  }
  
 export const Card = ({ img, alt, title, precio, descripcion }: PropsCard) => {
    return (
      <article className="card-especialidades text-karla">
        <figure className="contenedor-especialidades-image-descripcion">
          <img src={img} alt={alt} className="imagen-especialidades" />
          <figcaption className="contenedor-descripcion-especialidades">
            <div className="contenedor-especialidades-titulo-precio">
              <h4>{title}</h4>
              <p>{precio}</p>
            </div>
            <p className="descripcion-especialidades">{descripcion}</p>
            <p className="delivery">Ordenar por Delivery 
                <img src={iconBicicleta} alt="Delivery" className="icon-delivery" loading="lazy"/>
            </p>
          </figcaption>
        </figure>
      </article>
    );
  };