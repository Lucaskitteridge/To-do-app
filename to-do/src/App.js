import './App.css';
import React, { useState, useEffect } from 'react'
import Form from "./components/form"
import TodoList from "./components/todolist"

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {

  },[todos])

  const filterHandle = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
      break
    }
  }
  return (
    <div className="App">
      <header>
        Lucas's To Do List
      </header>
      <Form
        todos={todos}
        setToDos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus} />
      <TodoList
        setTodos={setTodos}
        todos={todos} />
    </div>
  );
}

export default App;
