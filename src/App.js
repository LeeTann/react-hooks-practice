import React, { useState } from 'react';
import './App.css'

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className="todo">
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>X</button>
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
      Complete: false,
      id: 3,
      importance: 92
    },
    {
      text: 'Walk the dog',
      Complete: true,
      id: 1,
      importance: 88
    },
    {
      text: 'Go to the gym',
      Complete: false,
      id: 2,
      importance: 100
    },
  ])

  // //sort by id
  // const sortByComplete = todos.sort(function(a, b) {
  //   return a.id - b.id
  // })

  // console.log(sortByComplete)

  // // sort alphabetically
  // todos.sort(function(a,b) {
  //   if(a.name > b.name) {
  //     return 1; 
  //   } else {
  //     return -1;
  //   }
  // })
  // console.log(todos)

  todos.sort((a, b) => {
    return b.importance > a.importance ? 1 : -1
  })

  console.log(todos)
  
  const addTodo = text => {
    const newTodo = [...todos, { text }]
    setTodos(newTodo)
  }

  const completeTodo = index => {
    const newTodo = [...todos]
    newTodo[index].isCompleted = true
    setTodos(newTodo)
  }

  const removeTodo = index => {
    const newTodo = [...todos]
    newTodo.splice(index, 1)
    setTodos(newTodo)
  }

  return(
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )

}

export default App