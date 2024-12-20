import { useEffect, useState } from "react"
import { useRegisterFormContext } from "./useRegisterFormContext"


//Custom hook para validar si el usuario ha llenado los datos del formulario de informacion de usuario y mesa
//Utilizado para habilitar o deshabilitar la navegacion en la pagina de metodo de pago
export const useValidacionNavegationCard = ()=>{
  
    const[validacion, setValidacion] = useState(false)
    const{state} = useRegisterFormContext() 
  
    useEffect(()=>{
      
      if(state.user.nombre 
          && state.user.apellido 
          && state.user.email 
          && state.user.telefono 
          && state.mesa.fecha
          && state.mesa.hora
          && state.mesa.ocasion
          && state.mesa.invitados
        ){
        setValidacion(true)
      }
      
    }, [state.user.nombre, 
        state.user.apellido, 
        state.user.email, 
        state.user.telefono,
        state.mesa.fecha,
        state.mesa.hora,
         state.mesa.ocasion,
        state.mesa.invitados])
  
      return validacion
  }