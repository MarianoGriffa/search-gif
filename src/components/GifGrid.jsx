import { GifItem } from './GifItem'; 
import { useGifsFetch } from '../hooks/useGifsFetch';
  
export const GifGrid = ({ category }) => { 

  const { images, isLoading } = useGifsFetch( category );  
 
  return (  
   <>
   <h3>{category}</h3> 

     {
      isLoading && ( <h4>Cargando..</h4> )
     }  
  
     <div className="card-grid"> 
      {   
           images.map((image) => (
            <GifItem 
             key={image.id}  
                {...image }   
              />    
    
            ))   
      } 
      </div>      
    

   </>
      
    ) 
  
}
