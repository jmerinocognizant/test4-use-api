import { Actions } from "./Actions";
import { ActionTypes } from './Table';
import { PeliculaType } from '../api/peliculasApi';

interface ItemProps {
    item: PeliculaType;
    action: (type:ActionTypes,payload:number) => void
}

export const Item = ({item,action}:ItemProps) => {

    const {id,title,episode,description} = item;

  return (
    <>
        <tr key={id}>
            <td>{title}</td>
            <td>{episode}</td>
            <td>{description}</td>
            <td className="centrar-contenido-columna"><Actions id={id} action={action}/></td>
        </tr>
    </>
  )
}
