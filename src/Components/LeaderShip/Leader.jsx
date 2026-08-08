import React, { useContext } from 'react'
import "./Leader.css"
import { ShopContext } from '../../Context/ShopContext'
import { LeadInfo } from '../LeadInfo'

export const Leader = () => {

    const { leaderInfo } = useContext(ShopContext)

    return (
        <div className='leader-main'>

            <div className='leadd'>
                <div  className='hero-line-div'>
                    <hr className='hero-line' />
                    <p  className='hero-line-p'>
                        LEADERSHIP
                    </p>
                </div>

                <h1  className='wedo-h1'>
                    The People On The Register
                </h1>

                <p className='leader-p'>
                    The directors named on Chuk-One's CAC filing — the same 
                    names on every certificate behind this page.
                </p>

    
            </div>


            <div className='leading-dev'>
                {
                    leaderInfo.map((details, index) => {
                        return (
                            <LeadInfo key={index} initails={details.initails} name={details.name} position={details.position} date={details.date}/>
                        )
                    })
                }
            </div>

        </div>
    )
}
