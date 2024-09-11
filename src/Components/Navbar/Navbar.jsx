import React, { useState } from 'react'
import './Navbar.css'
import { assests } from '../../assets/assests.js'


const Navbar = () => {
       const [menu, setMenu] = useState("Home")
  
  return (
          <div className="navbar">
            <img src={assests.logo} alt="" className='logo' />
            <ul className="navbar-lists">
              <li onClick={() => setMenu("Home")} className={menu=== "Home"?"active": ""}>Home</li>
              <li onClick={() => setMenu("Menu")} className={menu=== "Menu"?"active":""}>Menu</li>
              <li onClick={() => setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</li>
              <li onClick={() => setMenu("Contact Us")} className={menu==="Contact Us"? "active": ""}>Contact Us</li>
            </ul>
            <div className="navbar-right">
              <img src={assests.search} alt="" className='search' />
              <div className='navbar-search-icon'>
                <img src={assests.basket} alt="" className='basket'/>
                <div className="sign"></div>
              </div>
              <button>Sign In</button>
            </div>
          </div>
         
  )
}

export default Navbar