import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  // https://bobbyhadz.com/blog/react-onclick-redirect
  // If you want to install sass command is:: 
  // npm i sass
  // install router
  // npm i -D react-router-dom
  const redirect=()=>{
    navigate("/contact")
  }
  return (
    <>
      <nav>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/*All Components are load here  */}
      {/* <div> */}
        <Outlet />
      {/* </div> */}
    </>
  )
}

export default Navbar