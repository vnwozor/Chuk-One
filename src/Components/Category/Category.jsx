import React from 'react'
import './Category.css'

const categories = ['Road construction', 'Water infrastructure', 'Structural concrete', 'Building construction']

export const Category = () => {
    return (
        <section className='cate' aria-labelledby='cate-title'>
            <div className='container'>
                <div className='cate__head reveal'>
                    <span className='eyebrow'>Project categories</span>
                    <h2 id='cate-title' className='section-title'>What we’ve built.</h2>
                </div>

                <ol className='cate__grid'>
                    {categories.map((name, i) => (
                        <li key={name} className='cate__item reveal' style={{ transitionDelay: `${i * 0.08}s` }}>
                            <span className='cate__num'>0{i + 1}</span>
                            <span className='cate__title'>{name}</span>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
