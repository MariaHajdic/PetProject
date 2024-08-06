import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import './App.css'
import './components/Header.css'

const App = () => {
    useEffect(() => {
        const updatePadding = () => {
            const header = document.querySelector('.header')
            const mainContent = document.querySelector('.main-content')
            if (header && mainContent) {
                mainContent.style.paddingTop = `${header.offsetHeight}px`
            }
        }

        window.addEventListener('resize', updatePadding)
        updatePadding()

        return () => window.removeEventListener('resize', updatePadding)
    }, [])

    return (
        <Router>
            <Header />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App