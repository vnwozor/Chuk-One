import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { openCookieSettings } from '../CookieBanner/CookieBanner.jsx'
import './Footer.css'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container footer__inner'>
                <div className='footer__top'>
                    <div className='footer__brand'>
                        <img src={assets.Chuk_Logo} alt='Chuk-One' width='150' height='34' className='footer__logo' />
                        <p className='body-muted'>
                            Engineering construction, electrification, street lighting and solar installation across the FCT and beyond.
                        </p>
                    </div>

                    <div className='footer__cols'>
                        <div className='footer__col'>
                            <span className='mono-label'>Company</span>
                            <NavLink to='/' end className='footer__link'>Home</NavLink>
                            <NavLink to='/Projects' className='footer__link'>Projects</NavLink>
                            <NavLink to='/AboutUs' className='footer__link'>About Us</NavLink>
                        </div>

                        <div className='footer__col'>
                            <span className='mono-label'>Contact</span>
                            <a className='footer__link' href='mailto:enekebechuka6@gmail.com'>enekebechuka6@gmail.com</a>
                            <a className='footer__link' href='https://wa.me/2348122323329' target='_blank' rel='noreferrer'>+234 812 232 3329</a>
                            <span className='footer__text'>4 Birnin Kebbi Crescent, Garki 2,<br />Abuja FCT, Nigeria</span>
                        </div>
                    </div>
                </div>

                <div className='footer__bottom'>
                    <span>&copy; 2021 Chuk-One Integrated Services Ltd · RC 1872413</span>
                    <button type='button' className='footer__cookie' onClick={openCookieSettings}>
                        Cookie settings
                    </button>
                </div>
            </div>
        </footer>
    )
}
