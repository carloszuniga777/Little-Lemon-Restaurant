import './App.css'
import { Routes, Route } from "react-router"
import {LandingPage, Header, ReservacionMesa, ErrorPageNotFound } from './Page'
import { DatosReservaMesa, DatosUsusario } from './Page/ReservacionMesa'
import { DatosTarjeta } from './Page/ReservacionMesa/forms/DatosTarjeta/DatosTarjeta'


function App() {
  return (
    <>
      <div className='container'>
              <Header/>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Reservacion-Mesa" element={<ReservacionMesa/>}>
                    <Route index element={ <DatosUsusario/> }/>                        {/**Index: La ruta con index se utiliza para especificar el componente que se renderiza por defecto cuando el usuario accede a la ruta padre (/Reservacion-Mesa). */}
                    <Route path='DetalleReserva' element={ <DatosReservaMesa/> }/>
                    <Route path='DetallePago' element={ <DatosTarjeta/> }/>
                </Route>



                <Route path='*' element={<ErrorPageNotFound/>} />
              </Routes>
      </div>
    </>
  )
}

export default App
