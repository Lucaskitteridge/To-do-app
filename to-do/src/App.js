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

    filterHandle()
    saveLocal()
  }, [todos, status])

  useEffect(() => {
    getLocal()
  }, [])

  const saveLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocal = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let localTodo = JSON.parse(localStorage.getItem('todos'))
      console.log(localTodo)
      setTodos(localTodo)
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
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
