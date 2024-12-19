import { useEffect, useState } from 'react';
import { useRegisterFormContext } from './useRegisterFormContext';


//Custom Hook, que realiza validacion, si el usuario lleno todo el formulario muestra el mesanje de compra exitosa, de lo contrario muestra el formulario
export const useValidacionShowRegion=()=>{
  const{state, dispatch} = useRegisterFormContext()
  const [validacion, setValidacion] = useState<boolean>(false)

  useEffect(()=>{

    if (state.user.nombre 
      && state.user.apellido 
      && state.user.email
      && state.user.telefono
      && state.mesa.fecha
      && state.mesa.hora
      && state.mesa.invitados
      && state.mesa.ocasion
      && state.card.nombreTarjeta
      && state.card.numeroTarjeta
      && state.card.cvv
      && state.card.expirationDate){
        dispatch({ type: 'CHANGE_PERCENT', data: 100 })
        setValidacion(true)  
      }

  }, [
    state.user.nombre,
    state.user.apellido,
    state.user.email,
    state.user.telefono,
    state.mesa.fecha,
    state.mesa.hora,
    state.mesa.invitados,
    state.mesa.ocasion,
    state.card.nombreTarjeta,
    state.card.numeroTarjeta,
    state.card.cvv,
    state.card.expirationDate,
    dispatch,
  ])

   return validacion    
}
