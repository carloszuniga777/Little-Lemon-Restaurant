import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { DatosReservaMesa } from "./DatosReservaMesa";
import { RegisterFormProvider } from "../../context/RegisterFormProvider";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";



describe("DatosReservaMesa",()=>{
    
    // Signfica que se va a renderizar una sola vez en cada test, es decir, antes de cada test
    beforeEach(() =>{
        //Renderiza el componente DatosReservaMesa en el dom de vitest, este formulario esta envuelto por el contexto RegisterFormProvider y el router MemoryRouter para la navegacion
        render(
            <MemoryRouter>
              <RegisterFormProvider>
                <DatosReservaMesa />
              </RegisterFormProvider>
            </MemoryRouter>
          );
    })


    //test 1
    test('Deberia renderizar el formulario DatosReservaMesa', ()=>{
           
        //Obtenemos los elementos que estan en el formulario de DatosReservaMesa
        const selectOcacion = screen.getByText(/Ocasión/i)
        const selectHora = screen.getByText(/hora/i)
        const selectInvitados = screen.getByText(/Número de invitados/i)
        const calendarButton = screen.getByLabelText(/choose date/i);

        //Esperamos que los elementos esten en el dom de vitest
         expect(selectOcacion).toBeInTheDocument()
         expect(selectHora).toBeInTheDocument()
         expect(selectInvitados).toBeInTheDocument()
         expect(calendarButton).toBeInTheDocument()   
    })


    //test 2    
    test('Deberia cambiar los valores de los elementos del formulario DatosReservaMesa', async()=>{
        
        //-------------Obtenemos los elementos que estan en el formulario de DatosReservaMesa----------
     
        const selectOcasion =  screen.getByLabelText(/Ocasión/i) as HTMLSelectElement
        //const selectHora =  screen.getByLabelText(/hora/i) as HTMLSelectElement
        const selectInvitados = screen.getByLabelText(/Número de invitados/i) as HTMLSelectElement
        const calendarButton = screen.getByLabelText(/choose date/i) as HTMLInputElement

   
        //-----Simulamos el cambio de los valores de los elementos del formulario -----------

        /*
           userEvent: Es preferible usar userEvent para simular interacciones de usuario más realistas. Esto es especialmente útil para componentes como select.
                      Por ejemplo, si se usa userEvent.type() para digitar en un campo de texto, se disparan una serie de eventos que simulan la acción de digitar. 
           
           fireEvent: Es una opción más básica que permite disparar eventos DOM simples, como click, change, mouseover, etc. Es útil para testar la mayor parte de las interacciones.
           Se puede usar fireEvent en casos específicos, como cuando algunas interacciones de usuario aún no están implementadas en userEvent. Por ejemplo, si se quiere probar que un input no ejecuta la función onChange si no tiene un estado de focused, se debe usar fireEvent para disparar únicamente ese evento. 
        */

        //fireEvent.change(selectOcasion, { target: { value: 'Cumpleaños' } })
        //fireEvent.change(selectHora, { target: { value: '10:00' } })
        //fireEvent.change(selectInvitados, { target: { value: '1' } })   

        userEvent.selectOptions(selectOcasion, 'Cumpleaños');           // Cambiar el valor del select
        userEvent.selectOptions(selectInvitados, '1');                  // Cambiar el valor del select
        fireEvent.change(calendarButton, { target: { value: '2025-01-15' } })
        //userEvent.selectOptions(selectHora, '17:00');                   // Cambiar el valor del select

        //------------------------------------------------------


        // Espera que los valores cambien y verifica que los valores sean los esperados
        await waitFor(() => {
                expect(selectOcasion.value).toBe('Cumpleaños')
                //expect(selectHora.value).toBe('17:00')
                expect(selectInvitados.value).toBe('1')
                expect(calendarButton.value).toBe('2025-01-15') 
            });   

    })



})