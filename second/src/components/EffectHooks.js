import React, { useEffect, useState } from 'react'
import "./style.css"
const EffectHooks = () => {
  const [myData, setMyData] = useState(0);

  // It will call every time when changes will happen in the component
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