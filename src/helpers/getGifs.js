export  const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=yiRlKs4kn52lya3DoFgVSPIiU3HOC1wv&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    // La funcion se hace asi debido a que se quiere devolver un objeto
    // Se usa la funcion de map ya que se sabe que es un arreglo
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));

    return gifs;
}
