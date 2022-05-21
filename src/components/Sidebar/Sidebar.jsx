import React from 'react'
import './Sidebar.css'
import Logo from '../../imgs/logo.png'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
        {/* Logo */}
        <div className="logo">
            <img src={Logo} alt="logo" />
            <span>
                Sh<span>o</span>ps    
            </span>        
        </div>
    </div>
  )
}

export default Sidebar