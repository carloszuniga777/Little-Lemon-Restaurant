import { Link } from "react-router";
import plato1 from "../../../assets/Comida-1.jpg";
import plato2 from "../../../assets/Comida-3.jpg";
import plato3 from "../../../assets/Comida-4.jpg";
import { Card } from "./Components/Card";
import './Especialidades.css'


const contentCard = [
  {
   id: 1, 
   img: plato1,
   alt:"Ensalada Griega",
   title:"Ensalada Griega",
   precio:"USD 15.99",
   descripcion:"La Ensalada Griega es un platillo mediterráneo fresco con tomate, pepino, pimiento, cebolla roja, aceitunas Kalamata y queso feta, aderezado con aceite de oliva y orégano. Un clásico sencillo y sabroso.🌿"
  },
  {
    id: 2,  
    img: plato2,
    alt: "Bruchetta",
    title:"Bruchetta",
    precio:"USD 8.99",
    descripcion:"La Bruschetta es un aperitivo italiano de pan tostado frotado con ajo, cubierto con tomate fresco, albahaca, aceite de oliva y, a veces, mozzarella. Es un plato simple y delicioso, perfecto para compartir. 🍅🥖"
  },
  {
    id: 3, 
    img: plato3,
    alt: "Pasta con Albahaca en Salsa",
    title:"Pasta con Albahaca",
    precio:"USD 10.99",
    descripcion: "La Pasta con Albahaca en Salsa es un platillo italiano que mezcla pasta al dente con salsa de tomate, aceite de oliva, ajo y albahaca fresca. Es una receta simple y sabrosa, ideal para cualquier ocasión.🌿🍝"
  }
]


export const Especialidades = () => {
  return (
    <>
         <aside className="especiales" id="especiales">
                <div className="contenedor-titulo-button">
                    <h2 className="text-makarzi">Especialidades de está semana</h2>
                    <Link to={'/menu'}><button className="boton-menu text-karla">Menu</button></Link>
                </div>

                <section className="contenedor-especialidades text-karla">

                 {
                   contentCard.map(item=>(
                      <Card
                        key={item.id}
                       {...item}
                      />
                   ))
                 }   
            </section>
         </aside>  
    </>
  )
}
