import { Outlet } from 'react-router'
import { RegisterFormProvider } from './context/RegisterFormProvider';
import { Progresbar } from './components/Progresbar';
import './ReservacionMesa.css'
import { ProfileCard } from './forms/ProfileCard/ProfileCard';
import { ReservaExitosa } from './forms/ReservaExitosa/ReservaExitosa';
import { useValidacionShowRegion } from './hook/useValidacionShowRegion';




const RenderReservacionMesa =()=>{

  const status = useValidacionShowRegion()   //Se valida si el usuario lleno todo el formulario, en caso de llenarlo todo se muestra el mensaje de reserva exitosa de lo contrario solo se muestra el formulario
  
  return(
            <main className='contenedor-reservacion-mesa'>
              <div style={{paddingLeft:'3%', paddingRight: '5%'}}>
                <Progresbar/>
              </div>
            {
                status 
                    ? (<ReservaExitosa/>) 
                    :  (   
                          <>
                            <div className='contenedor-reservacion-mesa-formulario'> 
                                <Outlet/>
                                <ProfileCard/>
                            </div>
                          
                          </>
                      )
            }
            </main>
  )

}




export const ReservacionMesa = () => {
 
  return (
    <>
      <RegisterFormProvider>
        <RenderReservacionMesa/>
       </RegisterFormProvider>
    </>
  )
}
