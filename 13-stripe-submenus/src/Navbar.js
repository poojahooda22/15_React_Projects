import React from 'react'
import logo from './logo.svg'
import {FaBars} from 'react-icons/fa'
import { useGlobalContext} from './context'


const Navbar = () => {
    const{ openSider, openSubmenu, closeSubmenu } = useGlobalContext()
    return (
        <nav className="nav">
            <div className='nav-center'>
                <div className='nav-header '>
                    <img src={logo} className="nav-logo" alt="React"/>
                    <button className='btn toggle-btn' onClick={openSider}>
                        <FaBars/>
                    </button>
                </div>
                <ul className='nav-links'></ul>
            </div>
        </nav>
    )

}

export default Navbar;
