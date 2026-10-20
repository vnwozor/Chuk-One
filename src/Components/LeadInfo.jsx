import React from 'react'
import './LeadInfo.css'

export const LeadInfo = ({ index = 0, initails, name, position, date }) => {
    return (
        <article className='lead-card reveal' style={{ transitionDelay: `${index * 0.08}s` }}>
            <div className='lead-card__top'>
                <span className='lead-card__initials' aria-hidden='true'>{initails}</span>
            </div>

            <div className='lead-card__info'>
                <h3 className='lead-card__name'>{name}</h3>
                <p className='lead-card__position'>{position}</p>
                <p className='lead-card__date'>{date}</p>
            </div>
        </article>
    )
}
