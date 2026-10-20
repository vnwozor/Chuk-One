import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Footer } from './Components/Footer/Footer.jsx'
import { CookieBanner } from './Components/CookieBanner/CookieBanner.jsx'
import { Home } from './Pages/Home/Home.jsx'
import { Projects } from './Pages/Projects/Projects.jsx'
import { AboutUs } from './Pages/About Us/AboutUs.jsx'

// Scroll to the top and re-arm the fade-in animations on every page change
const usePageEffects = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })

        const items = document.querySelectorAll('.reveal:not(.is-visible)')
        if (!('IntersectionObserver' in window)) {
            items.forEach((el) => el.classList.add('is-visible'))
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        )

        items.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [pathname])
}

const App = () => {
    usePageEffects()

    return (
        <>
            <Navbar />

            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Projects' element={<Projects />} />
                    <Route path='/AboutUs' element={<AboutUs />} />
                </Routes>
            </main>

            <Footer />

            <CookieBanner />
        </>
    )
}

export default App
