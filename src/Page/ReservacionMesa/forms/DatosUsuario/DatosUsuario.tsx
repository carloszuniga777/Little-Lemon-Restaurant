import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useRegisterFormContext } from "../../hook/useRegisterFormContext";
import { useEffect } from "react";
import { zodSchemaInfoUsuario, zodFormValuesInfoUsuario } from '../../zod/zod';
import { zodResolver } from "@hookform/resolvers/zod";
import './DatosUsuario.css'
import { InputButtonPrimary, InputField } from "../../../../components";


const campos: { label: string, id: keyof zodFormValuesInfoUsuario, type: string }[] =  [
  {
    label:"Nombre",
    id:"nombre",
    type:"text"
  },
  { 
    label:"Apellido",
    id:"apellido",
    type:"text"
  },
  {
    label:"Correo",
    id:"email",
    type:"correo"
  },
  {
    label:"Telefono",
    id:"telefono",
    type:"number"
  }
]




export const DatosUsusario = () => {

  const{state, dispatch} = useRegisterFormContext()          //Inicializando el useContext
  const navigate = useNavigate();
  

  //Configura el estado de porcentaje en 0 del useContext
  useEffect(() => {
    dispatch({ type: 'CHANGE_PERCENT', data: 0 })
    dispatch({type:'SET_RESUMEN_PAGO', data: false})   
  }, [dispatch]);


 //inicianlizando - React hook form 
  const { register, handleSubmit, formState: { isValid, errors } } = useForm<zodFormValuesInfoUsuario>({
    resolver: zodResolver(zodSchemaInfoUsuario),
    mode: "onBlur",
    defaultValues: {             // Valores por defecto 
      nombre: state.user.nombre || '',  
      apellido: state.user.apellido || '',               
      email: state.user.email || '',          
      telefono: state.user.telefono            
    }
  });
  
  //Submit
  const onSubmit = (values:zodFormValuesInfoUsuario) => {
    if (isValid) {
        dispatch({ type: 'SET_DATA_USER', data: {nombre: values.nombre, 
                                                 apellido: values.apellido,
                                                 email: values.email,
                                                 telefono: values.telefono, 
                                                }
                  });       
        navigate('DetalleReserva');
    }
  }


  return (
    <section className="contenedor-datos-usuario">
        <form onSubmit={handleSubmit(onSubmit)} className="formulario">
          <fieldset className="formulario-fieldset">
            <legend className="formulario-legend text-makarzi"><h2>Información Personal</h2></legend>

          {
            campos.map(item =>(
              <InputField
                key={item.id}
                label={item.label}
                id={item.id}
                type={item.type}
                register={register}
                errors={errors}
                required={true}
                valueProp={state.user[item.id]}
              />
            ))
          }
          
          <InputButtonPrimary name="Siguiente"/>

          </fieldset>      
        </form> 
  </section>
  )
}
