import { resetListadoPeliculas, getListadoPeliculas, deletePelicula, updatePelicula, PeliculaType } from '../../../api/peliculasApi';
import { startLoading, setPeliculas } from './peliculaSlice';
import { AppDispatch } from '../../store';


export const getPeliculas = (length:number) => {
    return async( dispatch:AppDispatch) => {
        dispatch( startLoading() );
        
        // TODO: realizar peticion http
        const res = await resetListadoPeliculas(length);
        // console.log(res);

        const {data} = await getListadoPeliculas();
        const listadoPeliculas = data.peliculas;
        // console.log(data);

        dispatch( setPeliculas( listadoPeliculas ));
    }
} 

export const modificarPelicula = (pelicula:PeliculaType) => {
    return async( dispatch:AppDispatch ) => {
        dispatch( startLoading() );

        // console.log(getState().listado);

        // TODO: realizar peticion http
        const update = await updatePelicula(pelicula);
        console.log(update);

        const {data} = await getListadoPeliculas();
        const listadoPeliculas = data.peliculas;

        dispatch( setPeliculas( listadoPeliculas ));
    }
}

export const borrarPelicula = (peliculaId:number) => {
    return async( dispatch:AppDispatch ) => {
        dispatch( startLoading() );

        // console.log(getState().listado);

        // TODO: realizar peticion http
        const update = await deletePelicula(peliculaId);
        console.log(update);

        const {data} = await getListadoPeliculas();
        const listadoPeliculas = data.peliculas;

        dispatch( setPeliculas( listadoPeliculas ));
    }
}



