import React from 'react'
import Header from './header'
import Main from './main'
import Footer from './footer'

const sections = ({todos, setTodos}) => {
    console.log(todos);
  return (
    <sections className="todoapp">
        <Header />
        <Main />
        <Footer />
    </sections>
  )
}

export default sections