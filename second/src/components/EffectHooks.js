import React, { useEffect, useState } from 'react'
import "./style.css"
const EffectHooks = () => {
  const [myData, setMyData] = useState(0);

  useEffect(() => {
    document.title = `Chats(${myData})`
  } )
  return (
    <>
      <div className="button-group">
        <p>{myData}</p>
        <div className='button incre' onClick={() => setMyData(myData + 1)}>Increment</div>
      </div>
    </>
  )
}

export default EffectHooks