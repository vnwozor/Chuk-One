import React from 'react'
import { assets } from '../../assets/assets'
import './Business.css'

const values = [
    {
        title: 'Mission',
        img: assets.Project_3,
        text: 'The company’s mission is to provide innovative engineering and construction solutions that exceed our clients’ expectations through the use of state-of-the-art technology and teamwork, while maintaining the highest standards of safety, quality and professionalism.',
    },
    {
        title: 'Vision',
        img: assets.Project_4,
        text: 'Our vision is to be the leading engineering and construction company that transforms the landscape of Africa through innovative solutions, exceptional service delivery and sustainable practices. We strive to make a positive impact on every project we undertake.',
    },
]

export const Business = () => {
    return (
        <section className='section business' aria-labelledby='business-title'>
            <div className='container'>
                <div className='business__head reveal'>
                    <span className='eyebrow'>Business values</span>
                    <h2 id='business-title' className='section-title'>
                        What drives <em>every job.</em>
                    </h2>
                </div>

                <div className='business__grid'>
                    {values.map((value, i) => (
                        <article key={value.title} className='business__card reveal' style={{ transitionDelay: `${i * 0.1}s` }}>
                            <div className='business__media'>
                                <img className='business__img' src={value.img} alt='' loading='lazy' decoding='async' />
                            </div>
                            <div className='business__body'>
                                <div className='business__title-row'>
                                    <h3 className='business__title'>{value.title}</h3>
                                    <span className='mono-label'>0{i + 1}</span>
                                </div>
                                <p className='body-muted'>{value.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
