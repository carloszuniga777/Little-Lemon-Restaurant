import { fireEvent, render, screen } from "@testing-library/react";
import { DatosUsusario } from "./DatosUsuario";
import { RegisterFormProvider } from "../../context/RegisterFormProvider";
import { MemoryRouter } from "react-router";


describe('DatosUsuario', ()=>{

        // Signfica que se va a renderizar una sola vez en cada test, es decir, antes de cada test
        beforeEach(() =>{
            //Renderiza el componente DatosUsusario en el dom de vitest, este formulario esta envuelto por el contexto RegisterFormProvider y el router MemoryRouter para la navegacion
            render(
                <MemoryRouter>
                  <RegisterFormProvider>
                    <DatosUsusario/>
                  </RegisterFormProvider>
                </MemoryRouter>
              );
        })
    
        //test 1: Testeando que se rendericecorrectamente
        test('Deberia renderizar el formulario de DatosUsuario', ()=>{
            
            //Elementos del formulario
            const inputNombre = screen.getByText(/Nombre/i)
            const inputApellido = screen.getByText(/Apellido/i)
            const inputCorreo = screen.getByText(/Correo/i)
            const inputTelefono = screen.getByText(/Telefono/i)

            //Se espera que se encuentren en el dom de vitest
            expect(inputNombre).toBeInTheDocument()
            expect(inputApellido).toBeInTheDocument()
            expect(inputCorreo).toBeInTheDocument()
            expect(inputTelefono).toBeInTheDocument()        
        })


        //test 2: Testeando que se pueda usar correctamente el formulario
        test('Deberia cambiar los valores de los elementos del formulario DatosUsuario', async()=>{
           
            //-----Obteniendo los elementos del formulario-----------------
            const inputNombre = screen.getByLabelText(/Nombre/i) as HTMLInputElement
            const inputApellido = screen.getByLabelText(/Apellido/i) as HTMLInputElement
            const inputCorreo = screen.getByLabelText(/Correo/i) as HTMLInputElement
            const inputTelefono = screen.getByLabelText(/Telefono/i) as HTMLInputElement

            //----Simulando el cambio de valores de los elementos del formulario -----
            fireEvent.change(inputNombre, { target: { value: 'Juan'}})    
            fireEvent.change(inputApellido, { target: { value: 'Perez'}})
            fireEvent.change(inputCorreo, { target: { value: 'Juan.Perez@gmail.com'}})
            fireEvent.change(inputTelefono, { target: { value: '1234567890'}})


            //----Esperando que los valores de los elementos del formulario hayan cambiado y verifica que los valores sean los esperados-------
            expect(inputNombre.value).toBe('Juan')
            expect(inputNombre.value).not.toBe('')
            expect(inputApellido.value).toBe('Perez')
            expect(inputApellido.value).not.toBe('')
            expect(inputCorreo.value).toBe('Juan.Perez@gmail.com')
            
            // Expresión regular básica para validar correos
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            expect(emailRegex.test(inputCorreo.value)).toBe(true);
           
            expect(inputTelefono.value).toBe('1234567890')

        })

})