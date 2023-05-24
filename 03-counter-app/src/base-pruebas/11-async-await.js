

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );





const getImagen = async () => {

    try {

        const apiKey = 'yh1IgNWLFPzL9GdWgtdKnH73hng1QYs7';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error

        return 'No se encontro la imagen'

    }



}
export { getImagen }
console.log(getImagen());


