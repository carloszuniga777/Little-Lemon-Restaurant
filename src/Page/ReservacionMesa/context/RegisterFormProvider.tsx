import { ReactNode, useReducer } from "react";
import { RegFormContext } from './RegisterFormContext';
import { State, Action } from "../interfaces/interfaces";



//2. Se crea primero el provider, para controlar el estado se hace uso del useReducer




//2.2 Creacion del reducer para manejar el estado del contex

const reducer = (state: State, action: Action): State => {

  switch(action.type){
    case 'SET_DATA_USER':{
      return {...state, user:{ ...action.data}}   
    }
    case 'SET_RESERVAR_MESA':{
       return {...state, mesa:{...action.data}} 
    }
    case 'SET_DATA_CARD':{
      return {...state, card:{ ...action.data}}   
    }
    case 'SET_RESUMEN_PAGO':{
      return {...state, resumenPago: action.data}
    } 
    case 'CHANGE_PERCENT':{
      return{...state, percent: action.data}
    }
    default:
        return state;
  }
} 


//2.3 Inicializacion del reducer
const initialState: State = {
  user: {
    nombre: '',
    apellido: '',
    telefono: '',
    email: ''
},
mesa: {
  ocasion: '',
  fecha: null,
  hora: '',
  invitados: ''
},
card: {
    numeroTarjeta: '',
    nombreTarjeta: '',
    expirationDate: '',
    cvv: ''
},
  resumenPago: false,
  percent: 0
};




//2.1 Creacion del provider

interface Props {
  children: ReactNode;
}

export const RegisterFormProvider: React.FC<Props> = ({children}) => {
    
  //Se inicializa el reducer, el cual manejara el estado del context
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <RegFormContext.Provider value={{state, dispatch}}>
      {
        children
      }
    </RegFormContext.Provider>
  )
}


