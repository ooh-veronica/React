import React from 'react'
import { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as GrIcons from 'react-icons/gr'
import {Link} from 'react-router-dom'
import SideBarData from './SideBarData'
import './SideBar.css'
import {IconContext} from 'react-icons'

function SideBar() {


    const [sidebar, setSideBar] = useState(false)

    const showSidebar = () => {
        setSideBar(!sidebar)
    }

    return (
        <div className='content'>
        <IconContext.Provider value={{color: '#fff'}}>

            <div className='sidebar_content'>
                <Link to="#" className="sidebar_show">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>

            <nav className={sidebar ? 'sidebar_menu active' : 'sidebar_menu'}>
                <ul className='sidebar_list' onClick={showSidebar}>
                    <li className='sidebar_items'>
                        <Link to="#" className="sidebar_show">
                            <GrIcons.GrClose />
                        </Link>
                    </li>

                    {SideBarData.map((item, index)=> {
                        return (
                            <li key={index} className={item.className}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className='header_content'>
                <ul className='header_list'>
                    <li className='header_items'>Menu</li>
                    <li className='header_items'>Price</li>
                    <li className='header_items'>Contacts</li>
                </ul>
            </div>
        </IconContext.Provider>
        </div>
    )
}

export default SideBar
