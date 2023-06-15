import React from 'react'

const MenuCard = ({ menuStates }) => {
  // Here we get the parent data

  return (
    <>
      <section className='card-section'>
        {menuStates.map((ele) => {
          return (
            <>
              <div className="cards-container" key={ele.id}>
                <div className="cards">
                  <div className="card-data">
                    <span className='card-number'>{ele.id}</span>
                    <span className='breakfast'>{ele.category}</span>
                    <h2 className='card-title'>{ele.imageName}</h2>
                    <span className='description'>{ele.description}</span>
                    <span className='line'></span>
                    <div className='read'>Read</div>
                  </div>

                  <img src={ele.image} alt="" />
                  <span className='order-now'>Order Now</span>
                </div>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default MenuCard