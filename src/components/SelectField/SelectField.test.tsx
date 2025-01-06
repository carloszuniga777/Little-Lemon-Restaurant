import { useForm, FormProvider  } from "react-hook-form";
import { SelectField } from "./SelectField";
import { render, screen, fireEvent } from "@testing-library/react";

describe("SelectField",()=>{
    
    // Se ejecuta antes de cada test
    beforeEach(() => {  

         // Componente funcional que encapsula React Hook Form
         const TestComponent = () => {
            const methods = useForm(); // Inicializa React Hook Form
            
            return (
                    <FormProvider {...methods}>
                        <SelectField
                        label={"Numero de invitados"}
                        name={"invitados"}
                        control={methods.control}
                        dataOption={[
                            { display: "Seleccionar opción", value: "" },
                            { display: "1", value: 1 },
                            { display: "2", value: 2 },
                            { display: "3", value: 3 },
                            { display: "4", value: 4 },
                            { display: "5", value: 5 },
                        ]}
                        />
                    </FormProvider>
            );
        };
       
        //Renderizando el selector en el dom de vitest
        // Renderiza el componente funcional
        render(<TestComponent />);
    })


    //Primer test
    test("Deberia renderizar el Selector", ()=>{  
         //Se espera que el componente renderizado sea encontrador en el dom de vitest a travez de su label, si esta definido es que se renderizo correctamente (true), de lo contrario devuelve un false                             
        expect(screen.getByText('Numero de invitados')).toBeInTheDocument()     
    })


    //Segundo test
    test("Deberia renderizar todas las opciones", ()=>{  
        //Se espera que el componente renderizado sea encontrador en el dom de vitest a travez de su label, si esta definido es que se renderizo correctamente (true), de lo contrario devuelve un false                             
        expect(screen.getByText('Seleccionar opción')).toBeInTheDocument()     
        expect(screen.getByText('1')).toBeInTheDocument()     
        expect(screen.getByText('2')).toBeInTheDocument()     
        expect(screen.getByText('3')).toBeInTheDocument()     
        expect(screen.getByText('4')).toBeInTheDocument()     
        expect(screen.getByText('5')).toBeInTheDocument()     
    })


    //Tercer test
    test("El selector deberia renderizarse la primera vez con la opcion Seleccionar opcion cuyo valor es vacio", ()=>{
        // Obtén el elemento select y verifica su valor inicial
        const selectElement = screen.getByLabelText("Numero de invitados") as HTMLSelectElement;
        expect(selectElement.value).toBe(""); // El valor inicial debe ser vacío ('')
    })


    
    //Cuarto test
    test('El selector deberia cambiar de valor al seleccionar una opcion', ()=>{
        
        // Obtén el elemento <select> usando su label
        const selectElement  = screen.getByLabelText(/Numero de invitados/i) as HTMLSelectElement;
        
          // Dispara el evento change con un nuevo valor
        fireEvent.change(selectElement, { target: { value: "2" } });
        
        expect(selectElement.value).toBe("2"); 
    })

})