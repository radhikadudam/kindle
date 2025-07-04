import React from 'react'
import Navbar from '../components/Navbar'
import SideNavbar from '../components/SideNavbar'
import Card from '../components/Card'
import "./Home.css"

function First() {
    return (
        <div>
            <Navbar />
            <div className='com'>
                <SideNavbar />
                <Card />
            </div>
        </div>
    )
}

export default First
