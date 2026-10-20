import React from 'react'
import './HowTo.css'

const steps = [
    {
        title: 'You tell us your scope',
        text: 'Send the scope, location and timeline. We come back with the next step.',
    },
    {
        title: 'We visit the site',
        text: 'A site assessment confirms conditions, access and any constraints before we quote.',
    },
    {
        title: 'We build',
        text: 'Our site team executes to the agreed scope, with regular updates through to completion.',
    },
    {
        title: 'We hand over',
        text: 'You get a finished, inspected job — with documentation for anything that needs it.',
    },
]

export const HowTo = () => {
    return (
        <>
            {/* How it works */}
            <section className='how section' id='process'>
                <div className='container'>
                    <div className='how__head reveal'>
                        <span className='eyebrow'>02 — How it works</span>
                        <h2 className='section-title'>Four steps from first call to handover.</h2>
                    </div>

                    <ol className='how__steps'>
                        {steps.map((step, i) => (
                            <li key={step.title} className='how__step reveal' style={{ transitionDelay: `${i * 0.08}s` }}>
                                <span className='how__num'>0{i + 1}</span>
                                <h3 className='how__title'>{step.title}</h3>
                                <p className='body-muted'>{step.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Why it matters */}
            <section className='statement' aria-label='Why it matters'>
                <div className='container statement__inner'>
                    <span className='statement__label'>03 — Why it matters</span>
                    <p className='statement__text reveal'>
                        The light that comes on. The power that stays on. That’s our job —{' '}
                        <em>we just happen to have the paperwork to prove we can do it.</em>
                    </p>
                </div>
            </section>

            {/* Get started */}
            <section className='cta' id='contact'>
                <div className='container cta__inner reveal'>
                    <span className='eyebrow'>Get started</span>
                    <h2 className='display cta__title'>
                        Tell us what needs <em>building.</em>
                    </h2>
                    <p className='lead'>Send the scope, location and timeline — we’ll come back with the next step.</p>
                    <div className='btn-row cta__buttons'>
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
            </section>
        </>
    )
}
