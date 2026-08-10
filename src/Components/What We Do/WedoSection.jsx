import React from 'react'
import "./WedoSection.css"
import { assets } from '../../assets/assets'
import { Line } from '../WholeLine/Line'

export const WedoSection = () => {
    return (
        <div className='wedo-main'>

            <Line fisrt={'Est.2021'} second={'RC 1872413'}/>

            <div className='wedo-div'>
                
               
                    

                <div className='wedo-head-line'>
                    <hr  className='hero-line'/>

                    <p className='wedo-head-p'>
                        WHAT WE DO
                    </p>

                </div>



                <h1 className='wedo-h1'>
                    Six Lines Of Work. One Contructor.
                </h1>

                <p className='wedo-p'>
                    Every job draws on the same core crew and equipment — so a client running electrification, roadworks and solar on one site deals with a single point of accountability, not six subcontractors.
                </p>

                

                <div className='wedo-tabs'>
                    <div className='wedo-tab'>
                        Engineering Contruction
                    </div>

                    <div className='wedo-tab'>
                        Electrification
                    </div>

                    

                    <div className='wedo-tab'>
                        General Contract
                    </div>

                    <div className='wedo-tab'>
                        Street Lights Installation
                    </div>

                    <div className='wedo-tab'>
                        Solar Installation
                    </div>

                    

                    

                    <div className='wedo-tab'>
                        Supply
                    </div>

                </div>

                <div className='wedo-img-div'>

                    <img className='wedo-img' src={assets.Image_1} alt="" />
                    <img className='wedo-img' src={assets.Image_2} alt="" />
                    <img className='wedo-img' src={assets.Image_3} alt="" />
                    <img className='wedo-img' src={assets.Image_4} alt="" />

                </div>


            
            </div>

            

            <div className='wedo-lastsection'>

                <div className='wedo-lastdiv'>
                    <h1  className='wedo-lasth1'>
                        2021
                    </h1>
                    <p  className='wedo-lastp'>
                        INCORPORATION
                    </p>
                </div>

                <div className='wedo-lastdiv'>
                    <h1  className='wedo-lasth1'>
                        06
                    </h1>
                    <p  className='wedo-lastp'>
                        CORE SERVICES
                    </p>
                </div>


                <div className='wedo-lastdiv'>
                    <h1  className='wedo-lasth1'>
                        FCT
                    </h1>
                    <p  className='wedo-lastp'>
                        BASE OF OPERATIONS
                    </p>
                </div>

                <div className='wedo-lastdivv'>
                    <h1  className='wedo-lasth1'>
                        CAC
                    </h1>
                    <p  className='wedo-lastp'>
                        REGISTERED PRIVATE LIMITED CO.
                    </p>
                </div>


            </div>

        </div>
    )
}
