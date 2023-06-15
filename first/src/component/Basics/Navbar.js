import React from 'react'

const Navbar = ({ filterItem, uniqueData }) => {
  return (
    <>
      <nav className='navbar'>

        <div className="btn-group">
          {
            uniqueData.map((cur) => {
              return (
                <button className='btn-item' onClick={()=>filterItem(cur)}>{cur}</button>

              )
            })
          }
        </div>

        {/* <div className="btn-group">
          <button className='btn-item active' onClick={filterItem("Breakfast")}>Breakfast</button>
          <button className='btn-item' onClick={filterItem("Breakfast")}>Lunch</button>
          <button className='btn-item' onClick={filterItem("Breakfast")}>Dinner</button>
          <button className='btn-item' onClick={filterItem("Breakfast")}>All</button>
        </div> */}

      </nav>
    </>
  )
}

export default Navbar