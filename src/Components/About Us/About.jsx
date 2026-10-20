import React from 'react'
import './About.css'

export const About = () => {
    return (
        <>
            <header className='page-head'>
                <div className='container page-head__inner'>
                    <span className='eyebrow eyebrow--line'>About us</span>
                    <h1 className='display'>
                        One accountable <em>site team.</em>
                    </h1>
                </div>
            </header>

            <section className='section about'>
                <div className='container about__grid'>
                    <p className='about__intro reveal'>
                        Chuk-One Integrated Services Ltd is a Nigerian engineering and general contracting firm (RC 1872413),
                        registered with the CAC on 13 December 2021 and based in Abuja, FCT.
                    </p>

                    <div className='about__body reveal'>
                        <p className='about__p'>
                            We deliver Engineering Construction, Electrification, Street Light Installation, Solar Installation,
                            Supply, and General Contracts — scoped individually or combined into a single turnkey contract —
                            through one accountable site team.
                        </p>
                        <p className='about__p'>
                            We’re fully compliant with FIRS tax and VAT requirements and NSITF’s ECS scheme, and maintain a
                            standing banking relationship with UBA, which has confirmed our technical and financial capacity
                            to deliver on awarded contracts. The company is led by Directors Enekebe Charles Chuka and Enekebe
                            Chioma Chinelo, alongside Company Secretary Enekebe Ijeoma Lilian and shareholder Nwaejike
                            Nwanyieze Angela.
                        </p>

                        <ul className='about__badges' aria-label='Compliance'>
                            <li>CAC registered</li>
                            <li>FIRS tax &amp; VAT</li>
                            <li>NSITF ECS</li>
                            <li>UBA banking</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
