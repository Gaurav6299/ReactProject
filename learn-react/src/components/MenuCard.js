import React from 'react'

const MenuCard = ({ menuData }) => {
  const myStyle = { color: 'red', cursor: 'pointer' }
  // console.log(menuData)

  return (
    <>
      <div className="section">
        {menuData.map((ele) => {
          const {id,name,category,image,description}=ele
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className='number'>{id}</span>
                    <p className='food-type'>{category}</p>
                    <h2>{name}</h2>
                    <p className='desc'>{description}</p>
                    <hr className='hr-line' />
                    <span className='read-more' style={myStyle}>READ</span>
                  </div>
                  <img src={image} alt="" className='image' />
                  <button className='btn'>Order Now</button>
                </div>
              </div>
            </>
          )
        })}
      </div>


    </>
  )
}

export default MenuCard