import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../store";
import { borrarPelicula, modificarPelicula } from "../store/slices/pelicula";
import { ActionTypes } from "./Table";

interface ActionsProps {
    id: number;
    action: (type:ActionTypes,payload:number) => void
}

export const Actions = ({id,action}:ActionsProps) => {

    const { listado } = useAppSelector((state: RootState) => state.pelicula)
    const dispatch = useAppDispatch();

    // const btnActionClickHandler = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     const button = event.target as HTMLButtonElement;
    //     //console.log(button.getAttribute("name"));
    //     action(button.getAttribute("name"),id);
    // }

    const btnPutClickHandler = () =>{
        //console.log("click put");
        action(ActionTypes.put,id);   
    }

    const btnDeleteClickHandler = () =>{
        //console.log("click delete");
        action(ActionTypes.delete,id);   
    }

    const onDeleteClick = () => {
        dispatch(borrarPelicula(id));
    }

    const onPutClick = () => {
        //recuperar pelicula del store, modificar y enviar
        const filtrado = listado.filter((pelicula)=>{
            return pelicula.id === id;
        });

        if(filtrado.length>0){
            const nuevaPelicula = {...filtrado[0]};
            nuevaPelicula.title = 'Put clicked';
            dispatch(modificarPelicula(nuevaPelicula));
        }

    }

  return (
    <>
        <div className="action-buttons">
            <button name={ActionTypes.put} onClick={onPutClick} className="btn btn-primary ms-2">PUT</button>
            <button name={ActionTypes.delete} onClick={onDeleteClick} className="btn btn-danger ms-2">DELETE</button>
        </div>
    </>
  )
}
