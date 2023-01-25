import React from 'react';
import logo from './logo.svg';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
  
    return (
      <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className='sidebar-header'>
          <img src={logo} className='logo' alt='coding addict' />
          <button className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        
        
      </aside>
    );
  };
  
  export default Sidebar;
  