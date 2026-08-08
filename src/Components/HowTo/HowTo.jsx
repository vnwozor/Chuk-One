import React from 'react'
import "./HowTo.css"
import { Line } from '../WholeLine/Line'

export const HowTo = () => {
  return (
    <div className='how'>

        <Line fisrt={'NIGERIA'} second={'ABUJA, FCT'}/>

        <div className='how-main'>
            <div>
                <div className='wedo-head-line'>
                    <hr className='hero-line' />
                    <p className='wedo-head-p'>
                        HOW IT WORKS
                    </p>
                </div>

                <h1 className='wedo-h1'>
                    Four Steps From First Call To Handover
                </h1>
            </div>

            <div className='how-div'>

                <h1 className='how-num'>
                    01
                </h1>

                <div className='how-sub'>
                    <h2 className='how-h2'>
                        You Tell Us Your Scope
                    </h2>

                    <p className='how-p'>
                        Chuk-One Integrated Service Ltd delivery engineering construction electrification street lighting and solar installation for public and private clients across the FCT and beyond
                    </p>
                </div>
        
            </div>

            <div className='how-div'>

                <h1 className='how-num'>
                    02
                </h1>

                <div className='how-sub'>
                    <h2 className='how-h2'>
                        We Visit The Site
                    </h2>

                    <p className='how-p'>
                        A site assessment confirms conditions, access and any constraints before we quote.
                    </p>
                </div>
        
            </div>


            <div className='how-div'>

                <h1 className='how-num'>
                    03
                </h1>

                <div className='how-sub'>
                    <h2 className='how-h2'>
                        We Build
                    </h2>

                    <p className='how-p'>
                        Our Site team executes to the agreed scope, with regular updates through to completion.
                    </p>
                </div>
        
            </div>

            <div className='how-div'>

                <h1 className='how-num'>
                    04
                </h1>

                <div className='how-sub'>
                    <h2 className='how-h2'>
                        We hand Over
                    </h2>

                    <p className='how-p'>
                        You get a finished, Inspected Job - with documentation for anything that needs it
                    </p>
                </div>
        
            </div>
            
        </div>


        <div className='how-banner'>

            <div  className='how-head-line'>
                <hr className='how-line' />
                <p className='how-head-p'>
                    WHY IT MATTERS
                </p>
            </div>

            <h1 className='howto-h1'>
                The light that comes on, The power that stays on - Thats our job. We just Happen have the paper work to prove we can do it 
            </h1>


        </div>

        <div className='howfoot'>

            <p className='howfoot-head'>GET STARTED</p>

            <h1 className='howfoot-h1'>
                Tell Us What Needs Building
            </h1>

            <p className='howfoot-des'>
                Send the Scope, Location and Timeline - We'll Come Back With Next Step
            </p>


            <div className='howfoot-btn-div'>
                
                <a href="mailto:enekebechuka6@gmail.com?subject=Hello">
                    <button className='howfoot-btn'>
                        Email Us
                    </button>
                </a>
                <a href="https://wa.me/2348122323329">
                    <button  className='howfoot-btn-op'>
                        Call The Office
                    </button>
                </a>

            </div>

        </div>



    </div>
  )
}
