import React from 'react'
import { assets } from '../../assets/assets'
import "./Business.css"

export const Business = () => {
    return (
        <div className='business-main'>

            <h1 className='business-h1'>
                BUSINESS VALUES
            </h1>

            <div className='business-div'>

                <div className='business-dev'>
                    <div className='business-des-div'>
                        <h1  className='business-des-h1'>
                            MISSION
                        </h1>
                        <p  className='business-p'>
                            The company's mission is to provide innovative 
                            engineering and construction solutions that exceed
                             our clients’ expectations through the use of 
                             state-of-the-art technology and teamwork, while 
                             maintaining the highest standards of safety, quality 
                             and professionalism.
                        </p>
                    </div>
                    <img  className='business-img' src={assets.Project_3} />
                </div>

        
            

                <div className='business-dev'>
                    <div className='business-des-div'>
                        <h1  className='business-des-h1'>
                            VISSION
                        </h1>
                        <p  className='business-p'>
                            Our vision is to be the leading engineering and 
                            construction company that transforms the landscape 
                            of Africa through innovative solutions, exceptional 
                            service delivery and sustainable practices. We strive 
                            to make a positive impact on every project we undertake.
                        </p>
                    </div>
                    <img  className='business-img' src={assets.Project_4}/>
                </div>


            

            </div>




        </div>
    )
}
