import React, { useState } from 'react'

// What is Hooks in React
// Hooks are used to manage the state

const UseState = () => {

  const [myNum, setMyNum] = useState(0);

  return (
    <>
      <div className="btn-groups">
        <p>{myNum}</p>

        <button onClick={() => setMyNum(myNum + 1)}>Increment</button>
        <button onClick={() => myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0)}>Decrement</button>
      </div>

    </>
  )
}

export default UseState