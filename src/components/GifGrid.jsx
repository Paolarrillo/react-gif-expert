import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h3>{ category }</h3>
      {
        // Aqui establece que si isLoading es true entonces se mostrara el mensaje
        isLoading && (<h2>Cargando</h2>)
      }
      <div className="card-grid">
        {/* Desestructuro el image.id y el image.title
        { images.map (({ id, title }) => (
          <GifItem key={ id }/> */}
        { images.map (( image ) => (
          <GifItem 
            key={ image.id }
            /* Esparcir las properties que ya se habian establecido en el getGifs.js
            de tal manera que aparezcan en los componentes con sus valores*/
            {...image}
          />
        ))}
      </div>
    </>
  )
}
