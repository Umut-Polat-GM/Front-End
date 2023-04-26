import React from 'react'
import { toast } from 'react-toastify'

const main = ({todos, setTodos, deleteTodo}) => {

    const isActive = (id) => {
        setTodos(todos.map( todo => {
            if(todo.id === id) {
                todo.active = !todo.active
                return todo
            }

            return todo
        }))
    }
    

    const todosElemens = todos.map((todo) => {
        return (
            <li key={todo.id} className={todo.active ? "" : "completed"}>
                <div className="view">
                    <input className="toggle" type="checkbox" value={todo.active} onClick={() => isActive(todo.id)}/>
                    <label>{todo.text}</label>
                    <button className="destroy" onClick={()=> {
                        deleteTodo(todo.id)
                        toast.error("Deleted")
                    }}></button>
                </div>
            </li>
        )
    })

  return (
    <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">
            Mark all as complete
        </label>

        <ul className="todo-list">
            {todosElemens}
        </ul>
    </section>
  )
}

export default main

            // <li className="completed">
            //     <div className="view">
            //         <input className="toggle" type="checkbox" />
            //         <label>Learn JavaScript</label>
            //         <button className="destroy"></button>
            //     </div>
            // </li>
            // <li>
            //     <div className="view">
            //         <input className="toggle" type="checkbox" />
            //         <label>Learn React</label>
            //         <button className="destroy"></button>
            //     </div>
            // </li>
            // <li>
            //     <div className="view">
            //         <input className="toggle" type="checkbox" />
            //         <label>Have a life!</label>
            //         <button className="destroy"></button>
            //     </div>
            // </li>