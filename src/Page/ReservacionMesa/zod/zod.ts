import { z } from "zod";

//-------------Schema formulario informacion usuario ----------------

export const zodSchemaInfoUsuario = z.object({
    nombre: z.string().min(1, 'El nombre es obligatorio'),
    apellido: z.string().min(1, 'El apellido es obligatorio'),
    email: z.string().email('El correo debe ser válido').min(3, 'El correo es obligatorio'),
    telefono: z.string()
      .regex(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, {
        message: 'Número de teléfono no válido',
      })
      .min(3, 'El teléfono es obligatorio'),
  });
  
 export type zodFormValuesInfoUsuario = z.infer<typeof zodSchemaInfoUsuario>; // Tipo de datos a esperar
 
 //--------------------Schema formulario de reserva mesa-----------------------------------


 export const zodSchemaReservaMesa = z.object({
      ocasion: z.string().min(1, 'Debe seleccionar una opción'),
      fecha: z.date({
        required_error: "Debe seleccionar una fecha",
      })
      .refine((date) => !isNaN(date.getTime()), {
        message: "Debe seleccionar una fecha válida",
      }),
    hora: z.string().min(1, "Debe seleccionar una opción"),
    invitados: z.string().min(1, 'Debe seleccionar una opción')
 })

 export type zodFormValuesReservaMesa = z.infer<typeof zodSchemaReservaMesa>


 //------------------------------------------------------------------------------------------

 
 export const zodSchemaInfoTarjeta = z.object({
  nombreTarjeta: z
    .string()
    .min(1, 'El nombre de la tajeta no pueda quedar vacio')
    .max(100, 'El nombre es demasiado largo'),

  numeroTarjeta: z.string()
    .min(16, 'El número de tarjeta debe tener 16 dígitos')
    .max(16, 'El número de tarjeta debe tener 16 dígitos')
    .regex(/^\d{16}$/, 'El número de tarjeta solo debe contener dígitos'),

  expirationDate: z
    .string()
    .min(5, 'La fecha de expiración debe tener el formato MM/AA')
    .max(5, 'La fecha de expiración debe tener el formato MM/AA')
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'La fecha de expiración debe ser válida y en formato MM/AA')
    .refine((val) => {
      const [month, year] = val.split('/');
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear().toString().slice(-2); // Obtenemos los últimos 2 dígitos del año
      const currentMonth = currentDate.getMonth() + 1; // Mes actual (0-11)
      return parseInt(year) > parseInt(currentYear) || (parseInt(year) === parseInt(currentYear) && parseInt(month) >= currentMonth);
    }, 'La tarjeta ha expirado'),

  cvv: z
    .string()
    .min(3, 'El CVV debe tener 3 dígitos')
    .max(4, 'El CVV debe tener 4 dígitos')
    .regex(/^\d{3,4}$/, 'El CVV debe ser un número de 3 o 4 dígitos'),
});

export type zodFormValuesInfoTarjeta = z.infer<typeof zodSchemaInfoTarjeta>

