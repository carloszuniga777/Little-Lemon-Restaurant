import { useEffect, useState } from "react"
import { useRegisterFormContext } from "./useRegisterFormContext"

//Custom hook para validar si el usuario ha llenado los datos del formulario de informacion de usuario
//Utilizado para habilitar o deshabilitar la navegacion en la pagina de mesa

export const useValidacionNavegationMesa = ()=>{
  
    const[validacion, setValidacion] = useState(false)
    const{state} = useRegisterFormContext() 
  
    useEffect(()=>{
      
      if(state.user.nombre 
          && state.user.apellido 
          && state.user.email 
          && state.user.telefono ){
        setValidacion(true)
      }
      
    }, [state.user.nombre, 
        state.user.apellido, 
        state.user.email, 
        state.user.telefono])
  
      return validacion
  }