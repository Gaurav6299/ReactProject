import React from 'react'
import Menu from "../components/Menu"

const Home = () => {
  console.log(Menu)
  return (
    <div className="section">
      <img src="../images/banner2.webp" alt="banner" />
      <h2>All Fast Foods Yaha Or Kaha.</h2>
      <div className="card-section">
        {Menu.map((ele) => {
          const  { id,description, image,name }=ele
          return (
            <>
              <div className="card-body">
                <span>{id}</span>
                <h3>{name}</h3>
                <p>{description}</p>
                <img src={image} alt="panner" />
                <button className='btn'>ORDER NOW</button>
              </div>
            </>
          )
        })}
      </div>
    </div>

  )
}

export default Home