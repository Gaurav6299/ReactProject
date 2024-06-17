import React from 'react'

const Student = ({ cars }) => {
  return (
    <>
      <div>
        <h1>Hello I am Student, Gaurav</h1>
        <h2>Completed Bachelors Degree in 2022</h2>
      </div>
      {cars.map((ele,index) => {
        return (
          <>
            <ul >
              <li key={index}>My Car is {ele}</li>
            </ul>
          </>
        )
      })}
    </>
  )
}

export default Student