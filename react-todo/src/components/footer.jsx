import React from 'react'
import { useState } from 'react'

const Footer = ({todos, setTodos}) => {
    
    const [activeValue, setActiveValue] = useState(todos)

    
    // useEffect(()=>{
    //     setActiveValue(()=> todos)
    // }, [todos])

    console.log(activeValue)

    const addSelected = (e) => {
        document.querySelectorAll(".selected").forEach(e => e.classList.remove('selected'));
        e.target.classList.add('selected')
        setTodos(activeValue)
        if(e.target.id === "a1"){
            setTodos(activeValue)
        }else if(e.target.id === "a2"){
            setTodos(todos.filter((todo) => todo.active === true))
        }else if(e.target.id === "a3"){
            setTodos(todos.filter((todo) => todo.active === false))
        }
        
    }

  return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{todos.length}</strong>
                _items left
            </span>

            <ul className="filters">
                <li>
                    <a id='a1' href="#/" className='selected' onClick={(e)=>addSelected(e)}>All</a>
                </li>
                <li>
                    <a id='a2' href="#/" className='' onClick={(e)=>addSelected(e)}>Active</a>
                </li>
                <li>
                    <a id='a3' href="#/" className='' onClick={(e)=>addSelected(e)}>Completed</a>
                </li>
            </ul>

            <button className="clear-completed">
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