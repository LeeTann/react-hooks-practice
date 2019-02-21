import React, { useState } from 'react';
import './App.css'

function Todo({ todo, index, completeTodo }) {
  return (
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className="todo">
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
      </div>
    </div>
  )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault()
    if(!value) return 
    addTodo(value)
    setValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="input" 
        value={value} 
        placeholder="Add Todo..."
        onChange={e => setValue(e.target.value)} 
      />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      Complete: false
    },
    {
      text: 'Walk the dog',
      Complete: false
    },
    {
      text: 'Go to the gym',
      Complete: false
    },
  ])

  const addTodo = text => {
    const newTodo = [...todos, { text }]
    setTodos(newTodo)
  }

  const completeTodo = index => {
    const newTodo = [...todos]
    newTodo[index].isCompleted = true
    setTodos(newTodo)
  }

  return(
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )

}

export default App