import React, { useState } from 'react'
import { SiDatabricks } from 'react-icons/si'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top' className='navbar'>
            <div className="container">
                <div className="logo">
                    <SiDatabricks className='icon' />
                    <h1>GET PQ & ANS</h1>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/POSTUTME'>POST/UTME</Link></li>
                    <li><Link to='/JAMB'>JAMB</Link> </li>
                    <li><Link to='/WAEC'>WAEC</Link></li>  
                    <li><Link to='/SATIELTSGRE'>SAT,GRE & IELTS</Link></li>
                    <li><button><Link to='/contact'>Contact</Link></button></li>
                    </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar