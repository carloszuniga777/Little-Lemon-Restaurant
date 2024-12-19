import { useForm } from 'react-hook-form';
import { InputButtonPrimary, InputField } from '../../../../components';
import { zodFormValuesInfoTarjeta, zodSchemaInfoTarjeta } from '../../zod/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router';
import { useRegisterFormContext } from '../../hook/useRegisterFormContext';
import { useEffect } from 'react';
import './DatosTarjeta.css'


const campos1: { label: string, id: keyof zodFormValuesInfoTarjeta, type: string }[] =  [
  {
    label:"Nombre de la tarjeta",
    id:"nombreTarjeta",
    type:"text"
  },
  { 
    label:"Número de la tajera",
    id:"numeroTarjeta",
    type:"number"
  },
]



const campos2: { label: string, id: keyof zodFormValuesInfoTarjeta, type: string }[] =  [
  {
    label:"Expiracion de la tarjeta",
    id:"expirationDate",
    type:"correo"
  },
  {
    label:"CVV",
    id:"cvv",
    type:"number"
  }
]


export const DatosTarjeta = () => {

    const{dispatch} = useRegisterFormContext()          //Inicializando el useContext
    const navigate = useNavigate();
  
    

      //Configura el estado de porcentaje en 0 del useContext
      useEffect(() => {
        dispatch({ type: 'CHANGE_PERCENT', data: 66 })
        dispatch({type:'SET_RESUMEN_PAGO', data: true})  
      }, [dispatch]);
    

    //inicianlizando - React hook form 
      const { register, handleSubmit, formState: { isValid, errors } } = useForm<zodFormValuesInfoTarjeta>({
        resolver: zodResolver(zodSchemaInfoTarjeta),
        mode: "onBlur"
      });
  
      
      //Submit
      const onSubmit = (values:zodFormValuesInfoTarjeta) => {
        if (isValid) {
            dispatch({ type: 'SET_DATA_CARD', data: {numeroTarjeta: values.numeroTarjeta, 
                                                     nombreTarjeta: values.numeroTarjeta,
                                                     expirationDate: values.expirationDate,
                                                     cvv: values.cvv 
                                                    }
                      });
            navigate('/Reservacion-Mesa');
        }
      }
    


  return (
   <section className='contenedor-DatosTarjeta'>
        <form onSubmit={handleSubmit(onSubmit)} className="formulario">
                <fieldset className="formulario-fieldset">
                    <legend className="formulario-legend text-makarzi"><h2>Metodo de pago</h2></legend>
                        
                    {
                        campos1.map(item =>(
                            <InputField
                                key={item.id}
                                label={item.label}
                                id={item.id}
                                type={item.type}
                                register={register}
                                errors={errors}
                                required={true}
                            />
                    ))
                    }
                     
                    <div className='contenedor-cvv-expiraciondate'>
                     {
                        campos2.map(item =>(
                                <InputField
                                    key={item.id}
                                    label={item.label}
                                    id={item.id}
                                    type={item.type}
                                    register={register}
                                    errors={errors}
                                    required={true}
                                />
                        ))
                      }

                     </div>
    
                    
                     <div style={{display:'flex', flexFlow: 'row nowrap', justifyContent: 'space-between'}}>
                        <Link to={'/reservacion-mesa/DetalleReserva'}>
                            <InputButtonPrimary name="Atras" backgroundColor='#f5a524' hoverColor={'#f5a5248c'}/>
                        </Link>
                        <InputButtonPrimary name="Completar Reserva"/>
                      </div>
                               
                
                </fieldset>
        </form>
   </section>
  )
}
