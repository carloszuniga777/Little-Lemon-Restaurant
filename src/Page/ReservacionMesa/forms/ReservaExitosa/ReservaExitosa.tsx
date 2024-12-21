import { FaCheck } from "react-icons/fa";
import { useRegisterFormContext } from "../../hook/useRegisterFormContext";
import { Link } from "react-router";
import './ReservaExitosa.css'


export const ReservaExitosa = () => {

  const{state} = useRegisterFormContext()

  //Funcion para generar id aleatorio
  function generarIdNumerico(longitud = 8) {
    let id = '';
    for (let i = 0; i < longitud; i++) {
      const numeroAleatorio = Math.floor(Math.random() * 10); // Genera un número entre 0 y 9
      id += numeroAleatorio;
    }
    return id;
  }


  // Función para formatear la fecha en formato dd/mm/yyyy
  const formatearFecha = (fecha:Date) => {
    return fecha.toLocaleDateString('es-ES');
  };



  return (
    <section>
      <div className="contenedor-reservamesaexitosa">
          <h2 className="titulo-ReservaExitosa text-makarzi">Reserva realizada Exitosamete</h2> 
          <FaCheck className='icon-check-reservaExitosa'/>
          <div className="contenedor-reservaexistosa-descripcion text-karla">
              <p>¡Muchas felicidades! Su reserva ha sido realizada de manera exitosamente</p>
              <p>Se realizo la reserva con el id: <span>{generarIdNumerico(5)}</span> para el dia <span>{formatearFecha(new Date(state.mesa.fecha))} {state.mesa.hora}</span></p>
          </div>
         <Link to={'/'}> <button className="text-karla">Ir al inicio</button></Link>
      </div>
    </section>
  )
}
