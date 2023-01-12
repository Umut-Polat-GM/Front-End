import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const remove = (id) =>{
    const newPeople = people.filter(person => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <>
      {
        people.map(person=>{
          const {id, name} = person  
            return (
                <div key={id} className="item">
                    <h2>{name}</h2>
                    <button onClick={()=>remove(id)} >remove</button>
                </div>
              )
          }
        )
      }
      <button className='btn' onClick={()=>setPeople([])}>Reset</button>
    </>
  )
};

export default UseStateArray;
