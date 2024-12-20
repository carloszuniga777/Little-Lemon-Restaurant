import footer from '../../../assets/footer.png'
import {Link} from "react-router";
import './Footer.css'


const navegacion = [
  {
    id: 1, 
    name: 'Inicio',
    url:'#presentacion'
  },
  {
    id: 2, 
    name: 'Acerca',
    url:'#acerca'
  },
  {
    id: 3, 
    name: 'Especialidades',
    url:'#especiales'
  },
  {
    id: 4, 
    name: 'Reservación',
    url:'/Reservacion-Mesa'
  }
]



export const Footer = () => {



   //----------------------------------------
  //Desplaza suavemete a la seccion
  
  const handleScroll = (sectionId:string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  //Obtiene el año actual dinamicamente
  const date = new Date().getFullYear();

  
  return (
    <footer className='footer'>
      <div className="contenedor-footer">
        <section className='contenedor-footer-info'>
              <figure className='contenedor-footer-logo'>
                <img src={footer} alt="logo-footer" className='imagen-footer' loading='lazy'/>
              </figure>

              <section className='contenedor-footer-navegacion'>
                <h3 className='titulo-footer text-makarzi'>Conócenos</h3>
                <ul className='subcnotenedor-footer text-karla'>
                    {
                        navegacion.map(item => (
                                  <li className='text-makarzi navfooter' key={item.id}>
                                    {
                                      item.url.startsWith('#') 
                                      ? (
                                          <a onClick={() => handleScroll(item.url.slice(1))}>
                                            {item.name}
                                          </a>
                                        ) 
                                      : (
                                           <Link to={item.url}  /*className={({ isActive }) => isActive ? "menu-activo" : undefined}*/  >{item.name}</Link>     
                                        )
                                    } 
                                  </li> 
                                ))
                      } 
                </ul>
              </section>
              
              <section className='contenedor-footer-navegacion contactenos'>
                <h3 className='titulo-footer text-makarzi'>Contactanos</h3>
                  <ul className='subcontenedor-footer text-karla'>
                    <li>  <h4>Direccion</h4>
                          <p>Little Lemon Restaurant</p>
                          <p>123 Broadway, New York,</p>
                          <p>NY 10006, USA.</p>
                    </li>
                    <li>
                        <h4>Número teléfono</h4>
                        <p>(123) 4456-9892</p>
                    </li>
                    <li>
                        <h4>Email</h4>
                        <p>servicio.cliente@littlelimon.com</p>
                    </li> 
                  </ul>  
              </section>

              <section className='contenedor-footer-navegacion'>
                <h3 className='titulo-footer text-makarzi'>Siguenos</h3>
                <ul className='subcontenedor-footer text-karla'>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Tik Tok</li>
                </ul>
              </section>
        </section>
        <section>
            <p className='copyright'>&copy; <span>{date}</span> Carlos Zuniga. Todos los derechos reservados.</p>
        </section>       
      </div>
    </footer>
  )
}
