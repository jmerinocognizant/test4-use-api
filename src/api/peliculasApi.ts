import axios from 'axios';

const peliculasApi = axios.create({
    //baseURL: 'http://localhost:4000/api/peliculas'
    //baseURL: 'https://test4-api-backend.onrender.com/api/peliculas'
    baseURL: process.env.REACT_APP_HOST_API_URL+'/api/peliculas'
});

export type PeliculaType = {
    //id?: number,
    id: number,
    title: string,
    episode: number,
    description: string, 
}

export const getListadoPeliculas = () => { //async
    return peliculasApi.get('/');
    //const res = await peliculasApi.get('/');
    //return res.data.peliculas;

    //console.log(resp);
    //return data.results;
    /*
    const p = peliculasApi.get('/');
    p.then( response =>{
        return response.data;
    }).catch( error =>{
        return [];
    })
    */

}

// async
export const addPelicula = (pelicula:PeliculaType) => {
    // return await peliculasApi.post('/',pelicula);
    return peliculasApi.post('/',pelicula);
}

// async
export const updatePelicula = (pelicula:PeliculaType) => {
    // return await peliculasApi.put(`/${pelicula.id}`,pelicula);
    return peliculasApi.put(`/${pelicula.id}`,pelicula);
}

// async
export const deletePelicula = (peliculaId:number) => {
    // return await peliculasApi.delete(`/${peliculaId}`);
    return peliculasApi.delete(`/${peliculaId}`);
}

// async
export const resetListadoPeliculas = (length:number = 10) => {
    // return await peliculasApi.post(`/reset/${length}`);
    return peliculasApi.post(`/reset/${length}`);
}
