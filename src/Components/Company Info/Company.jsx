import React from 'react'
import './Company.css'

const info = [
    { label: 'Phone number', value: '+234 812 232 3329', href: 'https://wa.me/2348122323329', external: true },
    { label: 'Email', value: 'enekebechuka6@gmail.com', href: 'mailto:enekebechuka6@gmail.com' },
    { label: 'Registered office', value: '4 Birnin Kebbi Crescent, Garki 2, Abuja FCT, Nigeria' },
    { label: 'Registration', value: 'RC 1872413 — CAC Nigeria' },
]

export const Company = () => {
    return (
        <section className='company' aria-labelledby='company-title'>
            <div className='container'>
                <div className='company__head reveal'>
                    <span className='eyebrow'>Company info</span>
                    <h2 id='company-title' className='section-title'>On the record.</h2>
                </div>

                <dl className='company__grid'>
                    {info.map((item) => (
                        <div key={item.label} className='company__item reveal'>
                            <dt className='mono-label'>{item.label}</dt>
                            <dd className='company__value'>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        className='company__link'
                                        {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                                    >
                                        {item.value}
                                    </a>
                                ) : (
                                    item.value
                                )}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}
