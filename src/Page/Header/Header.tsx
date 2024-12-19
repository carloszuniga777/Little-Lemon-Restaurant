import Logo from '../../assets/Logo-2.svg'
import './Header.css'
import {Link, NavLink, useLocation  } from "react-router";
import { useEffect, useState } from 'react';


const menus = {
  public: [
    { id: 1, name: 'Inicio', url: '#presentacion' },
    { id: 2, name: 'Acerca', url: '#acerca' },
    { id: 3, name: 'Especialidades', url: '#especiales' },
    { id: 4, name: 'Testimonio', url: '#clientes' },
    { id: 5, name: 'Reservación', url: '/reservacion-mesa' },
  ],
  private: [
    { id: 1, name: 'Inicio', url: '/' },
    { id: 2, name: 'Reservación', url: '/reservacion-mesa' },
  ],
  error: [
    { id: 1, name: 'Inicio', url: '/' },
  ],
};




export const Header = () => {

  const [menu, setMenu] = useState(menus.public);
  const location = useLocation();



    //--------------------Determinacion de rutas que se van a renderizar en el header segun donde se encuentre el usuario ------------

    // Función para determinar el menú según la ruta actual
    const determineMenu = (path:string) => {
      
      if (path === '/reservacion-mesa') {                                                   //Si la ruta del navegador(path) es la de Revacion: El header solo renderizara las rutas Private(Inicio, reservacion)
        return menus.private;
      }

      if (menus.public.some(item => item.url.startsWith('#') && path === '/')) {           //Si la ruta del navegador(path) es la de inicio '/'. El header se renderizara con las rutas Public(Inicio, Acerca, Especilidades, Testimonio, Reservacion)    
        return menus.public;
      }
      
      return menus.error;                                                                  //Si la ruta no existe o no esta mapeada. El header se renderizara solo el inicio                                              
    };


  // Actualiza el menú cada vez que cambia la ruta
  useEffect(() => {
    setMenu(determineMenu(location.pathname));
  }, [location.pathname]);




  //----------------------------------------
  //Desplaza suavemete a la seccion

  const handleScroll = (sectionId:string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


//-------------------------------------------


  return (
    <header className='header'>
      <div className='contenedor-header'>
          <nav className='header-logo'>
            <Link to={'/'}>
                <img src={Logo} alt='Logo' className='header-imagen-logo'/>
            </Link>
          </nav>

          <nav className='menu'>
              <ul className='menu-navegacion'>
                  {
                    menu.map(item => (
                              <li className='text-makarzi navheader' key={item.id}>
                                {
                                  item.url.startsWith('#') 
                                  ? (
                                      <a onClick={() => handleScroll(item.url.slice(1))}>
                                        {item.name}
                                      </a>
                                    ) 
                                  : (
                                    <NavLink to={item.url}  className={({ isActive }) => isActive ? "menu-activo" : undefined}  >{item.name}</NavLink>     
                                    )
                                } 
                              </li> 
                            ))
                   } 

              </ul>
          </nav>
      </div>
    </header>
  )
}
