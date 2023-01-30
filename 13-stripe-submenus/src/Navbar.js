import React from 'react'
import logo from './logo.svg'
import {FaBars} from 'react-icons/fa'
import { useGlobalContext} from './context'


const Navbar = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
    const displaySubmenu = (e) => {
      const page = e.target.textContent;
      const tempBtn = e.target.getBoundingClientRect();
      const center = (tempBtn.left + tempBtn.right) / 2;
      const bottom = tempBtn.bottom - 3;
      openSubmenu(page, { center, bottom });
    };
    const handleSubmenu = (e) => {
      if (!e.target.classList.contains('link-btn')) {
        closeSubmenu();
      }
    };
    return (
        <nav className="nav">
            <div className='nav-center'>
                <div className='nav-header '>
                    <img src={logo} className="nav-logo" alt="React"/>
                    <button className='btn toggle-btn' onClick={openSider}>
                        <FaBars/>
                    </button>
                </div>
                <ul className='nav-links'>
                    <li>
                        <button className='link-btn'>Products</button>
                    </li>
                    <li>
                        <button className='link-btn'>Developers</button>
                    </li>
                    <li>
                        <button className='link-btn'>Company</button>
                    </li>                                     
                </ul>
                <button className='btn sigin-btn'>Sign In</button>
            </div>
        </nav>
    )
}

export default Navbar;
