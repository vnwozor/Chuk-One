import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='navbar-main'>

        <NavLink to='/' className='left-section'>
            <img className='navbar-img' src={assets.Chuk_Logo} />
            <p className='navbar-p' >
                RC  1872413 - ABUJA,  FCT
            </p>
        </NavLink>

        <div className='navbar-div-a'>
            <NavLink to='/' className='navbar-a' href="">
                Home
            </NavLink>

            <NavLink to='/Projects' className='navbar-a'  href="">
                Projects
            </NavLink>

            <NavLink to='AboutUs' className='navbar-a'  href="">
                About Us
            </NavLink>
        </div>


        <div  className='right-section'>
            <a href="https://wa.me/2348122323329">

                <button className='navbar-btn'>
                    Contact Us
                </button>

            </a>
            

            
        </div>

        <img onClick={() => setOpenMenu(!openMenu)} className='menubar' src={assets.Menu_bar} />

        <div className='navv'>

            <div onClick={() => setOpenMenu (!openMenu)} className={`right-menu ${openMenu ? 'open' : ''}`} />

        

            <div className={`opened ${openMenu ? 'open' : ''} `}>
                <div className='navbar-open-div'>

                    <NavLink onClick={() => setOpenMenu(!openMenu)} to='/' className='navbar-a' href="">
                        Home
                    </NavLink>

                    <NavLink onClick={() => setOpenMenu(!openMenu)} to='/Projects' className='navbar-a'  href="">
                        Projects
                    </NavLink>

                    <NavLink onClick={() => setOpenMenu(!openMenu)} to='AboutUs' className='navbar-a'  href="">
                        About Us
                    </NavLink>
                </div>

                <img onClick={() => setOpenMenu(!openMenu)} className='close-btn' src={assets.Close_btn}/>


                <a href="https://wa.me/2348122323329">
                    <button className='navbar-bt'>
                        Contact Us
                    </button>
                </a>
                
            </div>

        </div>


       


    </div>
  )
}
