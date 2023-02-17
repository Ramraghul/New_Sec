import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import TopBar from './TopBar'


function Portal() {
    return (
        <>
            <div id="page-top">
                <div id="wrapper">
                    <SideBar/>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <TopBar/>
                            <div className="container-fluid">
                                <Outlet />
                            </div>
                        </div>
                        {/* <Footer></Footer> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portal