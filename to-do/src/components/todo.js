import React from "react"

const Todo = ({ text }) => {
  return (
    <div className="todo"> {text}
      <li className="todo-item"></li>
      <button className="complete-btn">
        <i className="fas fa-check" />
        </button>
      <button className="trash-btn">
        <i className="fas fa-trash" />
        </button>
    </div>
  )
}

export default Todo;