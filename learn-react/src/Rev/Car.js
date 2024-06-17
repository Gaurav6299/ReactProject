import React, { useEffect, useState } from 'react'

const Car = (props) => {
  // console.log(props)
  const [car, setCar] = useState({ model: "Mustang", brand: "BMW", color: "Red" })
  const [count, setCount] = useState(0);

  const updateColor = () => {
    setCar(prev => {
      return { ...prev, color: "Blue" }
    })
  }

  const updateBrand = () => {
    setCar(prev => {
      return { ...prev, brand: "Audi" }
    })
  }

  const updateModel = () => {
    setCar(prev => {
      return { ...prev, model: "XUV500" }
    })
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count + 1)
  //   }, 1000)
  // },[])

  useEffect(()=>{
    setTimeout(()=>{
      setCount(count+1)
    },1000)
  },[count])  ///useEffect hook will call after every render(That depends on count value , if count value change useEffect hook will call)


  return (

    <div>
      <h1>My Car color is {car.color} and model is {car.model} and their brand is {car.brand}.</h1>
      <button onClick={updateColor}>Change Color</button>
      <button onClick={updateBrand}>Change Brand</button>
      <button onClick={updateModel}>Change Model</button>
      <h1>I have rendered {count} times</h1>
    </div>

  )
}

export default Car