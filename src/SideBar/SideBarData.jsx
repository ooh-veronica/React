import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import * as AiIcons from 'react-icons/ai'

const SideBarData = [
    {
        title: "Home",
        path:'/',
        icon: <AiIcons.AiFillHome />,
        className: 'data_text'
    },
    {
        title: "Careers",
        path:'/careers',
        icon: <IoIcons.IoIosPaper />,
        className: 'data_text',
       
    },
    {
        title: "Products",
        path:'/products',
        icon: <FaIcons.FaCartPlus />,
        className: 'data_text'
    },
    {
        title: "About Us",
        path:'/aboutus',
        icon: <IoIcons.IoMdPeople />,
        className: 'data_text'
    },
]

export default SideBarData