
export const getGifs = async( category ) => {  
 
  const URL_GIF  = `https://api.giphy.com/v1/gifs/search?api_key=PjgIZvdHK37Pr2CLGxkaPTiwUrTCAMbB&q=${ category }&limit=10`;
   
  const resp = await fetch(URL_GIF);    
  const { data } = await resp.json();      
    
   const gifs = data.map( img => ({
     id: img.id,     
     title: img.title,    
     url: img.images.downsized_medium.url   
              
     })    
   )    

   return gifs;    
 }             