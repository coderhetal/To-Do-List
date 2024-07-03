import React from "react"
import {TodoItems} from "./TodoItems";

export const Todos = (props) => {
    let mystyle={
        minHeight:"100vh",
        margin:" 40px auto"
    }
  return (
    
    <div className="container " style={mystyle}>
      <h3 className="my-3">To dos list</h3>
      <hr/>
       { props.todos.length===0? "No todos to display":
       props.todos.map((todo) => {
         return <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} />
         
         })}
       
    </div>
  )
}
