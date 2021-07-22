import React from "react"

const Form = ({ setInputText, setToDos, todos, inputText, setStatus }) => {

  const inputTextHandle = (e) => {
    setInputText(e.target.value)
  }

  const submitTodoHandle = (e) => {
    e.preventDefault()
    setToDos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }])
    setInputText("")
  }

  const statusHandle = (e) => {
    setStatus(e.target.value)
  }

  return (
    <form>
      <input type="text" className="todo-input" value={inputText} onChange={inputTextHandle} />
      <button className="todo-button" type="submit" onClick={submitTodoHandle}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandle}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
};

export default Form;