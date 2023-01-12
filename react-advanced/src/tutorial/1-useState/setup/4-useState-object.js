import React, { useState } from 'react';

const UseStateObject = () => {
  const [umut, setUmut] = useState({
    id:1,
    name: "umut",
    age:27,
    isActive:true,
    message:"Is it right"
  })

  const handleClick = () => {
    // setUmut([{...umut, message: "yeap it is done!!!"}])
    setUmut({...umut, message: "yeap it is done!!!"})
  }
  console.log(umut)
  return (
    <>
      <div>This is {umut.name} and his age:{umut.age}</div>
      <div>Also he is acive {umut.isActive ? "Yes" : "No"} and  his message: {umut.message}</div>
      <button className='btn' onClick={()=>handleClick()}>Change Message</button>
    </>
  )
};

export default UseStateObject;


/*
Burada Çok handleClick e parentese almadıgım için yarım saat ugrastım durdum*/