import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName]= useState('')
  const [email, setEmail]= useState('')
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(firstName && email){
      const person = { id:new Date().getTime().toString(), firstName : firstName, email : email}
      setPeople((people) => {
        return [...people, person]
      })
      setFirstName('')
      setEmail('')
    }else{
      console.log("empty values")
    }
  }
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
              <label htmlFor='firstName' >Name : </label>
              <input
                type="text"
                id='firstName'
                name='firstName'
                value={firstName}
                onChange={(e)=> setFirstName(e.target.value)}
              />
          </div>
          <div className='form-control'>
              <label htmlFor='Email' >Email : </label>
              <input
                type="text"
                id='Email'
                name='Email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
          </div>
          <button type='submit'>Add Person</button>
        </form>
      </article>
      {
        people.map((person, index)=>{
          const {id, firstName, email} = person
          return (
            <div className='item' key={id}>
                <h4>{firstName}</h4>
                <p>{email}</p>
            </div>
          )
        })
      }
    </>
  )
};

export default ControlledInputs;
