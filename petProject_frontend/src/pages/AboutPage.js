import React from 'react'
import Footer from '../components/Footer'
import './AboutPage.css'

const AboutPage = () => {
    return (
        <div className="about-page">
            <img src="/assets/images/2014-04-10_00-00-00.jpeg" />
            <div className="content">
                <h1>About PetProject</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Vivamus lacinia odio vitae vestibulum vestibulum.</p>
            </div>
        </div>
    )
}

export default AboutPage