import './App.css';
import React, { useState } from 'react'
import Form from "./components/form"
import TodoList from "./components/todolist"

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <header>
        Lucas's To Do List
      </header>
      <Form
        todos={todos}
        setToDos={setTodos}
        setInputText={setInputText}
        inputText={inputText} />
      <TodoList 
      setTodos={setTodos} 
      todos={todos} />
    </div>
  );
}

export default App;
