import './CardTestimonio.css'
import { StarRating } from './Estrellas'




interface Props{
  img: string,
  alt: string,
  nombre:string,
  cita:string,
  cantidadEstrellas: number
}

export const CardTestimonio = ({img, alt, nombre, cita, cantidadEstrellas}:Props) => {
  return (
    <article className='card-testimonios'>
        <figure className='contenedor-testimonio-img-cita'>
            <div className='contenedor-testimonio-img-titulo'>
                <img className='imagen-testimonio' src={img} alt={alt} loading="lazy"/>
                <div>
                      <h4>{nombre}</h4>
                      <StarRating quantity={cantidadEstrellas}/> 
                </div>
                
            </div>
            <figcaption className='contenedor-cita'>
                <blockquote className='cita'>{cita}</blockquote>       
            </figcaption>
        </figure>
    </article>
  )
}
