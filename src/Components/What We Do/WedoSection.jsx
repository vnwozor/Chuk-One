import React from 'react'
import './WedoSection.css'
import { assets } from '../../assets/assets'

const facts = [
    { value: '2021', label: 'Incorporated' },
    { value: '06', label: 'Core services' },
    { value: 'FCT', label: 'Base of operations' },
    { value: 'CAC', label: 'Registered private Ltd' },
    { value: 'Abuja', label: 'Nigeria', accent: true },
]

const services = [
    { title: 'Engineering Construction', img: assets.Image_1, alt: 'Asphalt paver and rollers laying a new road' },
    { title: 'General Contract', img: assets.Image_2, alt: 'Multi-storey building under construction with tower cranes' },
    { title: 'Solar Installation', img: assets.Image_3, alt: 'Rows of solar panels in a green field' },
    { title: 'Street Lights Installation', img: assets.Image_4, alt: 'Street lights illuminating a city road at night' },
]

const moreServices = ['Electrification', 'Supply']

export const WedoSection = () => {
    return (
        <>
            {/* Company facts */}
            <section className='facts' aria-label='Company facts'>
                <div className='container facts__grid'>
                    {facts.map((fact) => (
                        <div key={fact.label} className='facts__item'>
                            <span className={`facts__value ${fact.accent ? 'is-accent' : ''}`}>{fact.value}</span>
                            <span className='mono-label'>{fact.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* What we do */}
            <section className='section' id='services'>
                <div className='container'>
                    <div className='wedo__head reveal'>
                        <div className='wedo__title'>
                            <span className='eyebrow'>01 — What we do</span>
                            <h2 className='section-title'>
                                Six lines of work.<br />
                                <em className='muted'>One contractor.</em>
                            </h2>
                        </div>
                        <p className='lead'>
                            Every job draws on the same core crew and equipment — so a client running electrification,
                            roadworks and solar on one site deals with a single point of accountability, not six subcontractors.
                        </p>
                    </div>

                    <div className='wedo__cards'>
                        {services.map((service, i) => (
                            <article key={service.title} className='wedo__card reveal' style={{ transitionDelay: `${i * 0.08}s` }}>
                                <div className='wedo__img-wrap'>
                                    <img className='wedo__img' src={service.img} alt={service.alt} loading='lazy' decoding='async' />
                                </div>
                                <div className='wedo__card-meta'>
                                    <h3 className='wedo__card-title'>{service.title}</h3>
                                    <span className='wedo__num'>0{i + 1}</span>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className='wedo__rows'>
                        {moreServices.map((name, i) => (
                            <div key={name} className='wedo__row reveal'>
                                <span className='wedo__row-title'>{name}</span>
                                <span className='wedo__num'>0{services.length + i + 1}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
