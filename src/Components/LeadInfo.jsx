import React from 'react'
import "./LeadInfo.css"

export const LeadInfo = ({index, id, initails, name, position, date}) => {
    return (
        <div key={index} className='leader-div'>
            <h1  className='lead-h1'>
                {initails}
            </h1>

            <div className='lead-info-div'>
                <div>
                    <p className='leader-name'>
                        {name}
                    </p>
                    <p className='leader-direction'>
                        {position}
                    </p>

                    <p className='leader-date'>
                        {date}
                    </p>
                </div>
            </div>
        </div>
    )
}
