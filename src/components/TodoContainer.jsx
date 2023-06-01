import React from "react";
import TextField from '@mui/material/TextField';
import { useState } from "react";

function TodoContainer({add}){
    const HandleSubmit =(e)=>{
        e.preventDefault()
        add(todoText)
        setTodoText("")
    }

    const HandleKeyPress= (e)=>{
        if(e.key==="Enter")
        HandleSubmit(e)
    }
    const [todoText, setTodoText] = useState('')
    return (
    <div className="TodoContainer">
        <TextField value={todoText} id="outlined-basic" label="Введите задачу" variant="outlined" onChange={(e)=>{setTodoText(e.target.value)}} onKeyDown={HandleKeyPress} className="text-field" InputProps={{
          endAdornment: (
            <div className="btn-add" onClick={HandleSubmit}>Добавить</div>
          ),}}/>
            
    </div>
    )
}

export default TodoContainer;