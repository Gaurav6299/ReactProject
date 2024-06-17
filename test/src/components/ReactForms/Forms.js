import React, { useState } from 'react'

const Forms = () => {
  const [inputdata, setInputData] = useState("");
  const [lastname, setLastName] = useState("");


  //  Submit Data
  const submitData = () => {
    console.log(inputdata)
    alert(`My Frst and last name is ${inputdata}-${lastname}`)
  }

  return (
    <>
      <form onSubmit={() => submitData()}>
        <div>
          <label>First Name</label>
          <input type="text" value={inputdata} onChange={(e) => setInputData(e.target.value)} />
        </div>
        <div>
          <label >Last Name</label>
          <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <input type="submit" />
      </form>
    </>
  )
}

export default Forms