import { Link } from 'react-router';
import './ErrorPageNotFound.css'
import { IoSadSharp } from "react-icons/io5";

export const ErrorPageNotFound = () => {
  return (
    <section className='ErrorPageNotFound'>
        <div className='contenedor-error-page-not-found'>
                <h2>404 Page Not found</h2>
                <IoSadSharp className='icon-sad'/>
                <Link to={'/'}>
                    <button className='boton-error-inicio'>Ir al inicio</button>
                </Link>
        </div>
    </section>
  )
}
