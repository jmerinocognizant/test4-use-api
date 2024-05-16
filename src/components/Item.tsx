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
        <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.episode}</td>
            <td>{item.description}</td>
            <td className="centrar-contenido-columna"><Actions id={item.id} action={action}/></td>
        </tr>
    </>
  )
}
