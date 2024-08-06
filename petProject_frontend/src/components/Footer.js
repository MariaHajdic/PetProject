import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <button className="cookie-preferences">Cookie preferences</button>
            </div>
            <div className="footer-right">
                <Link to="/docs">Some docs</Link>
            </div>
        </footer>
    )
}

export default Footer