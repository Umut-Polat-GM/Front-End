import React, { useState } from 'react';

const ErrorExample = () => {
  const [title, setTitle] = useState("Default Value")

  const handleClick = () => {
    setTitle("My Choice")
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>Random Header</button>
    </React.Fragment>
  )
};

export default ErrorExample;
