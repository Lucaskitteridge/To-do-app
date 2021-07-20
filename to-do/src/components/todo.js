import React from "react"

const Todo = ({ text,todo, todos, setTodos }) => {
  const deleteHandle = () => {
    setTodos(todos.filter(el => el.id !== todo.id))
  }
  return (
    <div className="todo"> {text}
      <li className="todo-item"></li>
      <button className="complete-btn">
        <i className="fas fa-check" />
        </button>
      <button className="trash-btn"onClick={deleteHandle}>
        <i className="fas fa-trash" />
        </button>
    </div>
  )
}

export default Todo;