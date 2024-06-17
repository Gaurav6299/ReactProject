import React from "react"

const Teacher=({data})=>{
  return (
    <>
      <div>
        <h1>Hello I am Teacher, Kumar</h1>
        <h2>I am teaching Maths</h2>
      </div>
      <ul>
        <li>My car is {data}</li>
      </ul>
    </>
  )
}

export default Teacher