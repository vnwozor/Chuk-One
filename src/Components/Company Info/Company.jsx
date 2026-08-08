import React from 'react'
import "./Company.css"

export const Company = () => {
    return (
        <div className='company-main'>

            <h1 className='hero-heading'>
                Comapany Info
            </h1>

            <div className='company-div'>

                <div className='company-de'>
                    <div>

                        <div  className='hero-line-div'>
                            <hr className='hero-line' />
                            <p  className='hero-line-p'>
                                PHONE NUMBER
                            </p>
                        </div>

                        <p className='company-p'>
                            +234 812 232 3329
                        </p>

                    </div>

                    <div>

                        <div  className='hero-line-div'>
                            <hr className='hero-line' />
                            <p  className='hero-line-p'>
                                REGISTERED OFFICE
                            </p>
                        </div>

                        <p  className='company-p'>
                            4 Birnin Kebbi Crescent, Garki 2, Abuja FCT, Nigeria
                        </p>

                    </div>
                    
                </div>

















                <div className='company-de'>

                    <div>
                        <div  className='hero-line-div'>
                            <hr className='hero-line' />
                            <p  className='hero-line-p'>
                                EMAIL 
                            </p>
                        </div>

                        <p  className='company-p'>
                           enekebechuka6@gmail.com
                        </p>

                    </div>


                    <div>

                        <div  className='hero-line-div'>
                            <hr className='hero-line' />
                            <p  className='hero-line-p'>
                                REGISTRATION
                            </p>
                        </div>

                        <p  className='company-p'>
                            RC 1872413 - CAC Nigeria
                        </p>

                    </div>
                    
                </div>
            </div>



        </div>
    )
}
