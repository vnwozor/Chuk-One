import React from 'react'
import './HeroSection.css'
import { assets } from '../../assets/assets'

export const HeroSection = () => {
  return (
    <div className='hero-main'>


        <div className='hero-div'>

            <div  className='hero-line-div'>
                <hr className='hero-line' />
                <p  className='hero-line-p'>
                    ENGINEERING & GENERAL CONTRACTS - NIGERIA 
                </p>
            </div>

            <h1  className='hero-heading'>
                Infrastructure Built To Hold Up Under Nigeria's Conditions.
            </h1>

            <p  className='hero-des'>
                Chuk-One Integrated Service Ltd delivery engineering construction electrification street lighting and solar installation for public and private clients across the FCT and beyond
            </p>


            <div className='hero-btn-div'>
                <a href="https://wa.me/2348122323329">
                    <button  className='hero-btn'>
                        Call The Office
                    </button>
                </a>
                
                <a href="mailto:enekebechuka6@gmail.com?subject=Hello">
                    <button className='hero-btn-op'>
                        Email Us
                    </button>
                </a>
                
            </div>


        </div>


        <img  className='hero-img' src={assets.Hero_Image}/>



    </div>
  )
}
