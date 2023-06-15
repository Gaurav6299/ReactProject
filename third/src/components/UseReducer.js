import React, { useReducer } from 'react'
import "./style.css"

const reducer = (state, action) => {
  console.log(state)
  console.log(action.type)
  if (action.type === "INCR") {
    state = state + 1;
  }
  if (state > 0 && action.type === "DECR") {
    state -= 1;
  }
  return state;
  

}
const UseReducer = () => {
  // console.log("Name is:::",name)
  const initialData = 10;
  const [state, dispatch] = useReducer(reducer, initialData)
  return (
    <>
      <div className="button-group">
        <p>{state}</p>
        <div className='button incre' onClick={() => dispatch({ type: "INCR" })}>Increment</div>
        <div className='button' onClick={() => dispatch({ type: "DECR" })}>Decrement</div>
      </div>
    </>
  )
}

export default UseReducer