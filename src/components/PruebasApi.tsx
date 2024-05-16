import { useState } from "react";
//import { getListadoPeliculas,addPelicula,updatePelicula,deletePeliculas,resetPeliculas } from "../api/peliculasApi";
import { useFetch } from "../hooks/useFetch";



export const PruebasApi = () => {
    
    //const [url,setUrl] = useState('https://api.breakingbadquotes.xyz/v1/quotes/5');

    // const url = 'https://api.breakingbadquotes.xyz/v1/quotes/5';
    //const url = 'https://api.breakingbadquotes.xyz/v1/quoteasdfs/asdfsadf';
    //const {data, hasError, error, isLoading} = useFetch(url);


    const btnPeliculasHandler = () => {
        console.log('click Peliculas');
        // const res = getListadoPeliculas();
        // console.log(res);
    } 

    const btnResetHandler = async() => {
        console.log('click Reset');
        // const res = resetPeliculas();
        // console.log(res);
    } 
    
    const btnPutHandler = async() => {
        console.log('click Put');
        const pelicula = {
            id:111,
            title:'asdf',
            episode: 1,
            description: 'description asdfasfd a',
        }
        // const res = updatePelicula(pelicula);
        // console.log(res);
    } 

    const btnDeleteHandler = async() => {
        console.log('click Delete');
        // setUrl(urlBase+'/');
        // const res = deletePeliculas(1000);
        // console.log(res);
    } 

    return (
    <>
        <div className="w-100">
            <button className="btn btn-info m-2" onClick={btnPeliculasHandler}>Peliculas</button>
            <button className="btn btn-info m-2" onClick={btnResetHandler}>Reset</button>
            <button className="btn btn-info m-2" onClick={btnPutHandler}>Put</button>
            <button className="btn btn-info m-2" onClick={btnDeleteHandler}>Delete</button>
        </div>

        {/* { isLoading && <p>Cargando...</p>} */}
        {/* { hasError &&  <p>{error?.message}</p>} */}

        {/* <pre>{ JSON.stringify( data, null, 2) }</pre> */}
    </>
  )
}
