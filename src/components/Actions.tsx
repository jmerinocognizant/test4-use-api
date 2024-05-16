import { ActionTypes } from "./Table";

interface ActionsProps {
    id: number;
    action: (type:ActionTypes,payload:number) => void
}


export const Actions = ({id,action}:ActionsProps) => {

    const btnPutClickHandler = () =>{
        //console.log("click put");
        action(ActionTypes.put,id);   
    }

    const btnDeleteClickHandler = () =>{
        //console.log("click delete");
        action(ActionTypes.delete,id);   
    }

    // const btnActionClickHandler = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     const button = event.target as HTMLButtonElement;
    //     //console.log(button.getAttribute("name"));
    //     action(button.getAttribute("name"),id);
    // }

  return (
    <>
        <div className="action-buttons">
            <button name={ActionTypes.put} onClick={btnPutClickHandler} className="btn btn-primary ms-2">PUT</button>
            <button name={ActionTypes.delete} onClick={btnDeleteClickHandler} className="btn btn-danger ms-2">DELETE</button>
        </div>
    </>
  )
}
