import React, { useContext } from 'react'
import './Leader.css'
import { ShopContext } from '../../Context/ShopContext'
import { LeadInfo } from '../LeadInfo'

export const Leader = () => {
    const { leaderInfo } = useContext(ShopContext)

    return (
        <section className='section leader' aria-labelledby='leader-title'>
            <div className='container'>
                <div className='leader__head reveal'>
                    <div className='leader__title'>
                        <span className='eyebrow'>Leadership</span>
                        <h2 id='leader-title' className='section-title'>
                            The people on <em>the register.</em>
                        </h2>
                    </div>
                    <p className='lead'>
                        The directors named on Chuk-One’s CAC filing — the same names on every certificate behind this page.
                    </p>
                </div>

                <div className='leader__grid'>
                    {leaderInfo.map((details, index) => (
                        <LeadInfo
                            key={details.id}
                            index={index}
                            initails={details.initails}
                            name={details.name}
                            position={details.position}
                            date={details.date}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
