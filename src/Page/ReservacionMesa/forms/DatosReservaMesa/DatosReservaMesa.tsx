import { zodResolver } from '@hookform/resolvers/zod';
import { SelectField } from '../../../../components/SelectField/SelectField';
import { zodFormValuesReservaMesa, zodSchemaReservaMesa } from '../../zod/zod';
import { useForm, Path } from 'react-hook-form';
import { DatePickerField } from '../../../../components/DataPickerField/DataPickerField';
import './DatosReservaMesa.css'
import { InputButtonPrimary } from '../../../../components';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useRegisterFormContext } from '../../hook/useRegisterFormContext';
import { useValidacionNavegationMesa } from '../../hook/useValidacionNavegationMesa';

const dataSelectOcacion: {
    label: string;
    name: Path<zodFormValuesReservaMesa>;
    dataOption: { display: string; value: string | number }[];
} = {
    label: 'Ocasión',
    name: 'ocasion',
    dataOption:[
                { display: 'Seleccionar opción', value: '' }, // Opción placeholder
                {display: 'Cumpleaños', value: 'Cumpleaños'},
                {display: 'Aniversario', value: 'Aniversario'}
               ]
}


const dataSelectHora: {
    label: string;
    name: Path<zodFormValuesReservaMesa>;
    dataOption: { display: string; value: string | number }[];
} = {
    label: 'Hora',
    name: 'hora',
    dataOption:[
                { display: 'Seleccionar opción', value: '' }, // Opción placeholder
                { display: '10:00', value: '10:00' },
                { display: '11:00', value: '11:00' },
                { display: '12:00', value: '12:00' },
                { display: '13:00', value: '13:00' },
                { display: '14:00', value: '14:00' },
                { display: '15:00', value: '15:00' },
                { display: '16:00', value: '16:00' },
                { display: '17:00', value: '17:00' },
                { display: '18:00', value: '18:00' },
                { display: '19:00', value: '19:00' },
                { display: '20:00', value: '20:00' }
               ]
}



const dataSelectInvitados: {
    label: string;
    name: Path<zodFormValuesReservaMesa>;
    dataOption: { display: string; value: string | number }[];
} = {
    label: 'Número de invitados',
    name: 'invitados',
    dataOption:[
                { display: 'Seleccionar opción', value: '' }, // Opción placeholder
                {display: '1', value: 1},
                {display: '2', value: 2},
                {display: '3', value: 3},
                {display: '4', value: 4},
                {display: '5', value: 5}
               ]
}






export const DatosReservaMesa = () => {

    
    const{state, dispatch} = useRegisterFormContext()          //Inicializando el useContext, el cual contiene la informacion del formulario y el estado
    const navigate = useNavigate();                            //Hook de navegacion
    const validacion = useValidacionNavegationMesa()          //Hook para validar si el usuario lleno todos los campos del formulario de informacion personal (pagina anterior) y evita que entre a este formulario 
    const [initialized, setInitialized] = useState(false);   // Control de inicialización

    //--------------------Validacion de navegacion----------------------
    
    //Si el usuario no lleno el formulario anterior lo devuelve al inicio
    useEffect(()=>{
        if(initialized && !validacion){
            navigate('/Reservacion-Mesa')
          }
    },[validacion, navigate, initialized])

    
    useEffect(() => {
        setInitialized(true);       // Marcamos la inicialización como completa después del primer render
    }, []);

    //------------------------------------------------


      //Configura el estado de porcentaje en 0 del useContext
      useEffect(() => {
        dispatch({ type: 'CHANGE_PERCENT', data: 33.3})
        dispatch({type:'SET_RESUMEN_PAGO', data: false})
      }, [dispatch]);
    


    //inicianlizando - React hook form 
      const { control, handleSubmit, formState: { isValid, errors } } = useForm<zodFormValuesReservaMesa>({
        resolver: zodResolver(zodSchemaReservaMesa),
         mode: "onBlur",
        defaultValues: {             // Valores por defecto 
            ocasion: state.mesa.ocasion || '',  
            fecha: state.mesa.fecha || undefined,               
            hora: state.mesa.hora || '',          
            invitados: state.mesa.invitados            
          }
      });


       //Submit
       const onSubmit2 = (values:zodFormValuesReservaMesa) => {

         if (isValid) {
              dispatch({ type: 'SET_RESERVAR_MESA', data: {
                                                      ocasion: values.ocasion, 
                                                      fecha: values.fecha,
                                                      hora: values.hora,
                                                      invitados: values.invitados 
                                                     }
                       });

              dispatch({type:'SET_RESUMEN_PAGO', data: true})          
              navigate('/Reservacion-Mesa/DetallePago');
         }
       }
      

  return (
        <>
               <section className='contenedor-DatosReservaMesa'>    
                        <form onSubmit={handleSubmit(onSubmit2)}>  
                            <fieldset className="formulario-fieldset">
                            <legend className="formulario-legend text-makarzi"><h2>Reservar Mesa</h2></legend> 

                            <div className='contenedor-input-form'>    
  
                                 <SelectField 
                                    label={dataSelectOcacion.label}   
                                    dataOption={dataSelectOcacion.dataOption}
                                    name={dataSelectOcacion.name}
                                    control={control}
                                    errors={errors}
                                    required={true}     
                                   />
                          
                           


                                <div className='contenedor-reservamesa-fecha-hora'>                               
                                     <DatePickerField
                                            name="fecha"
                                            control={control}
                                            label="Fecha de reserva"
                                            errors={errors}
                                            required={true} 
                                    />     
 
                                    <SelectField 
                                        label={dataSelectHora.label}   
                                        dataOption={dataSelectHora.dataOption}
                                        name={dataSelectHora.name}
                                        control={control}
                                        errors={errors}
                                        required={true}   
                                    />  
                                   
                                
                                </div>   


                                <SelectField 
                                    label={dataSelectInvitados.label}   
                                    dataOption={dataSelectInvitados.dataOption}
                                    name={dataSelectInvitados.name}
                                    control={control}
                                    errors={errors}
                                    required={true}     
                                />   
                                
                            </div> 

                            <div style={{display:'flex', flexFlow: 'row nowrap', justifyContent: 'space-between'}}>
                              <Link to={'/reservacion-mesa/'}>
                                  <InputButtonPrimary name="Atras" backgroundColor='#f5a524' hoverColor={'#f5a5248c'}/>
                              </Link>
                              <InputButtonPrimary name="Siguiente"/>
                            </div>
                            
                             </fieldset>      
                        </form> 
               </section> 


        </>
  )
}
