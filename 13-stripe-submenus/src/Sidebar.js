import React from 'react';
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext} from './context'

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} =useGlobalContext()

    return <h2>
        Sidebar Component
    </h2>
}

export default Sidebar;