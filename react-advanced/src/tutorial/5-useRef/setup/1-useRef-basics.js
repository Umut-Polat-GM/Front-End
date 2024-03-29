import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null)
  const refDiv = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer.current.value)
    console.log(refDiv.current)
  }
  useEffect(()=>{
    console.log(refContainer.current)
    refContainer.current.focus()
  },[])

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            ref={refContainer}
          />
          <button type='submit' >Submit</button>
        </div>
      </form>
      <div ref={refDiv}> Hello world</div>
    </>
  )
};

export default UseRefBasics;
