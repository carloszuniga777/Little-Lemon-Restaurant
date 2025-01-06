import { FormProvider, useForm } from "react-hook-form";
import { InputField } from "./InputField";
import { render, screen } from "@testing-library/react";


describe("InputField", () =>{
    test("Deberia renderizar el InputField", () =>{
                
        // Componente funcional que encapsula React Hook Form
        const TestComponent = () => {
            const methods = useForm(); // Inicializa React Hook Form
            
            return (
                    <FormProvider {...methods}>
                        <InputField
                            label="Nombre de la tarjeta"
                            id="nombreTarjeta"
                            type="text"
                            register={methods.register}
                        />
                    </FormProvider>
            );
        };


         //Renderizando el selector en el dom de vitest
        // Renderiza el componente funcional
        render(<TestComponent />);
                
    
        //Se espera que el componente renderizado sea encontrador en el dom de vitest a travez de su label, si esta definido es que se renderizo correctamente (true), de lo contrario devuelve un false                             
        expect(screen.getByText('Nombre de la tarjeta')).toBeInTheDocument()     


    })
})