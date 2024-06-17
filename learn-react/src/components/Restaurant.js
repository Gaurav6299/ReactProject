import React, { useState } from 'react'
import "./style.css"
import Menu from "./MenuApi"
import MenuCard from './MenuCard'
import Navbar from './Navbar'


// Find Unique Category
const uniqueCategoryList =[
  ...new Set(Menu.map((ele)=>{
  return ele.category
})),
"All"
]


export const Restaurant = () => {

  // Always write hook at the starting line of the functional component.
  const [menuData, setMenuData] = useState(Menu);
  //  here menuData:- stateVariable
  // setMenuData:- updated function

  const [uniqueCategory,setUniqueCategory]=useState(uniqueCategoryList);

  const filterItem = (category) => {

    // Condition for All Item
    if(category==="All"){
      setMenuData(Menu)
      return;
    }
    const updatedList = Menu.filter((ele) => {
      return ele.category === category
    })

    setMenuData(updatedList)

  }

  return (
    <>

      <Navbar filterItem={filterItem} uniqueCategory={uniqueCategory} />  {/* Jab hm aise data pass karte hai component ko usko bolte hai props */}
      {/* pass data from one componet to another by the help of props
     so right waale menuData me jitna data hoga wo left waale menuData me aa jaayega or usko hm use kar lange jo component me passkar rhe hai. */}
      <MenuCard menuData={menuData} />
    </>
  )
}
