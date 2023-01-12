import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers]= useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    setUsers(data)
  }
  /*
  ben burada button kullandım ama useEffect de kullanılabir. useEffect window mount anında bir kere çalıstırır her her açılışta otomatik API dan veri çeker.

      useEffect(() => {
        getUsers();
      }, []);


  */

  return (
    <>
    <button className='btn' onClick={()=> getUsers()}>Fetch User</button>
      <h3>github Users</h3>
      <ul className='users'>
        {users.map(user => {
          const { id, login, avatar_url, html_url } = user;
            return(
              <li key={id}>
                <img src={avatar_url} alt={login}/>
                <div>
                  <h4>{login}</h4>
                  <a href={html_url}>profile</a>
                </div>
              </li>
            )
          }
        )}

      </ul>
    </>
  )
};

export default UseEffectFetchData;
