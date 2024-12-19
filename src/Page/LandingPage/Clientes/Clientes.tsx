import './Clientes.css'
import { CardTestimonio } from './Components/CardTestimonio'
import Cliente1 from './../../../assets/cliente-1.jpg'
import Cliente2 from './../../../assets/cliente-2.jpg'
import Cliente3 from './../../../assets/cliente-3.jpg'
import Cliente4 from './../../../assets/cliente-4.jpg'



const clientes =[
    {
      id: 1,  
      img:  Cliente1,
      alt: 'avatar',
      nombre: 'Ethan Williams',
      cita:   'La comida estuvo increíble, cada plato estaba lleno de sabor y frescura. Definitivamente volveré a disfrutar de su excelente cocina',
      cantidadEstrellas: 4
    },
    {
      id: 2,  
      img:  Cliente2,
      alt: 'avatar',
      nombre: 'Emma Carter',
      cita:   'Me encantó la experiencia en este restaurante. El ambiente es acogedor y la comida es simplemente deliciosa. ¡Lo recomiendo totalmente!',
      cantidadEstrellas: 5
    },
    {
      id: 3,  
      img:  Cliente3,
      alt: 'avatar',
      nombre: 'Sophia Davis',
      cita:   'El servicio fue excepcional y los platos, ¡wow! Se nota que usan ingredientes de calidad. Sin duda, uno de los mejores lugares en los que he comido',
      cantidadEstrellas: 3
    },
    {
      id: 4,  
      img:  Cliente4,
      alt: 'avatar',
      nombre: 'Luke Anderson',
      cita:   'Cada vez que vengo, me sorprenden con nuevos sabores. La comida es lo mejor y el personal siempre es muy amable. ¡Una experiencia que vale la pena!',
      cantidadEstrellas: 3
    }
]



export const Clientes = () => {


  return (
    <section className="clientes" id='clientes'>
        <div className="contenedor-testimonios-titulo">
              
              <div className='contenedor-titulo text-karla'>
                <h2>Testimonio</h2>
              </div>

              <section className='contenedor-testimonios text-karla'>              
                {
                    clientes.map( cliente =>(
                        <CardTestimonio key={cliente .id} {...cliente}/>
                    ))
                }

              </section>  
        </div>
    </section>
  )
}
