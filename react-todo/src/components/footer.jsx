import React from 'react'
import { useState } from 'react'

const Footer = ({todos, setTodos}) => {

    const [values, setValues] = useState(todos)
    const [filter, setFilter] = useState("all");

    const handleFilterClick  = (e, filterType ) => {
        document.querySelectorAll(".selected").forEach(e => e.classList.remove('selected'));
        e.target.classList.add('selected')

        setFilter(filterType)
        setTodos(values)
        setTodos(filterTodos(filterType, todos))
        console.log(filterTodos(filterType, todos));
        
    }
    const filterTodos = (filterType, todos) => {
        switch (filterType) {
          case "All":
            return todos;
          case "Active":
            return todos.filter(todo => todo.active === true);
          case "Completed":
            return todos.filter(todo => todo.active === false);
          default:
            return todos;
        }
      };

      const allClear = () => {
        setTodos([])
        setValues([])
      }

  return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{todos.length}</strong>
                _items left
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" className='selected' onClick={(e)=>handleFilterClick (e, "All")}>All</a>
                </li>
                <li>
                    <a href="#/" className='' onClick={(e)=>handleFilterClick (e, "Active")}>Active</a>
                </li>
                <li>
                    <a href="#/" className='' onClick={(e)=>handleFilterClick (e, "Completed")}>Completed</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={allClear}>
                Clear completed
            </button>
        </footer>
  )
}

export default Footer

/*
        if(e.target.id === "a1"){
            setTodos(()=>activeValue)
        }else if(e.target.id === "a2"){
            setTodos(todos.filter((todo) => todo.active === true))
        }else if(e.target.id === "a3"){
            setTodos(todos.filter((todo) => todo.active === false))
        }
*/