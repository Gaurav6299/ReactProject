import React, { useEffect, useState } from 'react'

const UseEffect = () => {

  const [myNum, setMyNum] = useState(0);
  // UseEffect hook will call after every render automatically,this will call after every render.
  // useEffect(() => {
  //  console.log("hello")
  // })

  // But when we pass empty array so that it will call only first time.
  // useEffect(() => {
  //   console.log("hello")
  //  },[])

  useEffect(() => {
    document.title = `Charts(${myNum})`
  })


  return (
    <>
      <div className="btn-groups">
        <p>{myNum}</p>

        <button onClick={() => setMyNum(myNum + 1)}>Increment</button>
      </div>
    </>
  )
}

export default UseEffect