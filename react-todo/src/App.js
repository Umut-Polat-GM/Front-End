import Sections from "./components/sections";
import Info from "./components/info";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || 
    [
      {
        text:"", 
        id:0,
        active:true
      }
    ])

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div className="umut">
      <ToastContainer />
      <Sections 
        todos={todos}
        setTodos={setTodos}
        deleteTodo ={deleteTodo}
      />
      <Info />
    </div>
  );
}

export default App;
