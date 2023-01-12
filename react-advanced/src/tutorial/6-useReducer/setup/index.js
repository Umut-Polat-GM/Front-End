import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state, action) => {
  console.log(state, action)
  return state
}
const defaultState = {
  people:[],
  isModalOpen:false,
  modalContent:'hello world'
}

const Index = () => {
  const [name, setName]= useState('')
  const [state, dispatch]= useReducer(reducer,)
  

  const handleSubmit = (e) =>{
      e.preventDefault()
      if(name){
        dispatch({type: 'Testing'})
      }else{
        
      }
  }
  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id='name'
            value={name}
            onChange= {(e) => setName(e.target.value)}
           />
        </div>
           <button type='submit' >Add</button>
      </form>
      {state.people.map((person)=>{
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        )
      })}
    </>
  )
};

export default Index;
