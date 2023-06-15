import React, { useState } from 'react'
import "./style.css"
import Menu from "./Restaurent-api"
import MenuCard from './MenuCard';
import Navbar from './Navbar';


// Create Unique Category
const uniqueCategory = [
  ...new Set(Menu.map((ele) => {
    return ele.category
  })),
  "All"
]


// First We convert uniqueCategory into current State Variable

const Restaurent = () => {

  const [menuState, setMenuStateData] = useState(Menu); //useState is use to manage the state or useState is to hold the Data.It return an array of two element.1)StateVariable,UpdatedFunction  or jab bhi updatedFunction ki value change hogi wo currentStateVariable(menuState) ki value bhii change  kar dega.
  const [uniqueData,setMenuList]=useState(uniqueCategory)


  const filterItem = (category) => {
    if(category==="All")
    {
      setMenuStateData(Menu);
      return;
    }
    const updatedList = Menu.filter((ele) => {
      return ele.category === category
    })
    setMenuStateData(updatedList)
  }


  return (
    <>
      <Navbar filterItem={filterItem} uniqueData={uniqueData} />
      <MenuCard menuStates={menuState} />
    </>
    // Here we using props to pass data from parent(Restaurent) to child(Menucard)
    // Here menuState is stateVariable which contains Menu data by the help of useState hook.
    // ...-> this is called spread operator
  )
}

export default Restaurent