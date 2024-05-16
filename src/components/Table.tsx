import { Item } from "./Item";
import { useEffect } from "react";
import { RootState } from "../store";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getPeliculas,borrarPelicula,modificarPelicula } from "../store/slices/pelicula";

export enum ActionTypes{
    put = 'put',
    delete = 'delete',
}

export const Table = () => {

    const { isLoading, listado } = useAppSelector((state: RootState) => state.pelicula)
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log('reset y carga de películas');
        dispatch(getPeliculas(10));
    }, [])
    
    const putData = (id:number) => {
        console.log('put '+{id});
        
        const filtrado = listado.filter((pelicula)=>{
            return pelicula.id === id;
        });

        if(filtrado.length>0){
            const nuevaPelicula = {...filtrado[0]};
            nuevaPelicula.title = 'Put clicked';
            dispatch(modificarPelicula(nuevaPelicula));
        }

    }

    const deleteData = (id:number) => {
        console.log('delete '+{id});
        
        const filtrado = listado.filter((pelicula)=>{
            return pelicula.id === id;
        });

        if(filtrado.length>0){
            const pelicula = {...filtrado[0]};
            dispatch(borrarPelicula(pelicula.id));
        }
    }
    
    const action = (type:ActionTypes,payload:number) => {
        switch(type){
            case ActionTypes.put: 
                putData(payload);
                break;
            case ActionTypes.delete:
                deleteData(payload);
                break;
            default:
                throw new Error('Action undefined');
        }
    }

  return (
    <> 
            <h2 className="title-carga">
                {
                    isLoading && <span>cargando...</span>
                }
            </h2>
             

            <table className="table-custom">
                <thead>
                    <tr>
                        <th scope="col" className="table-col">Title</th>
                        <th scope="col" className="table-col">Episode number</th>
                        <th scope="col" className="table-col">Description</th>
                        <th scope="col" className="table-col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        listado.map(item => <Item key={item.id} item={item} action={action}/>)
                    }
                </tbody>
            </table>
        
          
        
    </>
  )
}
