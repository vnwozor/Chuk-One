import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { assets } from '../../assets/assets'
import './Navbar.css'

const links = [
    { to: '/', label: 'Home' },
    { to: '/Projects', label: 'Projects' },
    { to: '/AboutUs', label: 'About Us' },
]

const ArrowUpRight = () => (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17L17 7" />
        <path d="M8 7h9v9" />
    </svg>
)

export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { pathname } = useLocation()

    // Close the mobile menu whenever the page changes
    useEffect(() => {
        setOpenMenu(false)
    }, [pathname])

    // Lock page scroll while the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = openMenu ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [openMenu])

    // Slightly stronger header once the page is scrolled
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Close the menu with the Escape key
    useEffect(() => {
        if (!openMenu) return
        const onKey = (e) => e.key === 'Escape' && setOpenMenu(false)
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [openMenu])

    return (
        <>
            <div className='utility-bar'>
                <div className='container utility-bar__inner'>
                    <span>RC 1872413 · Abuja, FCT</span>
                    <span className='utility-bar__right'>Engineering &amp; General Contracts · Est. 2021</span>
                </div>
            </div>

            <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
                <nav className='container site-nav' aria-label='Main'>
                    <NavLink to='/' className='site-nav__logo' aria-label='Chuk-One home'>
                        <img src={assets.Chuk_Logo} alt='Chuk-One' width='150' height='34' />
                    </NavLink>

                    <div className='site-nav__links'>
                        {links.map((link) => (
                            <NavLink key={link.to} to={link.to} end className='site-nav__link'>
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    <div className='site-nav__actions'>
                        <a className='btn btn--ghost btn--sm site-nav__cta' href='https://wa.me/2348122323329' target='_blank' rel='noreferrer'>
                            Contact us
                            <ArrowUpRight />
                        </a>

                        <button
                            type='button'
                            className='site-nav__toggle'
                            aria-label={openMenu ? 'Close menu' : 'Open menu'}
                            aria-expanded={openMenu}
                            aria-controls='mobile-menu'
                            onClick={() => setOpenMenu(!openMenu)}
                        >
                            <span className={`burger ${openMenu ? 'is-open' : ''}`} aria-hidden='true'>
                                <span />
                                <span />
                            </span>
                        </button>
                    </div>
                </nav>
            </header>

            <div id='mobile-menu' className={`mobile-menu ${openMenu ? 'is-open' : ''}`} aria-hidden={!openMenu}>
                <div className='container mobile-menu__inner'>
                    <nav className='mobile-menu__links' aria-label='Mobile'>
                        {links.map((link, i) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end
                                className='mobile-menu__link'
                                tabIndex={openMenu ? 0 : -1}
                                style={{ transitionDelay: openMenu ? `${0.08 + i * 0.05}s` : '0s' }}
                            >
                                <span className='mobile-menu__num'>0{i + 1}</span>
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className='mobile-menu__foot'>
                        <a className='btn btn--solid' href='https://wa.me/2348122323329' target='_blank' rel='noreferrer' tabIndex={openMenu ? 0 : -1}>
                            Contact us
                            <ArrowUpRight />
                        </a>
                        <span className='mono-label'>RC 1872413 · Abuja, FCT</span>
                    </div>
                </div>
            </div>
        </>
    )
}
