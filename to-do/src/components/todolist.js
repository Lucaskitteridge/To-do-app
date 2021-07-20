import React from "react"
import Todo from "./todo"

const TodoList = ({ inputText }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        <Todo />
      </ul>
    </div>
  )
}

export default TodoList;