import React from "react"

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandle = () => {
    setTodos(todos.filter(el => el.id !== todo.id))
  }
  const completeHandle = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          }
        }
        return item
      })
    )
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed " : ""}`}>{text}</li>
      <button onClick={completeHandle} className="complete-btn">
        <i className="fas fa-check" />
      </button>
      <button className="trash-btn" onClick={deleteHandle}>
        <i className="fas fa-trash" />
      </button>
    </div>
  )
}

export default Todo;