import { useRegisterFormContext } from "../../hook/useRegisterFormContext"
import './ProfileCard.css'

export const ProfileCard = () => {
  const{state} = useRegisterFormContext()

  return (
    <section>
      <div className="profile-card">
       {
          <>

          {
            !state.resumenPago && (
                <>
                    <h3 className="text-makarzi">Perfil de usuario</h3>
                    <hr/>
                    <h4>Información Personal</h4>
                      {
                        state.user.nombre !=='' && 
                        (
                          <>
                              <p><span>Nombre:</span> {state.user.nombre} {state.user.apellido}</p> 
                              <p><span>Correo:</span> {state.user.email}</p>
                              <p><span>Telefono:</span> {state.user.telefono}</p>
                          </> 
                        ) 
                      } 
                      <h4>Mesa</h4>
                      {state.mesa.hora !== '' &&
                          <>
                              <p><span>Ocasion:</span> {state.mesa.ocasion}</p>
                              <p><span>Fecha:</span> {state.mesa.fecha.toLocaleDateString()} {state.mesa.hora}</p>
                              <p><span>Numero de Invitados:</span> {state.mesa.invitados}</p>
                          </>
                      } 
                </>
            )
          }

          {

            state.resumenPago && 
            (
              <>
                <h3 className="text-makarzi">Detalle de pago</h3>
                <hr/>
                <p><span>Cargo de reservación: </span>USD 30</p>
                <p><span>Numero de invitados: </span>{state.mesa.invitados || 0}</p>
                <p><span>Subtotal: </span> USD {Number(state.mesa.invitados) * 30}</p>
                <p><span>Impuesto 15%: </span> USD {Number(state.mesa.invitados) * 30 * 0.15}</p>
                <hr/>
                <p><span>Totat a pagar:</span> USD {(Number(state.mesa.invitados) * 30) + Number(state.mesa.invitados) * 30 * 0.15}</p>  
                <hr/>
                <h3 className="text-makarzi">Perfil de usuario</h3>
                    <hr/>
                    <h4>Información Personal</h4>
                      {
                        state.user.nombre !=='' && 
                        (
                          <>
                              <p><span>Nombre:</span> {state.user.nombre} {state.user.apellido}</p> 
                              <p><span>Correo:</span> {state.user.email}</p>
                              <p><span>Telefono:</span> {state.user.telefono}</p>
                          </> 
                        ) 
                      } 
                      <h4>Mesa</h4>
                      {state.mesa.hora !== '' &&
                          <>
                              <p><span>Ocasion:</span> {state.mesa.ocasion}</p>
                              <p><span>Fecha:</span> {state.mesa.fecha.toLocaleDateString()} {state.mesa.hora}</p>
                              <p><span>Numero de Invitados:</span> {state.mesa.invitados}</p>
                          </>
                      }   
              </>
            )

          }

          </>
        }      
      </div>
    </section>
  )
}
