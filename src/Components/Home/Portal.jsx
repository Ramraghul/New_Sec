import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import TopBar from './TopBar'


function Portal() {
    return (
        <>
            <div className='nav-fixed'>
            <SideBar />
                <TopBar />
                
                <Outlet />
            </div>
        </>
    )
}

export default Portal