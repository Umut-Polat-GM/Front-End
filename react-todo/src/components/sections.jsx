import React from 'react'
import Header from './header'
import Main from './main'
import Footer from './footer'

const Sections = ({todos, setTodos, deleteTodo}) => {

  return (
    <div className="todoapp">
        <Header 
          todos={todos} 
          setTodos={setTodos} 
        />
        <Main 
          todos={todos}
          setTodos={setTodos}
          deleteTodo={deleteTodo}
        />
        <Footer
          todos={todos}
          setTodos={setTodos}
        />
    </div>
  )
}

export default Sections