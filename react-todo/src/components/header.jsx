import React, { useState } from 'react'
import {toast} from 'react-toastify'
import { nanoid } from 'nanoid'

const Header = ({todos, setTodos}) => {
  const [todoValue, setTodoValue] = useState('')

  const handleSubmit = () => {
    if(todoValue === ""){
        toast.warning('Please Enter a Todo!')
    }else if(todos.includes(todoValue)){
        toast.warning('Todo already exist!')
    }else {
        const newTodo = todoValue.trim()
        setTodos([...todos, {text:newTodo, id:nanoid()}])
        toast.success('Todo added!')
    }
    setTodoValue('')
  }


  return (
    <div className="header">
        <h1>todos</h1>
        <form action='' id='todo-form'>
            <input
              className="new-todo" 
              placeholder="What needs to be done?" 
              autoFocus 
              type="text"
              id ="form-input"
              value={todoValue}
              onChange={(e)=>{
                setTodoValue(e.target.value)
              }}
              onKeyPress={(e)=>{
                if(e.key === "Enter"){
                  e.preventDefault()
                  handleSubmit()
                }
              }}
            />
        </form>
    </div>
  )
}

export default Header