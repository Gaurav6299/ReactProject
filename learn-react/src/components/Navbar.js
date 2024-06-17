import React from 'react'

const Navbar = ({filterItem,uniqueCategory}) => {
  return (
    <>
      {/* Navbar */}

      <nav>
        <div className="navbar">
          <div className="btn-group">
            {uniqueCategory.map((ele)=>{
              return(
                <button className='btn-category' onClick={() => filterItem(ele)}>{ele}</button>
              )
              
            })}
            
            {/* <button className='btn-category' onClick={() => filterItem("Lunch")}>Lunch</button>
            <button className='btn-category' onClick={() => filterItem("Dinner")}>Dinner</button>
            <button className='btn-category' onClick={() => filterItem("Evening")}>Evening</button>  hm yaha onClick par ()=>filterItem() method name de rhe hai kuki wo apne method ko baar baar call na kare  */}
            {/* <button className='btn-category' onClick={() => setMenuData(Menu)}>All</button> */}

          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar