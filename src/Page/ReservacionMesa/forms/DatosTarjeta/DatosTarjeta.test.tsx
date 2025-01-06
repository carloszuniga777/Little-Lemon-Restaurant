import { MemoryRouter } from "react-router";
import { RegisterFormProvider } from "../../context/RegisterFormProvider";
import { DatosTarjeta } from "./DatosTarjeta";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('DatosTarjeta', () =>{

    // Signfica que se va a renderizar una sola vez en cada test, es decir, antes de cada test
    beforeEach(() =>{
        //Renderiza el componente DatosTarjeta en el dom de vitest, este formulario esta envuelto por el contexto RegisterFormProvider y el router MemoryRouter para la navegacion
        render(
            <MemoryRouter>
              <RegisterFormProvider>
                <DatosTarjeta />
              </RegisterFormProvider>
            </MemoryRouter>
          );
    })


    //test 1
        test('Deberia renderizar el formulario DatosTarjeta', ()=>{
               
            //Obtenemos los elementos que estan en el formulario de DatosReservaMesa
            const inputNombreTarjeta = screen.getByText(/Nombre de la tarjeta/i)
            const inputNumeroTarjeta = screen.getByText(/Número de la tajera/i)
            const inputExpiracion = screen.getByText(/Expiracion de la tarjeta/i)
            const inputCVV = screen.getByLabelText(/CVV/i);
    
            //Esperamos que los elementos esten en el dom de vitest
             expect(inputNombreTarjeta).toBeInTheDocument()
             expect(inputNumeroTarjeta).toBeInTheDocument()
             expect(inputExpiracion).toBeInTheDocument()
             expect(inputCVV).toBeInTheDocument()   
        })


        //test 2
        test('Deberia cambiar los valores de los elementos del formulario DatosTarjeta', async()=>{

            
            //-----------Obtenemos los elementos que estan en el formulario de DatosReservaMesa ------

            const inputNombreTarjeta = screen.getByLabelText(/Nombre de la tarjeta/i) as HTMLInputElement
            const inputNumeroTarjeta = screen.getByLabelText(/Número de la tajera/i) as HTMLInputElement
            const inputExpiracion = screen.getByLabelText(/Expiracion de la tarjeta/i) as HTMLInputElement
            const inputCVV = screen.getByLabelText(/CVV/i) as HTMLInputElement


            //-----Simulamos el cambio de los valores de los elementos del formulario -----------
            userEvent.type(inputNombreTarjeta, 'Juan Perez')
            fireEvent.change(inputNumeroTarjeta, { target: { value: '1234567890123456' } })
            fireEvent.change(inputExpiracion, { target: { value:'01/25'}})
            fireEvent.change(inputCVV, { target: { value: '123' } })
      

            //----Esperamos que los valores de los elementos del formulario hayan cambiado y verifica que los valores sean los esperados-------

             await waitFor(() => {
                            expect(inputNombreTarjeta.value).not.toBe('')
                            expect(inputNumeroTarjeta.value.length).toBe(16)
                            expect(inputExpiracion.value).toBe('01/25')
                            expect(inputExpiracion.value).toMatch(/^([0][1-9]|1[0-2])\/\d{2}$/);
                            expect(inputCVV.value).toBe('123')
                            expect(inputCVV.value.length).toBe(3)
              });   

            //--------------------------------------------------------------------------------


        })




})