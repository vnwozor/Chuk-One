import React from 'react'
import "./About.css"

export const About = () => {
    return (
        <div className='About-main'>

            <h1  className='hero-heading'>
                About Us
            </h1>


            <div  className='about-div'>
                <p className='about-p'>
                    Chuk-One Integrated Services Ltd is a Nigerian engineering and general contracting firm {`(RC 1872413)`}, 
                    registered with the CAC on 13 December 2021 and based in Abuja, FCT. We deliver Engineering Construction, 
                    Electrification, Street Light Installation, Solar Installation, Supply, and General Contracts — scoped 
                    individually or combined into a single turnkey contract — through one accountable site team.
                </p>
                <p  className='about-p'>
                    We're fully compliant with FIRS tax and VAT requirements and NSITF's ECS scheme, and maintain a standing 
                    banking relationship with UBA, which has confirmed our technical and financial capacity to deliver on awarded 
                    contracts. The company is led by Directors Enekebe Charles Chuka and Enekebe Chioma Chinelo, alongside Company 
                    Secretary Enekebe Ijeoma Lilian and shareholder Nwaejike Nwanyieze Angela.
                </p>
            </div>
        

        </div>
    )
}
