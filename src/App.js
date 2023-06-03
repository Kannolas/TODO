import React from "react";
import { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import TodoContainer from "./components/TodoContainer";
import './styles.css'

function App() {
  const notif = document.querySelectorAll(".added")
  const [todos, setTodos]= useState([])
  const[isShowAdded, setShowAdded] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)

  const AddTask = (input)=>{
    if(input){
      const newItem={
        id: Math.random().toString(36).substring(1, 4),
        task: input,
        completed:false
      }
      setTodos([...todos, newItem])
      setShowAdded(true)
      setTimeout(()=>{
        setShowAdded(false)
      }, 2000)
    }
  }

  useEffect(()=>{
    if(isShowAdded){
      notif[0].classList.add("showadded")
    }
    else{
      notif[0].classList.remove("showadded")
    }
    if(isDeleted){
      notif[1].classList.add("showadded")
    }
    else{
      notif[1].classList.remove("showadded")
    }
  })



  const DeleteTask = (id)=>{
    setTodos([...todos.filter((todo)=>todo.id !== id)])
    setIsDeleted(true)
      setTimeout(()=>{
        setIsDeleted(false)
      }, 2000)

  }

  const ToggleTask=  ()=>{

  }
  return (
    <div className="App">
      <header><h1>Количество задач: {todos.length}</h1></header>
      <TodoContainer add={AddTask}/>
      {todos.reverse().map((todo)=>{
      return(
        <TodoItem todo = {todo} id = {todo.id} remove={DeleteTask} toggleT={ToggleTask}/>
      )})}
      <div className="added">
        <div className="added-text">Successfully added</div>
      </div>
      <div className="added deleted">
        <div className="added-text">Deleted</div>
      </div>
    </div>
  );
}

export default App;