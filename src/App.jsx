import { useState, useEffect } from 'react'
import {TodoContextProvider} from './contexts'
import './App.css'
import {TodoForm,TodoItem} from './Components'


function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
   
    const  newDate =()=>{
      let dt =new Date();
        return dt.toLocaleDateString ()
  }
  const  newTime =()=>{
    let dt =new Date();
      return dt.toLocaleTimeString ()
}

    setTodos((prev) => [{id: Date.now() ,todoDate : newDate(),todoTime:newTime(),...todo}, ...prev] )

  }

  const updateTodo = (id, todo ) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ?todo: prevTodo )))

    
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-xl shadow-slate-700 rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((tode) => (
                          <div key={tode.id}
                          className='w-full'
                          >
                            <TodoItem todo={tode} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App