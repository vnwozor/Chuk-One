import React from 'react'
import "./Line.css"

export const Line = ({fisrt, second}) => {
  return (
    <div className='section-whole-line'>
        <hr className='whole-linee' />
        <p className='line-p'>
            {fisrt}
        </p>
        <hr className='whole-line' />
        <p className='line-pp'>
            {second}
        </p>
        <hr className='whole-linee' />
    </div>
  )
}
