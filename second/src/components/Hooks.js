import React, { useState } from 'react'
import "./style.css"

const Hooks = () => {
  const [myData, setMyData] = useState(0);
  return (
    <>
      <div className="button-group">
        <p>{myData}</p>
        <div className='button incre' onClick={() => setMyData(myData + 1)}>Increment</div>
        <div className='button' onClick={() => myData > 0 ? setMyData(myData - 1) : setMyData(0)}>Decrement</div>
      </div>
    </>
  )
}

export default Hooks