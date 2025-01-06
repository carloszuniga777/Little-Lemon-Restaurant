import { FormProvider, useForm } from "react-hook-form";
import { DatePickerField } from "./DataPickerField";
import { render, screen } from "@testing-library/react";


describe('DataPickerField', () =>{
    
    beforeEach(()=>{
                // Componente funcional que encapsula React Hook Form
                 const TestComponent = () => {
                    const methods = useForm(); // Inicializa React Hook Form
                    
                    return (
                            <FormProvider {...methods}>
                                <DatePickerField
                                    label={"Fecha"}
                                    name="fecha"
                                    control={methods.control}
                                    required={true}
                                />
                            </FormProvider>
                    );
                };
               
                //Renderizando el selector en el dom de vitest
                // Renderiza el componente funcional
                render(<TestComponent />);
        
    })
    


    //test 1
    test('Deberia renderizar el DataPickerField', () =>{
        //Se espera que el componente renderizado sea encontrador en el dom de vitest a travez de su label, si esta definido es que se renderizo correctamente (true), de lo contrario devuelve un false                             
        expect(screen.getByText(/Fecha/i)).toBeInTheDocument()     
    })


  //test 2
   test('Deberia renderizar el DataPickerField vacio', ()=>{
    
        // Buscar el input del DatePicker
        const input = screen.getByRole('textbox') as HTMLInputElement;

        // Verificar que esté vacío inicialmente
        expect(input.value).toBe('');
   }) 




   //test 3
   test('Deberia renderizar el DataPickerField con un valor', ()=>{
    
        // Buscar el input del DatePicker
        const input = screen.getByRole('textbox') as HTMLInputElement;

         // Verificar que esté vacío inicialmente
        expect(input.value).toBe('');

        // Introducir un valor en el input
        input.value = '2025-01-15';

        // Disparar el evento de cambio
        input.dispatchEvent(new Event('input', { bubbles: true }));

        // Verificar que el valor haya cambiado
        expect(input.value).toBe('2025-01-15');

    })

})