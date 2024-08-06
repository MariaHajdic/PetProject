import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaDonate, FaDoorOpen, FaBars, FaInfoCircle, FaUser, FaEnvelope } from 'react-icons/fa'
import './Header.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(!menuOpen)

    return (
        <header className="header">
            <div className="logo">
                PetPlatform
            </div>
            <div className="nav">
                <div className="search">
                    <FaSearch className="search-icon" />
                    <input type="text" className="searchBar" placeholder="Search" />
                </div>
                <div className="nav-item"><FaInfoCircle /><span>About</span></div>
                <div className="nav-item"><FaDonate /><span>Donate to S</span></div>
                <div className="nav-item"><FaDonate /><span>Donate to X</span></div>
                <div className="nav-item"><FaDoorOpen /><span>Log In</span></div>
                <div className="nav-item"><FaUser/><span>Sign Up</span></div>
                <div className="menu-icon" onClick={toggleMenu}><FaBars /></div>
                {menuOpen && (
                    <div className="dropdown-menu">
                        <Link to="/about">About</Link>
                        <Link to="/newsletter">Newsletter</Link>
                        <Link to="/helpt">Help</Link>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header

{/*
        return (
    <header className="header">
        <div className="logo">
            <Link to="/">PetPlatform</Link>
        </div>
        <div className="search">
            <input type="text" className="searchBar" placeholder="Search" />
            <i className="search-icon"></i>
        </div>
        <div className="donate-buttons">
            <span className="button">Donate to S</span>
            <span className="button">Donate to PetPlatform</span>
        </div>
        <nav>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/">S's List</Link></li>
                <li><Link to="/">A's List</Link></li>
                <li><Link to="/">Login / Sign Up</Link></li>
                <li><Link to="/">Contact Details</Link></li>
            </ul>
        </nav>    
        {/* <div className="right">
            <span className="button">About</span>
            <span className="button">List of S</span>
            <span className="button">List of A</span>
            <span className="button">Login / Sign Up</span>
            <span className="button">Contact Details</span>
        </div> }
        </header>
    )
     */}