import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Margin } from "@mui/icons-material";
function TodoItem({todo, id, remove, toggleT}){
    return(
        <div className="TodoItem">
            <div key={id} className="todo">
                {todo.task}
            </div>
            <DeleteIcon className="delete" style={{fontSize: '35px', marginTop:'-5px'}} onClick={()=>{remove(id)}}/>
        </div>
    )
}

export default TodoItem;