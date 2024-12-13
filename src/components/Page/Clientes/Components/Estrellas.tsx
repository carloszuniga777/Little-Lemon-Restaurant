
import { FaStar, FaRegStar } from "react-icons/fa";


interface StarRatingProps {
    quantity: number; // Recibe la cantidad de estrellas a mostrar
  }
  

  
export  const StarRating: React.FC<StarRatingProps> = ({ quantity }) => {
   
    // Definimos el número máximo de estrellas que queremos mostrar
    const totalStars = 5;
  
    // Crear un array con el número de estrellas a mostrar
    const starsArray = Array.from({ length: totalStars }, (_, index) => {
            
            //Estilo de las estrellas
           const starStyle = {
              color: index < quantity ? 'gold' : 'gray', 
              fontSize: '1rem', 
              margin: '0 2px' 
            }; 
      
      
      return index < quantity ? <FaStar key={index} style={starStyle}/> : <FaRegStar key={index} style={starStyle} />; // Renders la estrella llena o vacía
    });
  
    return <div>{starsArray}</div>;
  };
  