import mesero from "../../../assets/restauranfood.jpg";
import "./Presentacion.css";
import {Link } from "react-router";

export const Presentacion = () => {
  return (
    <section className="presentacion" id="presentacion">
        <div className="contenedor-presentacion">
            <article className="contenedor-descripcion-button">  
                <div className="contenedor-descripcion">
                <h1 className="titulo text-makarzi">Little Lemon</h1>
                <h4 className="subtitulo-1 text-karla">Chicago</h4>
                <p className="subtitulo-2 text-karla">
                    Somos un restaurante mediterráneo de propiedad familiar, centrado
                    en recetas tradicionales servidas con un toque moderno.
                </p>
                </div>
                
                <Link to={'/reservacion-mesa'}>
                    <button className="boton-reservar-mesa text-karla">
                        Reservar Mesa
                    </button>
                </Link>
                
            </article>

            <figure className="contenedor-imagen">
                <img src={mesero} alt="mesero" className="imagen-mesero" loading="lazy"/>
            </figure>
        </div>
  </section>
  )
}
