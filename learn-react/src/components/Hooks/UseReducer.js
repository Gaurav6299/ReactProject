import React, { useReducer } from 'react'


const reducer = (state, action) => {
  if (action.type === "INCR") {
    state = state + 1;
  }

  if (state>0 && action.type === "DECR") {
    state = state - 1;
  }
  return state;

}


const UseReducer = () => {
  // useReducer hook also returns an array of two element
  // 1) current state 2)dispatch method
  // useReducer takes two argument
  // 1)reducer function 2)initial data
  // or yaha  dispatch method hm use karte hai to call reducer function or reducer function ke pass mera updated function hoga jo current state ka value ko change karega.
  // useReducer hook is same as useState hook but the difference is useReducer is used for lage Application and useState is used for small Application.
  const initialData = 0;
  const [state, dispatch] = useReducer(reducer, initialData)
  return (
    <>
      <div className="btn-groups">
        <p>{state}</p>

        <button onClick={() => dispatch({ type: "INCR" })}>Increment</button>
        <button onClick={() => dispatch({ type: "DECR" })}>Decrement</button>
      </div>

    </>
  )
}

export default UseReducer