import React from "react";
import { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import TodoContainer from "./components/TodoContainer";
import './styles.css'

function App() {
  const [todos, setTodos]= useState([])

  const AddTask = (input)=>{
    if(input){
      const newItem={
        id: Math.random().toString(36).substring(1, 4),
        task: input,
        completed:false
      }
      setTodos([...todos, newItem])
    }
  }

  const DeleteTask = (id)=>{
    setTodos([...todos.filter((todo)=>todo.id !== id)])
  }

  const ToggleTask=  ()=>{

  }
  return (
    <div className="App">
      <header><h1>Количество задач: {todos.length}</h1></header>
      <TodoContainer add={AddTask}/>
      {todos.map((todo)=>{
      return(
        <TodoItem todo = {todo} id = {todo.id} remove={DeleteTask} toggleT={ToggleTask}/>
      )})}
    </div>
  );
}

export default App;