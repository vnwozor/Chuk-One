import React from 'react'
import './HeroSection.css'
import { assets } from '../../assets/assets'

export const HeroSection = () => {
    return (
        <section className='hero'>
            <div className='container hero__grid'>
                <div className='hero__copy'>
                    <span className='eyebrow eyebrow--line'>Engineering &amp; General Contracts — Nigeria</span>

                    <h1 className='display hero__title'>
                        Infrastructure built to <em>hold up</em> under Nigeria’s conditions.
                    </h1>

                    <p className='lead'>
                        Chuk-One Integrated Service Ltd delivers engineering construction, electrification,
                        street lighting and solar installation for public and private clients across the FCT and beyond.
                    </p>

                    <div className='btn-row'>
                        <a className='btn btn--solid' href='mailto:enekebechuka6@gmail.com?subject=Project%20enquiry'>
                            Email us
                            <svg aria-hidden='true' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                                <path d='M5 12h14' />
                                <path d='M13 6l6 6-6 6' />
                            </svg>
                        </a>
                        <a className='btn btn--ghost' href='https://wa.me/2348122323329' target='_blank' rel='noreferrer'>
                            Call the office
                        </a>
                    </div>
                </div>

                <figure className='hero__media'>
                    <img
                        className='hero__img'
                        src={assets.Hero_Image}
                        alt='Hard hat resting on engineering drawings at a construction site'
                        fetchPriority='high'
                    />
                    <figcaption className='hero__badge'>
                        <span className='mono-label'>Registered contractor</span>
                        <span className='hero__badge-text'>CAC · RC 1872413</span>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}
