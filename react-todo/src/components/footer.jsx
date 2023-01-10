import React from 'react'
import { useEffect, useState } from 'react'

const Footer = ({todos}) => {


  return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{todos.length}</strong>
                _items left
            </span>

            <ul className="filters">
                <li>
                    <a id='a1' href="#/" className='selected'>All</a>
                </li>
                <li>
                    <a id='a2' href="#/" className=''>Active</a>
                </li>
                <li>
                    <a id='a3' href="#/" className=''>Completed</a>
                </li>
            </ul>

            <button className="clear-completed">
                Clear completed
            </button>
        </footer>
  )
}

export default Footer