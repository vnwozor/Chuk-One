import React from 'react'
import './ProjectTaken.css'
import { assets } from '../../assets/assets'

const projects = [
    {
        title: 'Construction of road',
        client: 'Federal Ministry of Works',
        location: 'Kaduna, Kaduna State',
        img: assets.Project_1,
    },
    {
        title: 'Construction of concrete tanks',
        client: 'Federal Ministry of Water Resources',
        location: 'Jos, Plateau State',
        img: assets.Project_2,
    },
    {
        title: 'Solar installation',
        client: 'Rural Electrification Agency (REA)',
        location: 'Yola, Adamawa State',
        img: assets.Project_7,
    },
    {
        title: 'Construction of water infrastructure',
        client: 'Federal Ministry of Water Resources',
        location: 'Lokoja, Kogi State',
        img: assets.Project_9,
    },
    {
        title: 'Construction of buildings',
        client: 'Federal Ministry of Works',
        location: 'Bauchi, Bauchi State',
        img: assets.Project_6,
    },
    {
        title: 'Construction of structural concrete',
        client: 'Kaduna State Ministry of Works & Housing',
        location: 'Kaduna, Dungu',
        img: assets.Project_8,
    },
    {
        title: 'Construction of buildings',
        client: 'Federal Capital Territory Administration (FCTA)',
        location: 'Abuja, FCT',
        img: assets.Project_5,
    },
]

export const ProjectTaken = () => {
    return (
        <>
            <header className='page-head'>
                <div className='container page-head__inner'>
                    <span className='eyebrow eyebrow--line'>Major projects undertaken</span>
                    <h1 className='display'>
                        Projects <em>taken.</em>
                    </h1>
                    <p className='lead'>
                        Roads, water infrastructure, buildings and solar — delivered for federal, state and FCT clients across Nigeria.
                    </p>
                </div>
            </header>

            <section className='section projects'>
                <div className='container projects__list'>
                    {projects.map((project, i) => (
                        <article key={`${project.title}-${i}`} className={`project reveal ${i % 2 ? 'is-flipped' : ''}`}>
                            <div className='project__media'>
                                <img
                                    className='project__img'
                                    src={project.img}
                                    alt={`${project.title} — ${project.location}`}
                                    loading='lazy'
                                    decoding='async'
                                />
                            </div>

                            <div className='project__info'>
                                <span className='project__index'>{String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
                                <h2 className='project__title'>{project.title}</h2>

                                <dl className='project__meta'>
                                    <div className='project__meta-row'>
                                        <dt className='mono-label'>Client</dt>
                                        <dd>{project.client}</dd>
                                    </div>
                                    <div className='project__meta-row'>
                                        <dt className='mono-label'>Location</dt>
                                        <dd>{project.location}</dd>
                                    </div>
                                </dl>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}
